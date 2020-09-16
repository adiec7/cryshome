import * as React from 'react';
import './style.css';

class SingleHouse extends React.Component {
  render() {
    return (
      <div className='singleHouse'>
        <a href='#' className='card'>
          <div className='figure'>
            <img src={this.props.data.image_url} alt='image' />
            <div className='figCaption'>
              <div>#{this.props.data.price}</div>
              {/* <span className="icon-eye"> 200</span>
              <span className="icon-heart"> 54</span>
              <span className="icon-bubble"> 13</span> */}
            </div>
            <div className='figView'>
              <span className='icon-eye' />
            </div>
            <div className='figType'>{this.props.data.propertyType}</div>
          </div>
          <h2>{this.props.data.title}</h2>
          <div className='cardAddress'>
            <span className='icon-pointer' />
            {this.props.data.address}
          </div>
          <ul className='cardFeat'>
            <li>
              <span className='fa fa-moon-o' /> {this.props.data.beds}
            </li>
            <li>
              <span className='icon-drop' /> {this.props.data.toilets}
            </li>
            <li>
              <span className='icon-frame' /> {this.props.data.square} Sq Ft
            </li>
          </ul>
        </a>
      </div>
    );
  }
}

export default SingleHouse;
