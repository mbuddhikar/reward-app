import React, { Component } from 'react';
import { Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { rehydrate, hotRehydrate } from 'rfx-core';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Page from './components/Page';
import Login from './components/login/Login';
import ResetPassword from './components/login/ResetPassword';

import appState from './stores/appState';
import authStore from './stores/authStore';
import appStore from './stores/appStore';
import HomePage from './components/home/HomePage';
import UserRegistration from './components/login/UserRegistration';

const store = rehydrate();

const browserHistory = createBrowserHistory();
const routeStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routeStore);

const stores = {
	appState,
	authStore,
	appStore
};

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = { logginStatus: true };
		this.events = [
			"load",
			"mousemove",
			"mousedown",
			"click",
			"scroll",
			"keypress"
		];

		for (var i in this.events) {
			window.addEventListener(this.events[i], this.resetTimeout);
		}

	}

	resetTimeout() {
		if (!authStore.checkLogin()) {
			authStore.logout();
		}
	}

	render() {

		return (
			<AppContainer>
				<Provider {...stores} routing={routeStore} >
					<Router history={history}>
						<Switch>
							{!appState.isLogged && <Route path="/login" name="page" component={Login} />}
							<Route exact path="/user-registration" name="Reset Password Page" component={UserRegistration} />
							<Route exact path="/resetpassword" name="Reset Password Page" component={ResetPassword} />
							<Route path="/" name="page" component={Page} />
						</Switch>
					</Router>
				</Provider>
			</AppContainer>
		);
	}
}
