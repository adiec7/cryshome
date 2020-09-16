import * as React from 'react';
import './style.css';
import { ChildComponentProps } from 'google-map-react';

class MiniHouse extends React.Component {
  render() {
    return (
      <div className='miniHouse'>
        <div className='miniHouseIcon' />
      </div>
    );
  }
}

export default MiniHouse;
