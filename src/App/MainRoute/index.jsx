import * as React from 'react';
import './Bootstrap/bootstrap.min.css';
import './style.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../Redux/Helpers';
import { alertActions } from '../../Redux/Actions';
import { PrivateRoute } from '../../Redux/Components';
import HomePage from '../../Scenes/HomePage';
import WalletPage from '../../Scenes/WalletPage';
import PageInfo from '../../Scenes/MyInfoPage';
import SearchPage from '../../Scenes/SearchPage';
import MyhousePage from '../../Scenes/MyhousePage';
import NewPropertyPage from '../../Scenes/NewPropertyPage';
import AgentPage from '../../Scenes/AgentPage';
import AdvicePage from '../../Scenes/AdvicePage';
import NewsPage from '../../Scenes/NewsPage';

class App extends React.Component {
  constructor(props) {
    super();

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }
  render() {
    return (
      <Router history={history}>
        <div className='globalContainer'>
          <Switch>
            <PrivateRoute exact path='/wallet/:action?' component={WalletPage} />
            <PrivateRoute exact path='/search/:action?' component={SearchPage} />
            <PrivateRoute exact path='/property/:id?' component={MyhousePage} />
            <PrivateRoute exact path='/newproperty/:action' component={NewPropertyPage} />
            <PrivateRoute exact path='/myprofile' component={PageInfo} />
            <PrivateRoute exact path='/advice/:type' component={AdvicePage} />
            <PrivateRoute exact path='/agent/:action' component={AgentPage} />
            <PrivateRoute exact path='/projects' component={NewsPage} />
            <Route exact path='/:auth?' component={HomePage} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
