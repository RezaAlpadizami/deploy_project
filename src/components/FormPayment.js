import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select, Typography } from "antd";
import moment from "moment";
import TextArea from "antd/lib/input/TextArea";
import { useMutation, QueryClientProvider, QueryClient } from "react-query";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./FormPayment.css";

const Text = Typography;

const { Option } = Select;
const Model = {
  diminta_oleh: "",
  keperluan: "",
  tanggal_pembayaran_aktual: "",
  jumlah_payment: "",
  terbilang: "",
  nama_rek_penerima: "",
  no_rek_penerima: "",
  request_terkirim: "",
  status: "",
};

const ListPaymentValue = [
  {
    key: "spp",
    value: "Pembayaran SPP",
    label: "Pembayaran SPP",
    isDisable: false,
  },

  {
    key: "kartukredit",
    value: "Pembayaran Kartu Kredit",
    label: "Pembayaran Kartu Kredit",
    isDisable: false,
  },
  {
    key: "tokenlistrik",
    value: "Pembayaran Token Listrik",
    label: "Pembayaran Token Listrik",
    isDisable: false,
  },
  {
    key: "kpr",
    value: "Pembayaran KPR",
    label: "Pembayaran KPR",
    isDisable: false,
  },
];

const FormPayment = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const history = useHistory();
  const mutation = useMutation(
    (formData) => {
      return fetch("http://localhost:5000/paymentRequest", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData), // body data type must match "Content-Type" header
      });
    },
    {
      onSuccess: () => {
        history.push("/unitkerja-beranda");
      },
    }
  );

  const [formState, setFormState] = useState({
    Model,
  });

  const handleSubmitForm = React.useCallback(() => {
    mutation.mutate({
      diminta_oleh: formState.Model.diminta_oleh,
      keperluan: formState.Model.keperluan,
      jumlah_payment: formState.Model.jumlah_payment,
      terbilang: formState.Model.terbilang,
      nama_rek_penerima: formState.Model.nama_rek_penerima,
      no_rek_penerima: formState.Model.no_rek_penerima,
      tgl_request: new Date().toString(),
      tgl_pembayaran: formState.Model.tanggal_pembayaran_aktual,
      status_request: "",
      action: ["menunggu konfirmasi"],
    });
  }, [formState, mutation]);

  const onFinish = React.useCallback((values) => {
    console.log("Success:", values);
  }, []);

  const onChangeDate = React.useCallback(
    (_, dateString) => {
      const formateDate = moment(new Date(dateString)).format("DD-MMM-YYYY hh:mm");
      console.log(formateDate + "WIB");
      setFormState({
        ...formState,
        Model: {
          ...formState.Model,
          tanggal_pembayaran_aktual: dateString,
        },
      });
    },
    [formState]
  );

  const onFinishFailed = React.useCallback((errorInfo) => {
    console.log("Failed:", errorInfo);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Row justify="center">
        <Col span={14}>
          <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item labelAlign="left" labelCol={{ span: 8 }} label="Diminta Oleh" name="diminta_oleh" rules={[{ required: true, message: "Diminta Oleh tidak boleh kosong!" }]}>
              <Row>
                <Col span={2}>
                  <Text> : </Text>
                </Col>
                <Col span={6}>
                  <Input
                    value={formState.Model.diminta_oleh}
                    onChange={(e) => {
                      setFormState({
                        Model: {
                          ...formState.Model,
                          diminta_oleh: e.target.value,
                        },
                      });
                    }}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item labelAlign="left" labelCol={{ span: 8 }} label="Keperluan Payment" name="keperluan_payment" rules={[{ required: true, message: "Keperluan tidak boleh kosong!" }]}>
              <Row>
                <Col span={2}>
                  <Text> : </Text>
                </Col>
                <Col span={6}>
                  <Select
                    value={formState.Model.keperluan}
                    onSelect={(value) => {
                      setFormState({
                        Model: {
                          ...formState.Model,
                          keperluan: value,
                        },
                      });
                    }}
                  >
                    {ListPaymentValue.map((option) =>
                      option.key === " " ? (
                        <Option key={option.key} value={option.value} disabled={option.isDisable}></Option>
                      ) : (
                        <Option key={option.key} value={option.value} disabled={option.isDisable}>
                          {option.label}
                        </Option>
                      )
                    )}
                  </Select>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              labelAlign="left"
              labelCol={{ span: 8 }}
              label="Tanggal Pembayaran"
              name="tanggal_pembayaran_aktual"
              rules={[
                {
                  required: true,
                  message: "Tanggal Pembayaran tidak boleh kosong!",
                },
              ]}
            >
              <Row>
                <Col span={2}>
                  <Text> : </Text>
                </Col>
                <Col span={6}>
                  <DatePicker showTime={{ format: "HH:mm" }} format="YYYY-MM-DD HH:mm" onChange={onChangeDate} style={{ width: 300 }} />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item labelAlign="left" labelCol={{ span: 8 }} label="Jumlah Payment" name="jumlah_payment" rules={[{ required: true, message: "Jumlah Payment tidak boleh kosong!" }]}>
              <Row>
                <Col span={2}>
                  <Text> : </Text>
                </Col>
                <Col span={6}>
                  <Input
                    id="input-jumlah-payment"
                    style={{ marginLeft: "-0px" }}
                    addonBefore="Rp. "
                    value={formState.Model.jumlah_payment}
                    onChange={(e) => {
                      setFormState({
                        Model: {
                          ...formState.Model,
                          jumlah_payment: e.target.value,
                        },
                      });
                    }}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item labelAlign="left" labelCol={{ span: 8 }} label="Terbilang" name="terbilang" rules={[{ required: true, message: "Terbilang tidak boleh kosong!" }]}>
              <Row>
                <Col span={2}>
                  <Text> : </Text>
                </Col>
                <Col span={6}>
                  <TextArea
                    style={{ width: 500 }}
                    value={formState.Model.terbilang}
                    onChange={(e) => {
                      setFormState({
                        ...formState,
                        Model: { ...formState.Model, terbilang: e.target.value },
                      });
                    }}
                    placeholder="Terbilang"
                    autoSize={{ minRows: 2, maxRows: 3 }}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              labelAlign="left"
              labelCol={{ span: 8 }}
              label="Nama Rek. / Penerima"
              name="nama_rek_penerima"
              rules={[
                {
                  required: true,
                  message: "Nama Rek. Penerima tidak boleh kosong!",
                },
              ]}
            >
              <Row>
                <Col span={2}>
                  <Text> : </Text>
                </Col>
                <Col span={6}>
                  <Input
                    value={formState.Model.nama_rek_penerima}
                    onChange={(e) => {
                      setFormState({
                        ...formState,
                        Model: {
                          ...formState.Model,
                          nama_rek_penerima: e.target.value,
                        },
                      });
                    }}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              labelAlign="left"
              labelCol={{ span: 8 }}
              label="No Rekening Penerima"
              name="no_rek_penerima"
              rules={[
                {
                  required: true,
                  message: "No Rekening Penerima tidak boleh kosong!",
                },
              ]}
            >
              <Row>
                <Col span={2}>
                  <Text> : </Text>
                </Col>
                <Col span={6}>
                  <Input
                    value={formState.Model.no_rek_penerima}
                    onChange={(e) => {
                      setFormState({
                        ...formState,
                        Model: {
                          ...formState.Model,
                          no_rek_penerima: e.target.value,
                        },
                      });
                    }}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Row>
              <Col span={4} offset={16}>
                <Form.Item>
                  <Button style={{ marginLeft: "50px" }} type="primary" htmlType="submit" onClick={handleSubmitForm}>
                    Submit Payment Request
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </QueryClientProvider>
  );
};

export default FormPayment;
