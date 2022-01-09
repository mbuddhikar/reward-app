import React from 'react';
import { inject, observer } from 'mobx-react';
import { Alert, Progress, Badge, Row, Col } from 'antd';

import styled from 'styled-components';

const WebContainer = styled.div`

`

@inject('appState', 'appStore')
@observer
class CovidAlerts extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <WebContainer>
                <Alert
                    message="Your safe"
                    description="Analizing your activities, no covid alert found currently"
                    type="success"
                />
            </WebContainer>
        )
    }
}

export default CovidAlerts;
