import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import AgentInfo from '../AgentInfo';

class SearchAgentForm extends React.Component {
  agentList = [
    {
      avatar: 'https://res.cloudinary.com/techgoddess/image/upload/v1599993352/man_cjdygh.jpg',
      name: 'Jane Doe',
      title: 'Administrator',
      address: 'Lekki Epe Express Way',
    },
    {
      avatar: 'https://res.cloudinary.com/techgoddess/image/upload/v1600006069/log-hair_tzwb7u.jpg',
      name: 'Yemisi Akintunde',
      title: 'Administrator',
      address: 'Thomas Estate Ajah',
    },
    {
      avatar: 'https://res.cloudinary.com/techgoddess/image/upload/v1599993352/man_cjdygh.jpg',
      name: 'Kunle Adebisi',
      title: 'Administrator',
      address: 'Iju Ishaga',
    },
    {
      avatar: 'https://res.cloudinary.com/techgoddess/image/upload/v1599993352/man_cjdygh.jpg',
      name: 'George Bush',
      title: 'Administrator',
      address: 'Ikate',
    },
    {
      avatar: 'https://res.cloudinary.com/techgoddess/image/upload/v1600006069/log-hair_tzwb7u.jpg',
      name: 'Ijeoma Okoro',
      title: 'Administrator',
      address: 'Imo state',
    },
    {
      avatar: 'https://res.cloudinary.com/techgoddess/image/upload/v1600006069/log-hair_tzwb7u.jpg',
      name: 'Confidence Isam',
      title: 'Administrator',
      address: 'Cross River',
    },
    {
      avatar: 'https://res.cloudinary.com/techgoddess/image/upload/v1600006069/log-hair_tzwb7u.jpg',
      name: 'Gbadamosi Cynthia',
      title: 'Administrator',
      address: 'Igando',
    },
    {
      avatar:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599995346/lady-avatar_eueimj.jpg',
      name: 'Bobby Chukwu',
      title: 'Administrator',
      address: 'VGC',
    },
    {
      avatar:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599995346/lady-avatar_eueimj.jpg',
      name: 'Mark Ikem',
      title: 'Administrator',
      address: 'Iju Ishaga',
    },
    {
      avatar:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599995346/lady-avatar_eueimj.jpg',
      name: 'Caleb Oyebode',
      title: 'Administrator',
      address: 'Agege',
    },
  ];
  constructor() {
    super();
    this.state = {
      resultTab: 'agents',
    };
  }
  changeResultTab = (tab) => {
    if (tab !== this.state.resultTab) {
      this.setState({
        resultTab: tab,
      });
    }
  };
  resultAgencies = () => {
    return <h2>Agencies</h2>;
  };
  resultAgents = () => {
    return (
      <ul className='agentsResult'>
        {this.agentList.map((item, index) => {
          return (
            <li key={index}>
              <AgentInfo
                avatar={item.avatar}
                name={item.name}
                title={item.title}
                address={item.address}
              />
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <div>
        <div className='dashboardTitle'>
          <h3>Find Agent</h3>
          <h5>
            We'd love to find out more about you. It'll help us make sure our website and apps tick
            the right boxes.
          </h5>
        </div>
        <div className='searchAgentForm'>
          <div className='input-group searchForm'>
            <input type='text' name='' id='' className='form-control' />
            <span className='input-group-btn'>
              <button className='btn btn-green'>
                <Icon name='search' />
              </button>
            </span>
          </div>
          <div className='resultTab'>
            <ul>
              <li
                className={this.state.resultTab === 'agents' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('agents')}
              >
                <a>
                  <Icon name='map-o' /> Agents
                </a>
              </li>
              <li
                className={this.state.resultTab === 'agencies' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('agencies')}
              >
                <a>
                  <Icon name='th-list' /> Agencies
                </a>
              </li>
            </ul>
          </div>
          <div className='resultBody'>
            <h3>Result:</h3>
            {this.state.resultTab === 'agents' ? this.resultAgents() : this.resultAgencies()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAgentForm;
