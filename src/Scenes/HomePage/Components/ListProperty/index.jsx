import * as React from 'react';
import './style.css';
import SingelHouse from '../../../../Components/SingleHouse';
const houseData = [
  {
    name: 'Duplex Thomas Estate Ajah',
    address: '5 Betty Street Graceland',
    beds: 4,
    toilets: 5,
    square: 400,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987243/house-cloudinary-1_gkzqqh.png',
  },
  {
    name: '6 Bedroom Graceland Estate Ajah',
    address: '50 Bolarin Street Lagos',
    beds: 6,
    toilets: 7,
    square: 600,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987234/house-cloudinary-2_ia8hl0.png',
  },
  {
    name: 'Luxurious House in VGC',
    address: ' 20 VGC Estate Ajah',
    beds: 3,
    toilets: 2,
    square: 20,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987243/house-cloudinary-1_gkzqqh.png',
  },
  {
    name: ' 4 Bedroom Flat Ikota Villa Estate',
    address: '34 Road 4 Thomas Road',
    beds: 4,
    toilets: 5,
    square: 205,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987243/house-cloudinary-1_gkzqqh.png',
  },
  {
    name: 'Semi-Detached 3 Bedroom Apartment Lekki',
    address: ' 2 opposite Spar Ikate Lekki',
    beds: 3,
    toilets: 5,
    square: 280,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987234/house-cloudinary-2_ia8hl0.png',
  },
  {
    name: '5 Family House, Family street VI',
    address: ' 30 VI Road',
    beds: 3,
    toilets: 2,
    square: 240,
    img:
      'https://res.cloudinary.com/techgoddess/image/upload/v1599987243/house-cloudinary-1_gkzqqh.png',
  },
];

class ListProperty extends React.Component {
  render() {
    return (
      <div className='listProperty'>
        <div className='row listPropertyHeader'>
          <h3>Recently Listed Properties</h3>
          <h5>
            Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras
            adipiscing
          </h5>
        </div>
        <div className='row listPropertyContent'>
          {houseData.map((data, index) => {
            return (
              <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4' key={index}>
                <SingelHouse data={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListProperty;
