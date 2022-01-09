import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Progress, Badge, Row, Col } from 'antd';

import styled from 'styled-components';
import LineChart from './LineChart';
import PieChart from './PieChart';

const WebContainer = styled.div`

`

@inject('appState', 'appStore')
@observer
class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <WebContainer>
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Progress type="circle" width={300} percent={75} format={percent => <spann><span style={{ fontSize: '110px' }}>{percent}</span> <br /><span style={{ fontSize: '48px' }}>Rewards Points</span></spann>} />
                </div>

                <div style={{ marginTop: '60px' }}>
                    <Row style={{ margin: '20px' }}>
                        <Col span={12}>
                            <div style={{ borderStyle: 'solid' }}>
                                <LineChart />
                            </div>
                        </Col>
                        <Col span={12}>
                            <div style={{ borderStyle: 'solid' }}>
                                <PieChart />
                            </div>
                        </Col>
                    </Row>
                </div>
            </WebContainer>
        )
    }
}

export default Home;
