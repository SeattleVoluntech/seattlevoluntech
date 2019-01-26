// packages
import React from 'react';
import { Redirect } from 'react-router-dom';
// import Form from '../form/form';

// styles
import './dashboard-edit.scss';
/* TODO Add redux for conditional rendering */
class VolunteerProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    }, this.validateForm);
  }

  handleInputChange(event) {
    let fields = this.state.fields;
    const { target } = event;
    const name = target.type === 'radio' ? 'userType' : target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(target.value);
    fields[name] = value
    this.setState({
      fields,
    });
  }

  validateForm() {
    let { fields, touched } = this.state;
    let errors = {};
    let formValid = true;

    if (touched['volunteerName'] && !fields['volunteerName']) {
      formValid = false;
      errors['volunteerName'] ='Please tell us your name.';
    }

    if (touched['volunteerEmail'] && !fields['volunteerEmail']) {
      formValid = false;
      errors['volunteerEmail'] ='Please tell us your email.';
    }

    if (typeof fields['volunteerEmail'] !== 'undefined') {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields['volunteerEmail'])){
        formValid = false;
        errors['volunteerEmail'] ='Please enter your email.';
      }
    }

    if ( touched['volunteerBio'] && !fields['volunteerBio']) {
      formValid = false;
      errors['volunteerBio'] ='Please tell us yourself.';
    }
    this.setState({
        errors: errors
      });
    return formValid;

    console.log(fields);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.validateForm();
    const data = new FormData(event.target);
    // console.log(data);
    // console.log(data.keys());
    for (let name of data.keys()) {
      // console.log(name);
      data.set(name, data.get(name));
    }
    /* fetch('/api/', {
      method: 'POST',
      body: data,
    }); */
    //this.setState({ redirectToReferrer: true });
  }

  render() {
    const { location } = this.props;
    const skills = [['visual-design', 'visualDesign'], ['ux-design', 'uxDesign'], ['front-end', 'frontEnd'], ['back-end', 'backEnd'], ['full-stack', 'fullStack'], ['wordpress', 'wordpress'], ['squarespace', 'squarespace'], ['wix', 'wix']];
    const volunteerProfile = <React.Fragment><label htmlFor='volunteer-name-edit'>Name: </label>
      <input type='text' id='volunteer-name-edit' name='volunteerName' required size='40' onChange={this.handleInputChange} onBlur={this.handleBlur('volunteerName')} value={this.state.fields.volunteerName || ''}/>
      <span className='invalid-feedback'>{this.state.errors.volunteerName}</span>
      <label htmlFor='volunteer-email-edit'>Email: </label>
      <input type='text' id='volunteer-email-edit' name='volunteerEmail' required size='40' onChange={this.handleInputChange} onBlur={this.handleBlur('volunteerEmail')} value={this.state.fields.volunteerEmail || ''}/>
      <span className='invalid-feedback'>{this.state.errors.volunteerEmail}</span>
      <label htmlFor='volunteer-bio-edit'>Tell us about yourself: </label>
      <textarea rows='10' cols='70' id='volunteer-bio-edit' name='volunteerBio' required onChange={this.handleInputChange} onBlur={this.handleBlur('volunteerBio')} value={this.state.fields.volunteerBio || ''}/>
      <span className='invalid-feedback'>{this.state.errors.volunteerBio}</span>
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
                { existingProfileHeading }
                <div className='profile-edit-fields'>
                  { volunteerProfile }
                  <button type='submit' value='Submit'>Submit</button>
                </div>
              </div>
            </form>
          </section>
        </React.Fragment>
    );
  }
}

export default VolunteerProfileEdit;
