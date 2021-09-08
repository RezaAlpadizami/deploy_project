import { Button, Row, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./ListRole.css";

const data = [
  {
    key: "1",
    no: "1.",
    name: "Dinda Nurlita",
    role: "Accounting",
    username: "10001",
  },
  {
    key: "2",
    no: "2.",
    name: "Sarifuddin",
    role: "General Support",
    username: "10002",
  },
  {
    key: "3",
    no: "3.",
    name: "Reza Alpidzami",
    role: "Admin",
    username: "10003",
  },
];

const ListRole = () => {
  const columns = React.useMemo(
    () => [
      {
        title: "No",
        dataIndex: "no",
        key: "no",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "Username",
        key: "username",
        dataIndex: "username",
      },
      {
        // title: 'Button',
        key: "buttonDetail",
        render: (text) => (
          <Space size="small">
            <Link to="/">lihat</Link>
          </Space>
        ),
      },
      {
        // title: 'Button',
        key: "buttonDetail",
        render: (text) => (
          <Space size="small">
            <Link>Ubah</Link>
          </Space>
        ),
      },
      {
        // title: 'Button',
        key: "buttonDetail",
        render: (text) => (
          <Space size="small">
            <Link>Hapus</Link>
          </Space>
        ),
      },
    ],

    []
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
      <h1>Role & Account</h1>
      <Button
        style={{
          width: 720,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginBottom: 15,
          borderRadius: 10,
          backgroundColor: "orange",
        }}
      >
        Add New Role & Account
      </Button>
      <Table
        rowClassName={(_, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        columns={columns}
        dataSource={data}
      />
    </Row>
  );
};

export default ListRole;