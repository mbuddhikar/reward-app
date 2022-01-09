import '../styles/index.scss';
import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import SiderCustom from './SiderCustom.js';
import HeaderCustom from './HeaderCustom.js';

//route pages
import Dashboard from './dashboard/Dashboard';

const { Content, Footer } = Layout;

@inject('appState')
@observer
class Page extends Component {

    state = {
        collapsed: false,
    };

    constructor(props) {
        super(props);
        this.props.appState.role = window.localStorage.getItem('role');
        this.props.appState.isLogged = window.localStorage.getItem('isLogged');
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        let { role, isLogged } = this.props.appState;

        return (
            <Layout className="ant-layout-has-sider">
                <Layout>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
                    <Content style={{ padding: '0', overflow: 'scroll' }}>
                        <Switch>
                            {/* Dashboard */}
                            {(role == '1' || role == '2' || role == '3' || role == '4') && <Route path="/dashboard" component={Dashboard} />}

                            {!isLogged && <Redirect from="/" to="/login" />}
                            {isLogged && <Redirect from="/" to="/dashboard" />}
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Reward Life ©2022
					</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Page;
