import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTranslation, SupportedLanguage } from '../../../../../../Services/Geo';

class Caption extends React.Component {
  render() {
    // if (!this.props.isPersist) {
    //   return null;
    // }
    return (
      <div className='homeCaption'>
        <div className='homeTitle'>{getTranslation(this.props.lang, 'Treasure Home Realtors')}</div>
        <div className='homeSubtitle'>{getTranslation(this.props.lang, '')}</div>
        <Link className='btn btn-danger' to='/search'>
          {getTranslation(this.props.lang, 'View Houses')}
        </Link>
      </div>
    );
  }
}

export default Caption;
