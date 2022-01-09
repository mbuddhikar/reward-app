import { Col, Row, Tag } from 'antd';
import React, { Component } from 'react';
import AppImage from './AppImage';

import A1 from './A1.PNG';
import A2 from './A2.PNG';
import A3 from './A3.PNG';
import A4 from './A4.PNG';
import A5 from './A5.PNG';
import A6 from './A6.PNG';
import A7 from './A7.PNG';
import A8 from './A8.PNG';
import A9 from './A9.PNG';
import A10 from './A10.PNG';
import A11 from './A11.PNG';
import A12 from './A12.PNG';
import A13 from './A13.PNG';
import A14 from './A14.PNG';
import A15 from './A15.PNG';
import A16 from './A16.PNG';
import A17 from './A17.PNG';
import A18 from './A18.PNG';
import A19 from './A19.PNG';
import A20 from './A20.PNG';

const Box = (props) => {
    return <div style={{ backgroundColor: props.color, height: 150, width: 200 }}>
        <div style={{ fontWeight: 800, fontSize: 18, textAlign: 'center', paddingTop: 14 }}>{props.label}</div>
        <div style={{ fontWeight: 800, fontSize: 18, textAlign: 'center', paddingTop: 34 }}>{props.percentage}</div>
        <div style={{ textAlign: 'center', marginTop: 10 }}>{props.view}</div>
    </div>
}

class Summary extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}><Box color={'#F10206'} label={'A1'} percentage={'73%'} view={<AppImage image={A1} />}></Box></Col>
                    <Col span={4}><Box color={'green'} label={'A2'} percentage={'52%'} view={<AppImage image={A2} />}></Box></Col>
                    <Col span={4}><Box color={'#FED983'} label={'A3'} percentage={'59%'} view={<AppImage image={A3} />}></Box></Col>
                    <Col span={4}><Box color={'#800000'} label={'A4'} percentage={'66%'} view={<AppImage image={A4} />}></Box></Col>
                    <Col span={4}><Box color={'orange'} label={'A5'} percentage={'61%'} view={<AppImage image={A5} />}></Box></Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{ marginTop: 14 }}>
                    <Col span={4}><Box color={'#800000'} label={'A6'} percentage={'68%'} view={<AppImage image={A6} />}></Box></Col>
                    <Col span={4}><Box color={'#800000'} label={'A7'} percentage={'68%'} view={<AppImage image={A7} />}></Box></Col>
                    <Col span={4}><Box color={'#FED983'} label={'A8'} percentage={'58%'} view={<AppImage image={A8} />}></Box></Col>
                    <Col span={4}><Box color={'red'} label={'A9'} percentage={'71%'} view={<AppImage image={A9} />}></Box></Col>
                    <Col span={4}><Box color={'green'} label={'A10'} percentage={'53%'} view={<AppImage image={A10} />}></Box></Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{ marginTop: 14 }}>
                    <Col span={4}><Box color={'green'} label={'A11'} percentage={'53%'} view={<AppImage image={A11} />}></Box></Col>
                    <Col span={4}><Box color={'red'} label={'A12'} percentage={'73%'} view={<AppImage image={A12} />}></Box></Col>
                    <Col span={4}><Box color={'#FED983'} label={'A13'} percentage={'56%'} view={<AppImage image={A13} />}></Box></Col>
                    <Col span={4}><Box color={'#FED983'} label={'A14'} percentage={'58%'} view={<AppImage image={A14} />}></Box></Col>
                    <Col span={4}><Box color={'#FED983'} label={'A15'} percentage={'58%'} view={<AppImage image={A15} />}></Box></Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{ marginTop: 14 }}>
                    <Col span={4}><Box color={'red'} label={'A16'} percentage={'73%'} view={<AppImage image={A16} />}></Box></Col>
                    <Col span={4}><Box color={'green'} label={'A17'} percentage={'52%'} view={<AppImage image={A17} />}></Box></Col>
                    <Col span={4}><Box color={'orange'} label={'A18'} percentage={'63%'} view={<AppImage image={A18} />}></Box></Col>
                    <Col span={4}><Box color={'#800000'} label={'A19'} percentage={'68%'} view={<AppImage image={A19} />}></Box></Col>
                    <Col span={4}><Box color={'#800000'} label={'A20'} percentage={'68%'} view={<AppImage image={A20} />}></Box></Col>
                    <Col span={4}>
                        <div><Tag color="#F10206" style={{ height: 16 }}></Tag>70%-75% Highest Competitive</div>
                        <div><Tag color="#800000" style={{ height: 16 }}></Tag>65%-70% Highly Competitive</div>
                        <div><Tag color="#F6A503" style={{ height: 16 }}></Tag>60%-65% Medium Competitive</div>
                        <div><Tag color="#FED983" style={{ height: 16 }}></Tag>55%-60% Competitive</div>
                        <div><Tag color="#2C8000" style={{ height: 16 }}></Tag>50%-55% Low Risk</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Summary;