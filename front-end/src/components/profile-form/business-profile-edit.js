// packages
import React from 'react';
import { Redirect } from 'react-router-dom';

// styles
import './profile-form.scss';
/* TODO Add redux for conditional rendering */
class BusinessProfileEdit extends React.Component {
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

    if (touched['businessName'] && !fields['businessName']) {
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

    const businessProfile = <React.Fragment><label htmlFor='business-name-edit'>Business Name: (Required)</label>
      <input type='text' id='business-name-edit' name='businessName' required onChange={this.handleInputChange} onBlur={this.handleBlur('businessName')} value={this.state.fields.businessName || ''}/>
      <span className='invalid-feedback'>{this.state.errors.businessName}</span>
      <label htmlFor='business-email-edit'>Business Email: (Required)</label>
      <input type='email' id='business-email-edit' name='businessEmail' required onChange={this.handleInputChange} onBlur={this.handleBlur('businessEmail')} value={this.state.fields.businessEmail || ''}/>
      <span className='invalid-feedback'>{this.state.errors.businessEmail}</span>
      <label htmlFor='business-desc-edit'>Business Description: (Required)</label>
      <textarea rows='10' cols='70' id='business-desc-edit' name='businessDesc' required onChange={this.handleInputChange} onBlur={this.handleBlur('businessDesc')} value={this.state.fields.businessDesc || ''}/>
      <span className='invalid-feedback'>{this.state.errors.businessDesc}</span>
      <label htmlFor='business-website-edit'>Existing Website (Optional): </label>
      <input type='url' id='business-website-edit' name='businessSite' onChange={this.handleInputChange} onBlur={this.handleBlur('businessSite')} value={this.state.fields.businessSite || ''}/>
      <span className='invalid-feedback'>{this.state.errors.businessSite}</span>
      </React.Fragment>;

    const existingProfileHeading = <React.Fragment><h2>Edit Your Profile</h2></React.Fragment>;
    const { userType } = this.state;
    const { userExist } = this.props;
    console.log(this.props);
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={'/dashboard'}/>;
    }
    return (
        <React.Fragment>
          <section className='profile-form'>
            <form onSubmit={this.handleSubmit} className='form-container'>
              <div className='profile-container'>
                { existingProfileHeading }
                <div className='profile-edit-fields'>
                  { businessProfile }
                  <button type='submit' value='Submit'>Submit</button>
                </div>
              </div>
            </form>
          </section>
        </React.Fragment>
    );
  }
}

export default BusinessProfileEdit;
