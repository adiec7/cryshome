import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from '../../Components/DashboardLayout';
import NewItem from '../NewsPage/Components/NewItem';

class AdvicePage extends React.Component {
  listNew = [
    {
      linkImage:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599992481/cloudinary-5_n17xqz.jpg',
      title: 'Beautiful house ',
      address: 'Lekki Epe Express way',
      date: '18/10/2020',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus accusantium modi quod',
    },
    {
      linkImage:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599992486/cloudinary-6_vdqkzy.jpg',
      title: 'Beautiful house ',
      address: 'Agege Pencinema',
      date: '22/10/2019',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus accusantium modi quod',
    },
    {
      linkImage:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599992479/cloudinary-4_vr0gps.jpg',
      title: 'Well Ventilated duplex with Pent house',
      address: 'Banana Island',
      date: '22/08/2020',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus accusantium modi quod',
    },
    {
      linkImage:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599987234/house-cloudinary-2_ia8hl0.png',
      title: 'Well Furnished DUplex with in-built Gym and swimming pool',
      address: 'Ikoyi Lagos State',
      date: '10/09/2020',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus accusantium modi quod',
    },
  ];
  render() {
    return (
      <div className='advicePage'>
        <Dashboard>
          <div className='dashboardTitle'>
            <h3>Advices ({this.props.match.params.type})</h3>
          </div>
          <div className='dashboardBody row'>
            {/* <div className="bigItemWrapper">
                <BigItem linkImage={this.linkBigItem} />
              </div> */}
            <div className='newItemWrapper container'>
              {this.listNew.map((item, index) => {
                return (
                  <div className='col-xs-12 col-sm-12 col-md-6' key={index}>
                    <NewItem data={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default AdvicePage;
