import * as React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Icon } from 'react-fa';
import { propertyActions } from '../../../../Redux/Actions';
import SelectComponent from '../../../../Components/SelectComponent';
import CheckBox from '../../../../Components/CheckBox';
import InputMap from '../../../../Components/InputMap';
import RadioButton from '../RadioButton';

class AddNewPropertyForm extends React.Component {
  types = ['For Sale', 'For Rent'];
  constructor(props) {
    super();
    this.state = {
      property: {
        title: '',
        description: '',
        price: 0,
        address: '',
        beds: '',
        baths: '',
        sqrft: '',
        propertyType: '',
        image_url: '',
        status: 'available',
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showWidget = () => {
    const { property } = this.state;
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'techgoddess',
        uploadPreset: 'uc2oeo1t',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          // console.log('Done! Here is the image info: ', result.info.secure_url);
          this.setState({
            property: {
              ...property,
              image_url: result.info.secure_url,
            },
          });
        }
      }
    );

    widget.open();
  };

  handleChange(event) {
    const { name, value } = event.target;
    const { property } = this.state;
    this.setState({
      property: {
        ...property,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { property } = this.state;
    if (property.title && property.address && property.price && property.image_url) {
      this.props.create(property);
    }
  }

  render() {
    const { alert } = this.props;
    const { property, submitted } = this.state;
    return (
      <form role='form' onSubmit={this.handleSubmit}>
        <div className='newPropertyForm'>
          <div className='row form-group'>
            <div className='title col-xs-12 col-sm-6 col-md-6'>
              <h4>Title</h4>
              <input
                type='text'
                name='title'
                value={property.title}
                className='form-control'
                onChange={this.handleChange}
              />
            </div>
            <div className='Price col-xs-12 col-sm-6 col-md-6'>
              <h4>Price</h4>
              <div className='input-group'>
                <span className='input-group-addon'>#</span>
                <input
                  type='number'
                  name='price'
                  value={property.price}
                  className='form-control'
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className='row form-group'>
            <div className='discription col-xs-12 col-sm-12 col-md-12'>
              <h4>Description</h4>
              <textarea
                className='description form-control'
                name='description'
                value={property.description}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='row form-group'>
            <div className='address col-xs-12 col-sm-12 col-md-12'>
              <h4>Address</h4>
              <input
                type='text'
                name='address'
                value={property.address}
                className='form-control'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='row form-group'>
            <div className='bedrooms col-xs-12 col-sm-6 col-md-3'>
              <h4>Bedrooms</h4>
              <input
                type='text'
                name='beds'
                value={property.beds}
                className='form-control'
                onChange={this.handleChange}
              />
            </div>
            <div className='bathrooms col-xs-12 col-sm-6 col-md-3'>
              <h4>Bathrooms</h4>
              <input
                type='text'
                name='baths'
                value={property.baths}
                className='form-control'
                onChange={this.handleChange}
              />
            </div>
            <div className='area col-xs-12 col-sm-6 col-md-3'>
              <h4>Area</h4>
              <div className='input-group'>
                <input
                  type='text'
                  name='sqrft'
                  value={property.sqrft}
                  className='form-control'
                  onChange={this.handleChange}
                />
                <span className='input-group-addon'>Sq Ft</span>
              </div>
            </div>
            <div className='type col-xs-12 col-sm-6 col-md-3'>
              <h4>Type</h4>
              <SelectComponent
                listItem={this.types}
                onChange={this.handleChange}
                name='propertyType'
                value={property.propertyType}
              />
            </div>
          </div>
          <div className='row form-group'>
            <div className='imageGallery col-xs-12 col-sm-12 col-md-12'>
              <h4>Image Gallery</h4>
              <button className='btn btn-lg btn-green isThemeBtn' onClick={this.showWidget}>
                Upload
              </button>
              {/* <div className='file-input file-input-new'>
              <div className='btn btn-o btn-default btn-file'>
                <Icon name='folder-open' />
                &nbsp;Browse Images
                <button className='btntn'></button>
              </div>
            </div> */}
            </div>
          </div>
          <div className='row form-group'>
            <div className='amenities col-xs-12 col-sm-12 col-md-12'>
              <h4>Amenities</h4>
              <div className='col-xs-12 col-sm-4 col-md-3'>
                <CheckBox>Garage</CheckBox>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-3'>
                <CheckBox>Outdoor Pool</CheckBox>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-3'>
                <CheckBox>Garden</CheckBox>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-3'>
                <CheckBox>Security System</CheckBox>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-3'>
                <CheckBox>Internet</CheckBox>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-3'>
                <CheckBox>Telephone</CheckBox>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-3'>
                <CheckBox>Air Conditioning </CheckBox>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-3'>
                <CheckBox>Heating</CheckBox>
              </div>
            </div>
          </div>
          <div className='row form-group'>
            <div className='agent col-xs-12 col-sm-12 col-md-12'>
              <h4>Agents</h4>
              <div className='agentItems col-xs-6 col-sm-6 col-md-6'>
                <RadioButton>No Agent</RadioButton>
              </div>
              <div className='agentItems col-xs-6 col-sm-6 col-md-6'>
                <RadioButton>Find Agent</RadioButton>
              </div>
            </div>
          </div>
          <div className='row form-group rowBtn'>
            <button type='submit' className='btn btn-green btn-lg'>
              Add Property
            </button>
            {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
          </div>
        </div>
      </form>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  create: propertyActions.create,
};

const connectedAddNewPropertyPage = connect(mapState, actionCreators)(AddNewPropertyForm);
export { connectedAddNewPropertyPage as AddNewPropertyForm };
