import {Button, Form, Input} from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import {LoginData} from "../types/types.ts";

export default function LoginPage() {

    const onFinish = (data: LoginData) => {
        console.log(data);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section style={{
            width: '100%',
            height: '100vh',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center"
        }}>
            <Form
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                style={{width: '300px'}}
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
                layout="vertical"
                requiredMark="optional"
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined />}
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                        {
                            pattern: /^\S+$/,
                            message: 'The password mustn\'t\ contain spaces!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item style={{ marginBottom: "0px" }}>
                    <Button block type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </section>
    )
}
