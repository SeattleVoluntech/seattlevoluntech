// packages
import React from 'react';
import NavUi from "../nav-ui/nav-ui";

// styles
import './thank-you.scss';

class ThankYou extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { location } = this.props;
    return (
        <div>
          <NavUi location={location}/>
          <h3 className="header-styles">Thank you</h3>
        </div>
    );
  }
}

export default ThankYou;
