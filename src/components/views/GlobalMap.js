import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Progress, Badge, Row, Col, Spin } from 'antd';

import styled from 'styled-components';

const WebContainer = styled.div`

`

@inject('appState', 'appStore')
@observer
class GlobalMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({ loading: false })
        }.bind(this), 5000);
    }

    render() {
        const { loading } = this.state;

        return (
            <WebContainer>
                {loading && <div style={{textAlign:'center'}}><Spin size="large"></Spin></div>}
                {!loading && <Row>
                    <Col span={12}>
                        <iframe src="https://public.domo.com/cards/bWxVg" width="100%" height="600" marginheight="0" marginwidth="10" frameborder="0"></iframe>
                    </Col>
                    <Col span={12}>
                        <iframe src="https://public.domo.com/cards/dJ45D" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
                    </Col>
                </Row>}
            </WebContainer>
        )
    }
}

export default GlobalMap;
