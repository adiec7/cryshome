import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../Redux/Actions/index.jsx';
import RLForm from '../../Components/RegisterLoginForm';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ListProperty from './Components/ListProperty';

class HomePage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      rlFormStatus: '',
    };
  }
  // componentDidMount() {
  //   this.props.getUsers();
  // }

  render() {
    return (
      <div className='homePage'>
        <div className='headerWrapper'>
          <Header />
        </div>
        <div className='bodyWrapper'>
          <ListProperty />
        </div>
        <div className='footerWrapper'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
