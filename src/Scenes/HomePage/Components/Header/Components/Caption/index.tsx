import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTranslation, SupportedLanguage } from '../../../../../../Services/Geo';
import { RootState } from '../../../../../../Redux/Store';

const mapStateToProps = (state: RootState) => ({
  lang: state.status.lang,
  isPersist: state.status.isPersist,
});

interface CaptionProps {
  lang: SupportedLanguage;
  isPersist: boolean;
}

class Caption extends React.Component<CaptionProps, {}> {
  render() {
    if (!this.props.isPersist) {
      return null;
    }
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

export default connect(mapStateToProps)(Caption);
