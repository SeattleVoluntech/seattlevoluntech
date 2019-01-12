// packages
import React from 'react';
import NavUi from "../nav-ui/nav-ui";

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
          <NavUi location={location}/>
          <p className="tempText"> i e am dashboard</p>
        </React.Fragment>
    )
  };

}

export default Dashboard;
