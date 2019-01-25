// packages
import React from 'react';
import { Redirect } from 'react-router-dom';
// import Form from '../form/form';

// styles
import './dashboard-edit.scss';
/* TODO Add redux for conditional rendering */
class DashboardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userExist: null,
      userType: null,
      businessName: '',
      businessEmail: '',
      businessDesc: '',
      existingSite: '',
      volunteerName: '',
      volunteerEmail: '',
      volunteerBio: '',
      volunteerSkills: [],
      visualDesign: false,
      uxDesign: false,
      frontEnd: false,
      backEnd: false,
      fullStack: false,
      wordpress: false,
      squarespace: false,
      wix: false,
      redirectToReferrer: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const name = target.type === 'radio' ? 'userType' : target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    //console.log(data);
    //console.log(data.keys());
    for (let name of data.keys()) {
      //console.log(name);
      data.set(name, data.get(name));
    }
    /* fetch('/api/', {
      method: 'POST',
      body: data,
    }); */
    this.setState({ redirectToReferrer: true });
  }

  render() {
    const { location } = this.props;

    const businessProfile = <React.Fragment><label htmlFor='business-name-edit'>Business Name: </label>
      <input type='text' id='business-name-edit' name='businessName' required size='40' onChange={this.handleInputChange} value={this.state.businessName}/>
      <span className='invalid-feedback' />
      <label htmlFor='business-email-edit'>Business Email: </label>
      <input type='email' id='business-email-edit' name='businessEmail' required size='40' onChange={this.handleInputChange} value={this.state.businessEmail}/>
      <span className='invalid-feedback' />
      <label htmlFor='business-desc-edit'>Business Description: </label>
      <textarea rows='10' cols='50' id='business-desc-edit' name='businessDesc' required onChange={this.handleInputChange} value={this.state.businessDesc}/>
      <span className='invalid-feedback' />
      <label htmlFor='existing-website-edit'>Existing Website (Optional): </label>
      <input type='url' id='existing-website-edit' name='existingSite' size='50' onChange={this.handleInputChange} value={this.state.existingSite}/>
      <span className='invalid-feedback' />
      </React.Fragment>;

    const skills = [['visual-design', 'visualDesign'], ['ux-design', 'uxDesign'], ['front-end', 'frontEnd'], ['back-end', 'backEnd'], ['full-stack', 'fullStack'], ['wordpress', 'wordpress'], ['squarespace', 'squarespace'], ['wix', 'wix']];
    const volunteerProfile = <React.Fragment><label htmlFor='volunteer-name-edit'>Name: </label>
      <input type='text' id='volunteer-name-edit' name='volunteerName' required size='40' onChange={this.handleInputChange} value={this.state.volunteerName}/>
      <span className='invalid-feedback' />
      <label htmlFor='volunteer-email-edit'>Email: </label>
      <input type='text' id='volunteer-email-edit' name='volunteerEmail' required size='40' onChange={this.handleInputChange} value={this.state.volunteerEmail}/>
      <span className='invalid-feedback' />
      <label htmlFor='volunteer-bio-edit'>Tell us about yourself: </label>
      <textarea rows='10' cols='50' id='volunteer-bio-edit' name='volunteerBio' required onChange={this.handleInputChange} value={this.state.volunteerBio}/>
      <span className='invalid-feedback' />
      <fieldset className='skills-group'>
        <legend><h3>Technical Skills:</h3></legend>
        <ul className='skills-checkbox'>
          {skills.map(([id, name], idx) => (
            <li key={idx}>
              <input type='checkbox' id={id} name={name} onChange={this.handleInputChange} />
              <label htmlFor={id}>{id.replace(/-/, ' ').toUpperCase()}</label>
              <span className='invalid-feedback' />
            </li>
          ))}
        </ul>
      </fieldset>
      </React.Fragment>;

    const newProfileHeading = <React.Fragment><h2>Create Your Profile</h2>
      <h3>Are you a business owner or want to volunteer?</h3>
      <div className='user-type' onChange={this.handleInputChange}>
      <label htmlFor='business'>Business Owner</label>
      <input type='radio' id='business' name='userType' onChange={this.handleInputChange} checked={this.state.userType === 'business'} value='business'></input>
      <label htmlFor='volunteer'>Volunteer</label>
      <input type='radio' id='volunteer' name='userType' onChange={this.handleInputChange} checked={this.state.userType === 'volunteer'} value='volunteer'></input>
      </div></React.Fragment>;

    const existingProfileHeading = <React.Fragment><h2>Edit Your Profile</h2></React.Fragment>;
    const { userExist, userType } = this.state;
    console.log(this.props);
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={'/dashboard'}/>;
    }
    return (
        <React.Fragment>
          <section className='profile-form'>
            <form noValidate onSubmit={this.handleSubmit} className='form-container'>
              <div className='profile-container'>
                { userExist === null ? newProfileHeading : existingProfileHeading}
                <div className='profile-edit-fields'>
                  { userType === 'business' ? businessProfile : volunteerProfile }
                  <button type='submit' value='Submit'>Submit</button>
                </div>
              </div>
            </form>
          </section>
        </React.Fragment>
    );
  }
}

export default DashboardEdit;
