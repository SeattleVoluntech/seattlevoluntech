// packages
import React from 'react';
import NavUi from "../nav-ui/nav-ui";

// styles
import './thank-you.scss';

class ThankYou extends React.Component{
  constructor(props){
    super(props);
    this.state = {ThankYou};
  }
  render(){
    const {location}=this.props;
  }
  return(){
    return (
      <div>
        <NavUi location={location}/>
        <h3 className="header-styles"</h3>
      </div>
    );
  };
}
