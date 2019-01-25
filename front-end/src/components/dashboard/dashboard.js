// packages
import React from 'react';
import Profile from './profile';

// styles
import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    return (
        <React.Fragment>
        <Profile user={'business'}/>
          <p className="tempText"> i e am dashboard</p>
        </React.Fragment>
    )
  };

}

export default Dashboard;
