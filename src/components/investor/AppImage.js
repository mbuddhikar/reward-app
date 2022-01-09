import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
    Form, Select, Radio, Button, Input, Result, Row, Col, Modal, notification, DatePicker,
    Card, Breadcrumb, Typography, InputNumber
} from 'antd';

class AppImage extends Component {

    constructor(props) {
        super(props);

        this.state = { visible: false }
    }

    showModal = () => { this.setState({ visible: true }); }

    handleCancel = () => { this.setState({ visible: false, }); }

    render() {
        return (
            <div style={{ display: 'inline', marginRight: '5px' }}>
                <Button type="link" onClick={this.showModal} style={{color:"white"}}>View Details</Button>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleCancel}
                    footer={false}
                    width={1000}
                >
                    <img src={this.props.image} alt="img" width="100%" height="600"></img>
                </Modal>
            </div >
        );
    }
}

export default AppImage;