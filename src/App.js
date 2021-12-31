import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

function LoginForm() {
  
  const onFinish = (values) => {
    console.log('Success:', values);
    alert('Login Successfully')
  };

  return (

    //Form login normal
    <Form
      name="normal_login"
      onFinish={onFinish}
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!'
          },
          { type: 'email' },
        ]}
        hasFeedback
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
          { min: 8 },
        ]}>
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="forgot.html">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
