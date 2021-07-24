import * as React from 'react';
import './style.css';
import Dashboard from '../../Components/DashboardLayout';
import { RouteComponentProps } from 'react-router-dom';
// import BigItem from './Components/BigItem';
import NewItem from './Components/NewItem';

class NewsPage extends React.Component {
  listNew = [
    {
      linkImage:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599987243/house-cloudinary-1_gkzqqh.png',
      title: 'Beautiful house ',
      address: 'Abraham Adesanya',
      date: '22/09/2020',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus accusantium modi quod',
    },
    {
      linkImage:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599992479/cloudinary-4_vr0gps.jpg',
      title: 'Well ventilated house',
      address: 'Lekki phase 1',
      date: '22/08/2020',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus accusantium modi quod',
    },
    {
      linkImage:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599992486/cloudinary-6_vdqkzy.jpg',
      title: 'Spacious House',
      address: 'Agege',
      date: '20/08/2020',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus accusantium modi quod',
    },
    {
      linkImage:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599992486/cloudinary-6_vdqkzy.jpg',
      title: 'Beautiful house ',
      address: 'Ikate Lekki',
      date: '22/10/2017',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus accusantium modi quod',
    },
  ];
  render() {
    return (
      <div className='newsPage'>
        <Dashboard>
          <div className='newsWrapper'>
            <div className='dashboardTitle'>
              <h3>Projects</h3>
              <h5>
                We'd love to find out more about you. It'll help us make sure our website and apps
                tick the right boxes.
              </h5>
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
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default NewsPage;
