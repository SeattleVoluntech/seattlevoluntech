// packages
import React from 'react';
import { Redirect } from 'react-router-dom';

// styles
import './profile-form.scss';

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

  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps, prevState);
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    }, this.validateForm);
  }

  handleInputChange(event) {
    let { fields } = this.state;
    const { target } = event;
    const name = target.type === 'radio' ? 'userType' : target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    fields[name] = value
    this.setState({
      fields,
    });
  }

  checkFormCompletion() {
    if (this.state.fields.userType === 'business') {
      const { businessName, businessEmail, businessDesc } = this.state.fields;
      if (businessName && businessEmail && businessDesc) {
        return true
      }
      return false
    } else if (this.state.fields.userType === 'volunteer') {
        const { volunteerName, volunteerEmail, volunteerBio } = this.state.fields;
        if (volunteerName && volunteerEmail && volunteerBio) {
          return true
        }
        return false
      }
  }

  validateForm() {
    let { fields, touched } = this.state;
    let errors = {};
    let formValid = true;

    if (touched['businessName'] && !fields['businessName']) {
      formValid = false;
      errors['businessName'] ='Please enter the name of your business.';
    } else if (!touched['businessName']) {
      formValid = false;
      errors['businessName'] ='Please enter the name of your business.';
    }

    if (touched['businessEmail'] && !fields['businessEmail']) {
      formValid = false;
      errors['businessEmail'] ='Please enter your business email.';
    }

    if (typeof fields['businessEmail'] !== 'undefined') {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      console.log(pattern.test(fields['businessEmail']));
      if (!pattern.test(fields['businessEmail'])){
        formValid = false;
        errors['businessEmail'] ='Please enter a valid email address.';
      }
    }

    if (touched['businessDesc'] && !fields['businessDesc']) {
      formValid = false;
      errors['businessDesc'] ='Please tell us briefly about your business.';
    }

    if (touched['businessSite'] && !fields['businessSite']) {
      formValid = false;
      errors['businessSite'] ='Please enter a valid url.';
    }

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
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()){
      this.setState({ formIsValid: true })
    }
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
    this.setState({ formSubmitted: true });
  }

  render() {
    const { location } = this.props;

    const businessProfile = <React.Fragment><label htmlFor='business-name-edit'>Business Name: (Required)</label>
      <input type='text' id='business-name-edit' name='businessName' required size='70' onChange={this.handleInputChange} onBlur={this.handleBlur('businessName')} value={this.state.fields.businessName || ''}/>
      <span className='invalid-feedback'>{this.state.errors.businessName}</span>
      <label htmlFor='business-email-edit'>Business Email: (Required)</label>
      <input type='email' id='business-email-edit' name='businessEmail' required size='70' onChange={this.handleInputChange} onBlur={this.handleBlur('businessEmail')} value={this.state.fields.businessEmail || ''}/>
      <span className='invalid-feedback'>{this.state.errors.businessEmail}</span>
      <label htmlFor='business-desc-edit'>Business Description: (Required)</label>
      <textarea rows='10' cols='70' id='business-desc-edit' name='businessDesc' required onChange={this.handleInputChange} onBlur={this.handleBlur('businessDesc')} value={this.state.fields.businessDesc || ''}/>
      <span className='invalid-feedback'>{this.state.errors.businessDesc}</span>
      <label htmlFor='business-website-edit'>Existing Website (Optional): </label>
      <input type='url' id='business-website-edit' name='businessSite' onChange={this.handleInputChange} onBlur={this.handleBlur('businessSite')} value={this.state.fields.businessSite || ''}/>
      <span className='invalid-feedback'>{this.state.errors.businessSite}</span>
      </React.Fragment>;

    const skills = [['visual-design', 'visualDesign'], ['ux-design', 'uxDesign'], ['front-end', 'frontEnd'], ['back-end', 'backEnd'], ['full-stack', 'fullStack'], ['wordpress', 'wordpress'], ['squarespace', 'squarespace'], ['wix', 'wix']];
    const volunteerProfile = <React.Fragment><label htmlFor='volunteer-name-edit'>Name: (Required)</label>
      <input type='text' id='volunteer-name-edit' name='volunteerName' required size='70' onChange={this.handleInputChange} onBlur={this.handleBlur('volunteerName')} value={this.state.fields.volunteerName || ''}/>
      <span className='invalid-feedback'>{this.state.errors.volunteerName}</span>
      <label htmlFor='volunteer-email-edit'>Email: (Required)</label>
      <input type='text' id='volunteer-email-edit' name='volunteerEmail' required size='70' onChange={this.handleInputChange} onBlur={this.handleBlur('volunteerEmail')} value={this.state.fields.volunteerEmail || ''}/>
      <span className='invalid-feedback'>{this.state.errors.volunteerEmail}</span>
      <label htmlFor='volunteer-bio-edit'>Tell us about yourself: (Required)</label>
      <textarea rows='10' cols='70' id='volunteer-bio-edit' name='volunteerBio' required onChange={this.handleInputChange} onBlur={this.handleBlur('volunteerBio')} value={this.state.fields.volunteerBio || ''}/>
      <span className='invalid-feedback'>{this.state.errors.volunteerBio}</span>
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
      <input type='radio' id='business' name='userType' onChange={this.handleInputChange} checked={this.state.fields.userType === 'business'} value='business'></input>
      <label htmlFor='volunteer'>Volunteer</label>
      <input type='radio' id='volunteer' name='userType' onChange={this.handleInputChange} checked={this.state.fields.userType === 'volunteer'} value='volunteer'></input>
      </div></React.Fragment>;

    const { userType } = this.state.fields;
    const { userExist } = this.state;
    console.log(this.state);
    const checkFormCompletion = this.checkFormCompletion();
    const { formSubmitted } = this.state;
    if (formSubmitted) {
      return <Link to={'/dashboard'}/>;
    }
    return (
        <React.Fragment>
          <section className='form flex'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-container flex'>
                { newProfileHeading }
                <div className='form-edit-fields flex'>
                  { userType === 'business' ? businessProfile : null }
                  { userType === 'volunteer' ? volunteerProfile : null}
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
