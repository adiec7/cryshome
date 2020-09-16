import * as React from 'react';
import './style.css';

class BigItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='bigItemContainer'>
        <img src={this.props.linkImage} />
      </div>
    );
  }
}

export default BigItem;
