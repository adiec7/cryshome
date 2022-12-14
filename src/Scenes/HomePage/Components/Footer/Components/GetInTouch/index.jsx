import * as React from 'react';
import './style.css';

class GetInTouch extends React.Component {
  render() {
    return (
      <div className='getInTouch col-xs-12 col-sm-6 col-md-3 col-lg-3'>
        <div className='touchTitle osLight'>{this.props.children}</div>
        <ul className='mainList'>
          <li className='footer-phone'>
            <span className='fa fa-phone' /> +234 9124326447
            <br />     +234 9066613966
          </li>
          <li className='footer-address osLight'>
            <p>Suite 128,</p>
            <p> Ikota Shopping Complex,</p>
            <p>VGC,Lekki-Ajah, Lagos</p>
          </li>
          <li>
            <a href='#' className='btn btn-sm btn-icon btn-round btn-o btn-white'>
              <span className='fa fa-facebook' />
            </a>
            <a href='#' className='btn btn-sm btn-icon btn-round btn-o btn-white'>
              <span className='fa fa-twitter' />
            </a>
            <a href='#' className='btn btn-sm btn-icon btn-round btn-o btn-white'>
              <span className='fa fa-google-plus' />
            </a>
            <a href='#' className='btn btn-sm btn-icon btn-round btn-o btn-white'>
              <span className='fa fa-linkedin' />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default GetInTouch;
