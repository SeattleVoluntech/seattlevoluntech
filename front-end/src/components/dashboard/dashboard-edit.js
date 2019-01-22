// packages
import React from 'react';
import NavUi from '../nav-ui/nav-ui';

// styles
import './dashboard-edit.scss';

class DashboardEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    return (
        <React.Fragment>
          <NavUi location={location} auth={this.props.auth}/>
          <section className='profile-form'>
            <h3 className="tempText"> Create Your Profile</h3>
          </section>
        </React.Fragment>
    );
  }
}

export default DashboardEdit;
