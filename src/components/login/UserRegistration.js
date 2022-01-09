import React, { Component, useEffect } from 'react';
import {
    Form, Select, Radio, Button, Input, InputNumber, Checkbox, Row, Col, Modal, notification, DatePicker,
    Breadcrumb, Typography, Card, Steps, Popover, Icon, Table, Result
} from 'antd';
import { inject, observer } from 'mobx-react';
import moment from 'moment';

const { TextArea } = Input;
const { Title } = Typography;
const { Step } = Steps;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const confirm = Modal.confirm;

const openNotificationWithIcon = (type, title, msg) => {
    notification[type]({
        placement: 'topRight',
        message: title,
        description: msg,
    });
};

@inject('appStore')
@observer
class DataForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            confirmLoading: false,
            sucess: false,
            helathinfor: false,
            basicData: [],
            healthData: []
        }
    }

    doAgree = (agree) => {
        this.setState({ agree: !agree });
    }

    changeUserCategory = (value) => {
        if (value) {
            this.setState({ userCategory: value });
        } else {
            this.setState({ userCategory: '' });
        }
    }

    createUserAccount = () => {
        this.setState({ confirmLoading: true });

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ basicData: values, confirmLoading: false, sucess: true });
            }
        });
    }

    naviagteToLogin = () => {
        this.props.history.push('/login');
    }

    naviagteHealthinfo = () => {
        this.setState({ helathinfor: true });
    }

    submit = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { basicData } = this.state;
                let roleId = 1;

                if (values.is_diabeties) {
                    roleId = 2;
                } else if (values.blood_pressure > 100) {
                    roleId = 3;
                } else {
                    roleId = 1;
                }

                let body = {
                    "full_name": basicData.fname,
                    "nic": null,
                    "user_category": "slas_officer",
                    "institutes_id": 1,
                    "designation": 1,
                    "user_name": basicData.user_name,
                    "password": basicData.password,
                    "email": basicData.email,
                    "mobile": basicData.mobile,
                    "user_roles_id": roleId,
                    "status": 1
                }

                this.props.appStore.createUserAccount(body)
                    .then(sucess => {
                        this.props.form.resetFields();
                        this.setState({ confirmLoading: false, sucess: true });
                        openNotificationWithIcon('success', 'Success', 'Data added successfully!');
                        this.props.history.push('/login');
                    })
                    .catch(err => {
                        this.setState({ confirmLoading: false });
                        openNotificationWithIcon('error', 'Oops', 'Something went wrong!');
                    });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { confirmLoading, sucess, helathinfor } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div>
                <Card bordered={false} style={{ textAlign: 'center' }}>
                    <Title level={4}>Create Profile</Title>
                </Card>

                {!sucess && <Card bordered={false}>
                    <Form>
                        <FormItem
                            label="First Name"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('fname', {
                                rules: [{ required: true, message: 'Please input relevant data' }],
                            })(
                                <Input style={{ width: 450 }} placeholder="First Name" />
                            )}
                        </FormItem>

                        <FormItem
                            label="Last Name"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('lname', {
                                rules: [{ required: true, message: 'Please input relevant data' }],
                            })(
                                <Input style={{ width: 450 }} placeholder="Last Name" />
                            )}
                        </FormItem>

                        <FormItem
                            label="Birth Date"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('dob', {
                                rules: [{ required: true, message: 'Please input relevant data' }],
                            })(
                                <DatePicker style={{ width: 350 }} />
                            )}
                        </FormItem>

                        <FormItem
                            label="User Name"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('user_name', {
                                rules: [{ required: true, message: 'Please input relevant data' }],
                            })(
                                <Input style={{ width: 450 }} placeholder="User Name" />
                            )}
                        </FormItem>

                        <FormItem
                            label="Email"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input relevant data' }],
                            })(
                                <Input style={{ width: 450 }} placeholder="Email" />
                            )}
                        </FormItem>

                        <FormItem
                            label="Mobile"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('mobile', {
                                rules: [{ required: true, message: 'Please input relevant data' }],
                            })(
                                <InputNumber style={{ width: 450 }} placeholder="Mobile" />
                            )}
                        </FormItem>

                        <FormItem
                            label="Password"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input relevant data' }],
                            })(
                                <Input.Password style={{ width: 450 }} type="password" placeholder="Password" />
                            )}
                        </FormItem>

                        <FormItem
                            label="Confirm Password"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 12 }}
                        >
                            {getFieldDecorator('confirm_password', {
                                rules: [{ required: true, message: 'Please input relevant data' }],
                            })(
                                <Input.Password style={{ width: 450 }} type="password" placeholder="Confirm Password" />
                            )}
                        </FormItem>

                        <FormItem {...tailFormItemLayout} style={{ marginTop: 25 }}>
                            <div className="steps-action">
                                <Button type="primary" loading={confirmLoading} onClick={() => this.createUserAccount()}>
                                    Submit
                                </Button>
                            </div>
                        </FormItem>

                    </Form>
                </Card>}


                {(sucess && !helathinfor) && <div>
                    <Result
                        status="success"
                        title="You have successfully created the account!"
                        subTitle="Enter your health information to get customized data regarding your meals and daily plans"
                        extra={[
                            <Button type="primary" key="console" onClick={this.naviagteHealthinfo}>
                                Continue
                            </Button>,
                            // <Button key="buy" onClick={this.naviagteToLogin}>Skip</Button>,
                        ]}
                    />
                </div>}

                {(helathinfor) && <div>
                    <Card bordered={false}>
                        <Form>
                            <FormItem
                                label="Height"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 12 }}
                            >
                                {getFieldDecorator('height', {
                                    rules: [{ required: true, message: 'Please input relevant data' }],
                                })(
                                    <InputNumber style={{ width: 450 }} />
                                )}
                            </FormItem>

                            <FormItem
                                label="Weight"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 12 }}
                            >
                                {getFieldDecorator('weight', {
                                    rules: [{ required: true, message: 'Please input relevant data' }],
                                })(
                                    <InputNumber style={{ width: 450 }} />
                                )}
                            </FormItem>

                            <FormItem
                                label="Gender"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 12 }}
                            >
                                {getFieldDecorator('gender', {
                                    rules: [{ required: true, message: 'Please input relevant data' }],
                                })(
                                    <Select
                                        style={{ width: 450 }}
                                        placeholder="Select"
                                        optionFilterProp="children"
                                        onChange={this.changeUserCategory}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                    </Select>
                                )}
                            </FormItem>

                            <FormItem
                                label="Do you have diabeties"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 12 }}
                            >
                                {getFieldDecorator('is_diabeties', {
                                    rules: [{ required: true, message: 'Please input relevant data' }],
                                })(
                                    <Select
                                        style={{ width: 450 }}
                                        placeholder="Select"
                                        optionFilterProp="children"
                                        onChange={this.changeUserCategory}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value={true}>Yes</Option>
                                        <Option value={false}>No</Option>
                                    </Select>
                                )}
                            </FormItem>

                            <FormItem
                                label="Blood Sugar"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 12 }}
                            >
                                {getFieldDecorator('blood_sugar', {
                                    rules: [{ required: true, message: 'Please input relevant data' }],
                                })(
                                    <InputNumber style={{ width: 450 }} />
                                )}
                            </FormItem>

                            <FormItem
                                label="Blood Pressure"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 12 }}
                            >
                                {getFieldDecorator('blood_pressure', {
                                    rules: [{ required: true, message: 'Please input relevant data' }],
                                })(
                                    <InputNumber style={{ width: 450 }} />
                                )}
                            </FormItem>

                            <FormItem {...tailFormItemLayout} style={{ marginTop: 25 }}>
                                <div className="steps-action">
                                    <Button type="primary" loading={confirmLoading} onClick={() => this.submit()}>
                                        Submit
                                    </Button>
                                </div>
                            </FormItem>

                        </Form>
                    </Card>
                </div>}
            </div>
        )
    }

}
const UserRegistration = Form.create()(DataForm);

export default UserRegistration;