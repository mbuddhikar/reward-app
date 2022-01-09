import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Calendar, Badge } from 'antd';

import styled from 'styled-components';
import AddActivity from './AddActivity';
import AddMeal from './AddMeals';
import AddSymptoms from './AddSymptoms';

const WebContainer = styled.div`
    .events {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .events .ant-badge-status {
        width: 100%;
        overflow: hidden;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .notes-month {
        font-size: 28px;
        text-align: center;
    }
    .notes-month section {
        font-size: 28px;
    }
`

@inject('appState', 'appStore')
@observer
class MyDiary extends React.Component {

    constructor(props) {
        super(props);
    }

    dateCellRender = (value) => {
        const { myDiary } = this.props.appStore;
        let listData = myDiary[value.date().toString()];
        return (
            <ul className="events">
                {listData && listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }

    reRender = () => {
        this.forceUpdate();
    };

    render() {

        return (
            <WebContainer>
                <AddActivity reRender={this.reRender} />
                <AddMeal reRender={this.reRender}/>
                <AddSymptoms reRender={this.reRender}/>

                <Calendar dateCellRender={this.dateCellRender} onPanelChange={this.onPanelChange} />
            </WebContainer>
        )
    }
}

export default MyDiary;
