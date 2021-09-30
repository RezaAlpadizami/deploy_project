import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Form, Input, Result, Row, Typography } from "antd";
import { Layout } from "antd";

import img from "../../assets/image_logo2.png";
import useLogin from "../../Mutations/useLogin";
import "antd/dist/antd.css";
import { useAuthorizedContext } from "../../AuthorizedContext";
import "../../components/LoginPage.css";

const Text = Typography;

const LoginForm = () => {
  const history = useHistory();
  const { setAuthorizedValue } = useAuthorizedContext();

  const handleSignInButton = React.useCallback(() => {
    setAuthorizedValue(true);
    history.push("/unitkerja-beranda");
  }, [setAuthorizedValue, history]);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { mutate: login } = useLogin(
    { username, password },
    (result) => console.log("result >>", result),
    (error) => console.log("error >>", error)
  );

  const onFinish = React.useCallback((values) => {
    console.log("Success:", values);
  }, []);

  const onFinishFailed = React.useCallback((errorInfo) => {
    console.log("Failed:", errorInfo);
  }, []);

  const handleUsernameChange = React.useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = React.useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Row justify="center">
      <Form
        name="basic"
        labelAlign="left"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginTop: "40px", paddingRight: "40px", paddingLeft: "40px" }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Row>
            <Col span={2}>
              <Text> : </Text>
            </Col>
            <Col span={22}>
              <Input value={username} onChange={handleUsernameChange} />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          style={{ marginTop: "15px" }}
        >
          <Row>
            <Col span={2}>
              <Text> : </Text>
            </Col>
            <Col span={22}>
              <Input.Password id="input_password" value={password} onChange={handlePasswordChange} />
            </Col>
          </Row>
        </Form.Item>

        <Col span={12} offset={5}>
          <Row justify="center">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                // onClick={handleSignInButton}
                onClick={login}
                style={{
                  backgroundColor: "#09539C ",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "350px",
                  borderRadius: "10px",
                  marginTop: "50px",
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Row>
        </Col>
      </Form>
    </Row>
  );
};

const UKLoginPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="App-header">
        <div className="container">
          <img src={img} className="BRI-logo" alt="logo" />
          <LoginForm />
        </div>
      </Layout>
    </Layout>
  );
};

export default UKLoginPage;
