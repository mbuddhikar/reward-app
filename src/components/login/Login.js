import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Form, Icon, Input, Button, Alert, notification, Typography } from 'antd';

const FormItem = Form.Item;
const { Title } = Typography;

const openNotificationWithIcon = (type, title, msg) => {
    notification[type]({
        placement: 'topRight',
        message: title,
        description: msg,
    });
};

@inject('authStore', 'appState')
@withRouter
@observer
class NormalLoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true });
                var data = {
                    "user_name": values.username,
                    "password": values.password
                }
                this.props.authStore.login(data)
                    .then(sucess => {
                        this.props.history.push('/dashboard');
                    })
                    .catch(err => {
                        this.setState({ loading: false });
                        openNotificationWithIcon('error', 'Error');
                    });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login-parent">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        <Title level={4}>Reward Lives</Title>
                    </FormItem>
                    <FormItem style={{ marginTop: 5 }}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please enter your username' }],
                        })(
                            <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem style={{ marginTop: 5 }}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please enter your password' }],
                        })(
                            <Input.Password size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem style={{ marginTop: 10 }}>
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>Log in </Button>
                    </FormItem>
                    <FormItem style={{ marginTop: 10, textAlign: 'center' }}>
                        <Link size="large" to={'/user-registration'}>Create Account</Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const Login = Form.create()(NormalLoginForm);

export default Login;