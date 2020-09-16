import * as React from 'react';
import './style.css';

class AgentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='agentInfoContainer'>
        <div className='avatar'>
          <img src={this.props.avatar} alt='avatar' />
        </div>
        <div className='info'>
          <div className='name'>{this.props.name}</div>
          <div className='title'>{this.props.title}</div>
          <div className='address'>{this.props.address}</div>
        </div>
        <div className='ops'>
          <a href='#' className='btn btn-icon btn-round btn-o btn-magenta btn-sm'>
            <span className='fa fa-envelope-o' />
          </a>
          <a href='#' className='btn btn-icon btn-round btn-o btn-red btn-sm'>
            <span className='fa fa-heart-o' />
          </a>
        </div>
      </div>
    );
  }
}

export default AgentInfo;
