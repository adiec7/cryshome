import * as React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { propertyActions } from '../../../../Redux/Actions';
import SelectComponent from '../../../../Components/SelectComponent';
import SingelHouse from '../../../../Components/SingleHouse';
import SearchMap from '../SearchMap';
import { Icon } from 'react-fa';

const houseData = [
  {
    name: 'Beautiful Ho',
    address: ' 39 Divine Homes Estate Thomas Estate',
    beds: 3,
    toilets: 2,
    square: 20,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987243/house-cloudinary-1_gkzqqh.png',
  },
  {
    name: 'Beautiful House',
    address: ' 39 Divine Homes Estate Thomas Estate',
    beds: 3,
    toilets: 2,
    square: 20,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987234/house-cloudinary-2_ia8hl0.png',
  },
  {
    name: 'Beautiful House',
    address: ' 39 Divine Homes Estate Thomas Estate',
    beds: 3,
    toilets: 2,
    square: 20,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987243/house-cloudinary-1_gkzqqh.png',
  },
  {
    name: 'Beautiful House',
    address: ' 39 Divine Homes Estate Thomas Estate',
    beds: 3,
    toilets: 2,
    square: 20,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987234/house-cloudinary-2_ia8hl0.png',
  },
];

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      resultTab: 'list',
      properties: [],
    };
  }
  componentDidMount() {
    this.props.getProperties();
    // console.log('Mine');
    // console.log(this.props.properties);
    // this.setState({ properties: this.props.properties });
  }

  changeResultTab = (tab) => {
    if (tab !== this.state.resultTab) {
      this.setState({
        resultTab: tab,
      });
    }
  };

  resultList = () => {
    console.log('Mine');
    console.log(this.props.properties);
    if (!this.props.properties.loading) {
      return (
        <div className='resultsList'>
          <div className='row'>
            {this.props.properties.items &&
              this.props.properties.items.map((data, index) => {
                return (
                  <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6' key={index}>
                    <SingelHouse data={data} />
                  </div>
                );
              })}
          </div>
        </div>
      );
      this.props.properties.items && console.log(this.props.properties.items[0]);
    }
  };
  resultMap = () => {
    return (
      <div className='resultsMap'>
        <SearchMap />
      </div>
    );
  };
  render() {
    const properties = this.props.properties.items;
    return (
      <div className='searchForm'>
        <div className='filterBox'>
          <div className='row form-group'>
            <div className='col-xs-12 col-sm-8 col-md-6 yearOfBirth'>
              <h4>Prototype Type</h4>
              <div className='selectItem'>
                <SelectComponent listItem={['All', 'Rent', 'Sale']} />
              </div>
            </div>
          </div>
          <div className='row form-group'>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem'>
              <div className='formField'>
                <label>Bedrooms</label>
                <div className='volume'>
                  <a href='#' className='btn btn-gray btn-round-left'>
                    <Icon name='angle-left' />
                  </a>
                  <input type='text' className='form-control' readOnly={true} value='1' />
                  <a href='#' className='btn btn-gray btn-round-right'>
                    <Icon name='angle-right' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem'>
              <div className='formField'>
                <label>Bathrooms</label>
                <div className='volume'>
                  <a href='#' className='btn btn-gray btn-round-left'>
                    <Icon name='angle-left' />
                  </a>
                  <input type='text' className='form-control' readOnly={true} value='1' />
                  <a href='#' className='btn btn-gray btn-round-right'>
                    <Icon name='angle-right' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='resultTable'>
          <div className='resultTab'>
            <ul>
              <li
                className={this.state.resultTab === 'list' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('list')}
              >
                <a>
                  <Icon name='th-list' /> Listing view
                </a>
              </li>
              <li
                className={this.state.resultTab === 'map' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('map')}
              >
                <a>
                  <Icon name='map-o' /> Map view
                </a>
              </li>
            </ul>
          </div>
          <div className='resultBody'>
            {this.state.resultTab === 'list' ? this.resultList() : this.resultMap()}
          </div>
        </div>
      </div>
    );
  }
}
function mapState(state) {
  const { properties } = state;
  return { properties };
}

const actionCreators = {
  getProperties: propertyActions.getAll,
};

const connectedSearchForm = connect(mapState, actionCreators)(SearchForm);

export { connectedSearchForm as SearchForm };
