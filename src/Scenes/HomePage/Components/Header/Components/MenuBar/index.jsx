import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';

import { userActions } from '../../../../../../Redux/Actions';
import RLForm from '../../../../../../Components/RegisterLoginForm';
import { UserMenu } from '../../../../../../Components/UserMenu';
import { Link } from 'react-router-dom';
import { getTranslation, SupportedLanguage } from 'Services/Geo';
import LanguageSelector from '../../../../../../Components/LanguageSelector';

class MenuBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isHandlerActive: false,
      isLogin: localStorage.getItem('user'),
    };
  }

  toggleHandler = () => {
    this.setState({
      isHandlerActive: !this.state.isHandlerActive,
    });
  };

  updateFormStatus = (status) => {
    this.setState({
      rlFormStatus: status,
    });
  };
  loginField = () => {
    if (this.state.isLogin) {
      return (
        <li className='userMenuLi'>
          <div className='userMenuWrapper'>
            <UserMenu />
          </div>
        </li>
      );
    }
    return [
      <li key='0'>
        <a href='#' onClick={() => this.updateFormStatus('register')}>
          {getTranslation(this.props.lang, 'Sign Up')}
        </a>
      </li>,
      <li key='1'>
        <a href='#' onClick={() => this.updateFormStatus('login')}>
          {getTranslation(this.props.lang, 'Sign In')}
        </a>
      </li>,
    ];
  };
  render() {
    // if (!this.props.isPersist) {
    //   return null;
    // }
    return (
      <div className='menuBar'>
        <div className='langSelectorWrapper'>
          <LanguageSelector />
        </div>
        <a href='/'>
          <div className='homeLogo osLight'>
            <img
              className='logoimg'
              src='https://i.ibb.co/F5SgL3G/logo-crystal-10.png'
              alt=''
            />
          </div>
        </a>
        <a
          href='#'
          className={'homeNavHandler visible-xs' + (this.state.isHandlerActive ? ' active' : '')}
          onClick={this.toggleHandler}
        >
          <Icon name='bars' />
        </a>
        <div className={'homeNav' + (this.state.isHandlerActive ? ' active' : '')}>
          <ul>
            <li className='moreOption'>
              <Link to='/search?type=sale'>{getTranslation(this.props.lang, 'Buy')}</Link>
            </li>
            <li className='moreOption'>
              <Link to='/search?type=rent'>{getTranslation(this.props.lang, 'Rent')}</Link>
            </li>
            <li className='moreOption'>
              <Link to='/agent/search'>{getTranslation(this.props.lang, 'Renovation')}</Link>
            </li>
            <li className='moreOption'>
              <Link to='/agent/search'>{getTranslation(this.props.lang, 'Commercial')}</Link>
            </li>
            <li className='moreOption'>
              <Link to='/projects'>{getTranslation(this.props.lang, 'Project')}</Link>
            </li>
            <li className='moreOption'>
              <Link to='/agent/search'>{getTranslation(this.props.lang, 'Find agent')}</Link>
            </li>
            {this.loginField()}
            <li>
              <Link to='/newproperty/sell'>
                <div className='btn btn-green'>
                  {getTranslation(this.props.lang, 'List a Property')}
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <RLForm
          type={this.state.rlFormStatus}
          openRegisterForm={() => this.updateFormStatus('register')}
          openLoginForm={() => this.updateFormStatus('login')}
          close={() => this.updateFormStatus()}
        />
      </div>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  logout: userActions.logout,
};
const connectedMenuBar = connect(mapState, actionCreators)(MenuBar);
export { connectedMenuBar as MenuBar };
