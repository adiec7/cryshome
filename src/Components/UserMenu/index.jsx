import * as React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';
import { userActions } from '../../Redux/Actions';

class UserMenu extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showMenu: false,
    };
  }
  showToggle = () => {
    if (this.state.showMenu) {
      document.removeEventListener('click', this.handleClickOutside);
    } else {
      document.addEventListener('click', this.handleClickOutside);
    }
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };
  handleClickOutside = (e) => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target) && this.state.showMenu) {
      this.showToggle();
    }
  };
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
  logout = () => {
    this.props.logout();
  };
  render() {
    return (
      <div
        className={`userMenuContainer${this.state.showMenu ? ' open' : ''}`}
        onClick={this.showToggle}
        ref={(div) => {
          this.wrapperRef = div;
        }}
      >
        <a href='#' className='userHandler dropdown-toggle' data-toggle='dropdown'>
          <Icon name='user-o' />
          <span className='counter'>5</span>
        </a>
        <a href='#' className='headerUser dropdown-toggle' data-toggle='dropdown'>
          <img
            className='avatar headerAvatar pull-left'
            src='https://res.cloudinary.com/techgoddess/image/upload/v1599993352/man_cjdygh.jpg'
          />
          <div className='userTop pull-left'>
            <span className='headerUserName'>{this.props.email}</span>
            <Icon name='angle-down' />
          </div>
          <div className='clearfix' />
        </a>
        <div className='dropdown-menu pull-right userMenu' role='menu'>
          <div className='mobAvatar'>
            <img
              className='avatar mobAvatarImg'
              src='https://res.cloudinary.com/techgoddess/image/upload/v1599993352/man_cjdygh.jpg'
              alt='avatar'
            />
            <div className='mobAvatarName'>{this.props.email}</div>
          </div>
          <ul>
            <li>
              <Link to='/wallet'>
                <span className='walletIcon fa' />
                Wallet
              </Link>
            </li>
            <li>
              <a href='#'>
                <Icon name='cog' />
                Settings
              </a>
            </li>
            <li>
              <Link to='/myprofile'>
                <Icon name='user' />
                Profile
              </Link>
            </li>
            <li>
              <a href='#'>
                <Icon name='bell-o' />
                Notifications
                <span className='badge pull-right bg-red'>5</span>
              </a>
            </li>
            <li className='divider' />
            <li>
              <a href='#' onClick={this.logout}>
                <Icon name='power-off' />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { authentication } = state;
  const { user } = authentication;
  const { data } = user || {};
  const { email } = data || {};
  return { email };
}

const actionCreators = {
  logout: userActions.logout,
};
const connectedUserMenu = connect(mapState, actionCreators)(UserMenu);
export { connectedUserMenu as UserMenu };
