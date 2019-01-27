// packages
import React from 'react';
import Profile from '../profile/profile';

// styles
import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    console.log(this.props);
    return (
      <div className='dashboard'>
        <Profile user={'business'}/>
        {this.props.user === 'business' && (
          <Profile user={'business'}/>
        )}
        {this.props.user === 'volunteer' && (
          <Profile user={'volunteer'}/>
        )}
      </div>
    );
  }
}

export default Dashboard;
