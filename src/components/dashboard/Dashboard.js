import React from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Radio } from 'antd';
import MyDiary from '../views/MyDiary';
import CovidMap from '../views/CovidMap';
import Home from '../views/Home';
import UserProfile from '../views/UserProfile';
import CovidAlerts from '../views/CovidAlerts';
import PersonalMeals from '../views/PersonalMeals';
import GlobalMap from '../views/GlobalMap';
import Summary from '../investor/Summary';
import DetailedPughMatrix from '../investor/DetailedPughMatrix';
import PughMatrix from '../investor/PughMatrix';


@inject('appState', 'appStore')
@observer
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };
    }

    handleChangeTab = (e) => {
        console.log('tab');
        this.setState({ selectedTab: e.target.value });
    };

    render() {
        const role = this.props.appState.getUserRole();
        const { selectedTab } = this.state;

        return (
            <div>
                {role !== '4' && <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '24px' }}>
                    <Radio.Group size={"large"} value={selectedTab} onChange={this.handleChangeTab}>
                        <Radio.Button value="home">Home</Radio.Button>
                        <Radio.Button value="my-diary">My Diary</Radio.Button>
                        <Radio.Button value="personal-meal">Personal Meal</Radio.Button>
                        {/* <Radio.Button value="activities">Activities</Radio.Button> */}
                        <Radio.Button value="covid-alerts">Covid Alerts</Radio.Button>
                        <Radio.Button value="covid-map">Covid Map</Radio.Button>
                        <Radio.Button value="global-map">Global Covid Map</Radio.Button>
                        <Radio.Button value="my-profile">My Profile</Radio.Button>
                    </Radio.Group>
                </div>}

                {role !== '4' && <div style={{ margin: '0 40px 10px 40px' }}>
                    <Card>
                        {selectedTab === 'home' && <Home />}
                        {selectedTab === 'my-diary' && <MyDiary />}
                        {selectedTab === 'covid-map' && <CovidMap />}
                        {selectedTab === 'my-profile' && <UserProfile />}
                        {selectedTab === 'covid-alerts' && <CovidAlerts />}
                        {selectedTab === 'personal-meal' && <PersonalMeals />}
                        {selectedTab === 'global-map' && <GlobalMap />}
                    </Card>
                </div>}

                {role === '4' && <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '24px' }}>
                    <Radio.Group size={"large"} value={selectedTab} onChange={this.handleChangeTab}>
                        <Radio.Button value="home">Summary of Apps Analysis</Radio.Button>
                        <Radio.Button value="pugh-matrix">Pugh Matrix Analysis</Radio.Button>
                        <Radio.Button value="detailed-pugh">Detailed Pugh Matrix Analysis</Radio.Button>
                    </Radio.Group>
                </div>}

                {role === '4' && <div style={{ margin: '0 40px 10px 40px' }}>
                    <Card>
                        {selectedTab === 'home' && <Summary />}
                        {selectedTab === 'pugh-matrix' && <PughMatrix/>}
                        {selectedTab === 'detailed-pugh' && <DetailedPughMatrix />}
                    </Card>
                </div>}
            </div>
        )
    }
}

export default Dashboard;
