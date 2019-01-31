// packages
import React from 'react';
import { Redirect } from 'react-router-dom';

import NewProfileForm from '../profile-form/new-profile-form';
import BusinessProfileEdit from '../profile-form/business-profile-edit';
import VolunteerProfileEdit from '../profile-form/volunteer-profile-edit';

// styles
import './dashboard-edit.scss';
/* TODO Add redux for conditional rendering */
class DashboardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userExist: null,
      userType: null,
    }
  }

  render() {
    const { location } = this.props;

    return (
        <React.Fragment>
          {this.state.userType === null && <NewProfileForm />}
          {this.state.userType === 'business' && <BusinessProfileEdit />}
          {this.state.userType === 'volunteer' && <VolunteerProfileEdit />}
        </React.Fragment>
    );
  }
}

export default DashboardEdit;
