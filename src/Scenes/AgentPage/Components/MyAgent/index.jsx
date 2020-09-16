import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import AgentInfo from '../AgentInfo';

class SearchAgentForm extends React.Component {
  agentList = [
    {
      avatar:
        'https://res.cloudinary.com/techgoddess/image/upload/v1599995346/lady-avatar_eueimj.jpg',
      name: 'Jane Doe',
      title: 'Administrator',
      address: 'Thomas Estate',
    },
    {
      avatar: 'https://res.cloudinary.com/techgoddess/image/upload/v1599993352/man_cjdygh.jpg',
      name: 'John Doe',
      title: 'Administrator',
      address: 'Lapai Close, Ajah',
    },
    {
      avatar: 'https://res.cloudinary.com/techgoddess/image/upload/v1599993352/man_cjdygh.jpg',
      name: 'John Doe',
      title: 'Administrator',
      address: 'Fagba, Lagos State',
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
          <h3>My Agent</h3>
          <h5>
            We'd love to find out more about you. It'll help us make sure our website and apps tick
            the right boxes.
          </h5>
        </div>
        <div className='searchAgentForm'>
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
            {this.state.resultTab === 'agents' ? this.resultAgents() : this.resultAgencies()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAgentForm;
