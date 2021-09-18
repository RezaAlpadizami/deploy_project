import { Button, Row, Space, Table, Tag, Typography, Alert, Col } from "antd";
import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import "./ListPaymentRequest.css";
import useGetPaymentRequest from "../Query/getGetPaymentRequest";

const { Text } = Typography;

const ListPaymentRequest = () => {
  const history = useHistory();
  const {isLoading, isError, data, refetch} = useGetPaymentRequest();
  console.log("data >>", isLoading, data) 
  const navigateTo = React.useCallback((id) => history.push(`/unitkerja-detailpayment/${id}`), [history]);

  const columns = React.useMemo(
    () => [
      {
        title: "No",
        render: (_, __, index) => <Text>{index + 1}</Text>,
      },
      {
        title: "Tanggal Request",
        dataIndex: "tgl_request",
        key: "tgl_request",
        render: (value) => {
          const formateDate = moment(new Date(value)).format("DD MMMM YYYY HH:mm");
          return <Text>{formateDate} WIB</Text>;
        },
      },
      {
        title: "Tanggal Pembayaran",
        dataIndex: "tgl_pembayaran",
        key: "tgl_pembayaran",
        render: (value) => {
          const formateDate = moment(new Date(value)).format("DD MMMM YYYY");
          return <Text>{formateDate}</Text>;
        },
      },
      {
        title: "Action",
        key: "action",
        dataIndex: "action",
        render: (action) => (
          <>
            {action.map((act) => {
              let color;
              if (act === "rejected by accounting") {
                color = "volcano";
              } else if (act === "disetujui") {
                color = "green";
              } else if (act === "menunggu konfirmasi") {
                color = "yellow";
              }
              return (
                <Tag color={color} key={act}>
                  {act.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: "Button",
        render: (data) => {
          return (
            <Space size="middle">
              <Button
                type="primary"
                onClick={() => {
                  navigateTo(data.id);
                }}
              >
                Detail
              </Button>
            </Space>
          );
        },
      },
    ],
    [navigateTo]
  );

  return (
    <Row
      justify="center"
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Space direction="vertical">
        <h1>List Payment Request - KC Bank XXX</h1>
        {isError && (
          <Alert
            message="Gagal memuat data"
            showIcon
            type="error"
            action={
              <Col span={4}>
                <Button size="small" denger onClick={refetch}>
                  Muat ulang
                </Button>
              </Col>
            }
          />
        )}
        <Table loading={isLoading} rowClassName={(_, index) => (index % 2 === 0 ? "table-row-light" : "table-row-dark")} columns={columns} dataSource={data}></Table>
      </Space>
    </Row>
  );
};

export default ListPaymentRequest;
