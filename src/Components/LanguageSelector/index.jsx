import * as React from 'react';
import './style.css';
import { connect, Dispatch } from 'react-redux';
import { getTranslation } from 'Services/Geo';

class LanguageSelector extends React.Component {
  changeLanguage = (lang) => {
    if (this.props.lang !== lang) {
      this.props.changeLanguage(lang);
    }
  };
  render() {
    return (
      <div className='languageSelector'>
        <span className='langText'>{getTranslation(this.props.lang, '')} </span>
        <ul>
          <li
            className={this.props.lang === 'en' ? ' active' : ''}
            onClick={(e) => this.changeLanguage('en')}
          >
            {/* <span className="flag uk" /> */}
          </li>
          <li
            className={this.props.lang === 'vn' ? ' active' : ''}
            onClick={(e) => this.changeLanguage('vn')}
          >
            {/* <span className="flag vn" /> */}
          </li>
        </ul>
      </div>
    );
  }
}

export default LanguageSelector;
