import React, { Component } from 'react';
import {
    Form, Button, Row, Col, Card, Icon
} from 'antd';
import { inject, observer } from 'mobx-react';
import avater from '../../styles/imgs/paratrooper.jpg';
import styled from 'styled-components'

const ListContainer = styled.div`
    border: 2px solid #D9D9D9;
    display: flex;
    justify-content: space-between;
    margin-top:5px;
`
const Item = styled.div`
    margin: 15px;
    color:${props => props.fontColor}
`
const Action = styled.div`
    margin: 15px;
    cursor: pointer;
`

@inject('appState', 'authStore')
@observer
class UserProfile extends React.Component {

    constructor(props) {
        super(props);
    }

    doLogout = () => {
        this.props.authStore.logout().then(() => this.props.history.push('/'));
    }

    render() {
        let userData = this.props.appState.getUserData();

        if (!userData) {
            return (<div>loading..</div>)
        } else {
            return (
                <Row style={{ margin: 20 }}>
                    <Col span={6}></Col>
                    <Col span={12}>
                        {/* <Card style={{ width: '100%' }}> */}
                            <div className="antd-pro-pages-account-center-center-avatarHolder">
                                <img alt="" src={avater} />
                                <div className="antd-pro-pages-account-center-center-name">{userData.full_name}</div>
                                <div>{userData.email}</div>
                            </div>

                            <ListContainer>
                                <Item>Change Password</Item>
                                <Action><Icon type="right" /></Action>
                            </ListContainer>

                            <ListContainer>
                                <Item>Connect Social Media</Item>
                                <Action><Icon type="right" /></Action>
                            </ListContainer>

                            <ListContainer>
                                <Item>Connect Devices</Item>
                                <Action><Icon type="right" /></Action>
                            </ListContainer>

                            <ListContainer>
                                <Item fontColor={'#ff0000'}>Logout</Item>
                                <Action onClick={this.doLogout}><Icon type="right" /></Action>
                            </ListContainer>
                        {/* </Card> */}
                    </Col>
                    <Col span={6}></Col>
                </Row>
            )
        }
    }
}

export default UserProfile;