// packages
import React from 'react';

// components
import NewProfileForm from '../profile-form/new-profile-form';
import BusinessProfileEdit from '../profile-form/business-profile-edit';
import VolunteerProfileEdit from '../profile-form/volunteer-profile-edit';

// styles
import './dashboard-edit.scss';

class DashboardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userExist: null,
      userType: null,
    };
  }

  // TODO: Retrieve current user type from Redux Store to render correct form
  render() {
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
