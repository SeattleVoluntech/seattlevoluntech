// packages
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
// styles
import './profile-form.scss';
import * as routes from "../../routes";
class NewProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      formSubmitted: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.checkFormCompletion = this.checkFormCompletion.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    }, this.validateForm);
  }

  handleInputChange(event) {
    let { fields } = this.state;
    const { target } = event;
    const name = target.type === 'radio' ? 'type' : target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    fields[name] = value
    this.setState({
      fields,
    });
  }

  checkFormCompletion() {
    if (this.state.fields.type === 'business') {
      const { firstName, email, bio, lastName} = this.state.fields;
      if (firstName && email && bio && lastName) {
        return true
      }
      return false
    } else if (this.state.fields.type === 'volunteer') {
      const { firstName, email, bio } = this.state.fields;
      if (firstName && email && bio) {
        return true
      }
      return false
    }
  }
  validateForm() {
    let { fields, touched } = this.state;
    let errors = {};
    let formValid = true;
    if (touched['firstName'] && !fields['firstName']) {
      formValid = false;
      errors['firstName'] ='Please enter the name of your business.';
    } else if (!touched['firstName']) {
      formValid = false;
      errors['firstName'] ='Please enter the name of your business.';
    }
    if (touched['email'] && !fields['email']) {
      formValid = false;
      errors['email'] ='Please enter your business email.';
    }
    if (typeof fields['email'] !== 'undefined') {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields['email'])){
        formValid = false;
        errors['email'] ='Please enter a valid email address.';
      }
    }
    if (touched['bio'] && !fields['bio']) {
      formValid = false;
      errors['bio'] ='Please tell us briefly about your business.';
    }
    /*if (touched['businessSite'] && !fields['businessSite']) {
      formValid = false;
      errors['businessSite'] ='Please enter a valid url.';
    }*/
    if (touched['firstName'] && !fields['firstName']) {
      formValid = false;
      errors['firstName'] ='Please tell us your first name.';
    }
    if (touched['email'] && !fields['email']) {
      formValid = false;
      errors['email'] ='Please tell us your email.';
    }
    if (typeof fields['email'] !== 'undefined') {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields['email'])){
        formValid = false;
        errors['email'] ='Please enter your email.';
      }
    }
    if ( touched['bio'] && !fields['bio']) {
      formValid = false;
      errors['bio'] ='Please tell us yourself/your organization.';
    }
    this.setState({
      errors: errors
    });
    return formValid;
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (await this.validateForm()){
      await this.setState({ formIsValid: true })
    }
    if (await this.state.formIsValid) {
      const data = JSON.stringify(this.state.fields);
      await fetch('http://localhost:8080/profile', {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: data,
      }).catch((error) => {
        alert(error);
      });
      this.setState({ formSubmitted: true });
    }
  }

  // Currently 'lastName' is being used for business website as there is no website field in the users table
  render() {
    const { location } = this.props;
    const businessProfile = <React.Fragment><label htmlFor='business-name-edit'>Business Name:</label>
      <input type='text' id='business-name-edit' name='firstName' required size='70' onChange={this.handleInputChange} onBlur={this.handleBlur('firstName')} value={this.state.fields.firstName || ''}/>
      <span className='invalid-feedback'>{this.state.errors.firstName}</span>
      <label htmlFor='business-email-edit'>Business Email:</label>
      <input type='email' id='business-email-edit' name='email' required size='70' onChange={this.handleInputChange} onBlur={this.handleBlur('email')} value={this.state.fields.email || ''}/>
      <span className='invalid-feedback'>{this.state.errors.email}</span>
      <label htmlFor='business-desc-edit'>Business Description:</label>
      <textarea rows='10' cols='70' id='business-desc-edit' name='bio' required onChange={this.handleInputChange} onBlur={this.handleBlur('bio')} value={this.state.fields.bio || ''}/>
      <span className='invalid-feedback'>{this.state.errors.bio}</span>
      <label htmlFor='business-website-edit'>Existing Website (Optional): </label>
      <input type='url' id='business-website-edit' name='lastName' onChange={this.handleInputChange} onBlur={this.handleBlur('lastName')} value={this.state.fields.lastName || ''}/>
      <span className='invalid-feedback'>{this.state.errors.lastName}</span>
    </React.Fragment>;
    const skills = [['visual-design', 'visualDesign'], ['ux-design', 'uxDesign'], ['front-end', 'frontEnd'], ['back-end', 'backEnd'], ['full-stack', 'fullStack'], ['wordpress', 'wordpress'], ['squarespace', 'squarespace'], ['wix', 'wix']];
    const volunteerProfile = <React.Fragment>
      <label htmlFor='volunteer-name-edit'>Name: (Required)</label>
      <input type='text' id='volunteer-name-edit' name='firstName' required size='70' onChange={this.handleInputChange} onBlur={this.handleBlur('firstName')} value={this.state.fields.firstName || ''}/>
      <span className='invalid-feedback'>{this.state.errors.firstName}</span>
      <label htmlFor='volunteer-email-edit'>Email: (Required)</label>
      <input type='text' id='volunteer-email-edit' name='email' required size='70' onChange={this.handleInputChange} onBlur={this.handleBlur('email')} value={this.state.fields.email || ''}/>
      <span className='invalid-feedback'>{this.state.errors.email}</span>
      <label htmlFor='volunteer-bio-edit'>Tell us about yourself: (Required)</label>
      <textarea rows='10' cols='70' id='volunteer-bio-edit' name='bio' required onChange={this.handleInputChange} onBlur={this.handleBlur('bio')} value={this.state.fields.bio || ''}/>
      <span className='invalid-feedback'>{this.state.errors.bio}</span>
      <fieldset className='skills-group'>
        <legend><h3>Technical Skills: (Optional)</h3></legend>
        <ul className='skills-checkbox'>
          {skills.map(([id, name], idx) => (
              <li key={idx}>
                <input type='checkbox' id={id} name={name} onChange={this.handleInputChange} />
                <label htmlFor={id}>{id.replace(/-/, ' ').toUpperCase()}</label>
              </li>
          ))}
        </ul>
      </fieldset>
    </React.Fragment>;
    const newProfileHeading = <React.Fragment><h2>Create Your Profile</h2>
      <h3>Are you a business owner or want to volunteer?</h3>
      <div className='user-type' onChange={this.handleInputChange}>
        <label htmlFor='business'>Business Owner</label>
        <input type='radio' id='business' name='type' onChange={this.handleInputChange} checked={this.state.fields.type === 'business'} value='business'></input>
        <label htmlFor='volunteer'>Volunteer</label>
        <input type='radio' id='volunteer' name='type' onChange={this.handleInputChange} checked={this.state.fields.type === 'volunteer'} value='volunteer'></input>
      </div></React.Fragment>;
    const { type } = this.state.fields;
    const { userExist } = this.state;
    const checkFormCompletion = this.checkFormCompletion();
    const { formSubmitted } = this.state;
    if (formSubmitted) {
      return <Redirect to={routes.DASHBOARD_FRONTEND}/>;
    }
    return (
        <React.Fragment>
          <section className='form flex'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-container flex'>
                { newProfileHeading }
                <div className='form-edit-fields flex'>
                  { type === 'business' ? businessProfile : null }
                  { type === 'volunteer' ? volunteerProfile : null}
                  <button type='submit' disabled={!checkFormCompletion} value='Submit'>Submit</button>
                </div>
              </div>
            </form>
          </section>
        </React.Fragment>
    );
  }
}
export default NewProfileForm;
