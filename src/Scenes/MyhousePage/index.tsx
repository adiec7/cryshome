import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from '../../Components/DashboardLayout';
import SingelHouse from '../../Components/SingleHouse';

const houseData = {
  name: 'Beautiful 3 Bedroom en-suite Apartmnet',
  address: ' 4 Yemi Suara, Abraham Adesanya Bustop',
  beds: 3,
  toilets: 2,
  square: 20,
  img:
    'https://res.cloudinary.com/techgoddess/image/upload/v1599987243/house-cloudinary-1_gkzqqh.png',
};

class MyhousePage extends React.Component<RouteComponentProps<{ id: string }>, {}> {
  render() {
    return (
      <div className='myhousePage'>
        <Dashboard>
          <div className='dashboardTitle'>
            <h3>Property ({this.props.match.params.id})</h3>
          </div>
          <div className='myHouseWrapper'>
            <SingelHouse data={houseData} />
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default MyhousePage;
