import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Progress, Badge, Row, Col, List, Typography } from 'antd';

import styled from 'styled-components';

const WebContainer = styled.div`

`
const data1DB = [
    'Apples',
    'Avocados',
    'Bananas',
];

const data2DB = [
    'Lean beef',
    'Chicken breasts',
    'Lamb',
    'Almonds',
];

const data3DB = [
    'Asparagus',
    'Bell peppers',
    'Broccoli',
    'Carrots',
    'Cauliflower',
    'Garlic',
    'Kale'
];

const data1O = [
    'Blueberries',
    'Oranges',
    'Strawberries'
];

const data2O = [
    'Almonds',
    'Chia seeds',
    'Coconuts',
    'Macadamia nuts',
    'Walnuts'
];

const data3O = [
    'Onions',
    'Tomatoes',
    'Salmon',
    'Sardines',
    'Shellfish',
    'Shrimp',
    'Trout',
    'Tuna'
];
@inject('appState', 'appStore')
@observer
class PersonalMeals extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const role = this.props.appState.getUserRole();

        return (
            <WebContainer>
                {role == '2' && <div>
                    <div style={{ textAlign: 'center', margin: '0px 10px 20px 0px' }}>Meals for Diabetes</div>
                    <List
                        header={<Typography.Text strong>Breakfast</Typography.Text>}
                        bordered
                        dataSource={data1DB}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />
                    <br />
                    <List
                        header={<Typography.Text strong>Lunch</Typography.Text>}
                        bordered
                        dataSource={data2DB}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />
                    <br />
                    <List
                        header={<Typography.Text strong>Dinenr</Typography.Text>}
                        bordered
                        dataSource={data3DB}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    /></div>}

                {role != '2' && <div>
                    <div style={{ textAlign: 'center', margin: '0px 10px 20px 0px' }}>Meals for High Blood Pressure</div>
                    <List
                        header={<Typography.Text strong>Breakfast</Typography.Text>}
                        bordered
                        dataSource={data1O}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />
                    <br />
                    <List
                        header={<Typography.Text strong>Lunch</Typography.Text>}
                        bordered
                        dataSource={data2O}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />
                    <br />
                    <List
                        header={<Typography.Text strong>Dinenr</Typography.Text>}
                        bordered
                        dataSource={data3O}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    /></div>}
            </WebContainer>
        )
    }
}

export default PersonalMeals;
