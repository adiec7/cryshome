import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

import { UserMenu } from '../../../../Components/UserMenu';
import NotifyMenu from './Components/NotifyMenu';
import SearchForm from './Components/SearchForm';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='dashboardHeader'>
        <div className='logo'>
          <Link to='/'>
           <img src="https://i.ibb.co/F5SgL3G/logo-crystal-10.png" alt=""/>
          </Link>
        </div>
        <a href='#' className='navHandler' onClick={(e) => this.props.clickToggle()}>
          <Icon name='bars' />
        </a>
        <SearchForm />
        <div className='userMenuWrapper'>
          <UserMenu />
        </div>
        <NotifyMenu />
        <div className='clearfix' />
      </div>
    );
  }
}

export default Header;
