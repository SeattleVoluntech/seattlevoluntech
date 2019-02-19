// packages
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as routes from "../../routes";

// Redux actions
import { putProfileForm } from '../../actions/profile-edit-actions';

// styles
import './profile-form.scss';

class BusinessProfileEdit extends React.Component {
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
    this.validateForm = this.validateForm.bind(this);
  }

  componentWillUnmount() {
    this.setState({
      fields: {},
      errors: {},
      formSubmitted: null,
    })
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    }, this.validateForm);
  }

  handleInputChange(event) {
    let fields = this.state.fields;
    const { target } = event;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    fields[name] = value
    this.setState({
      fields,
    });
  }

  checkFormCompletion() {
      const { businessName, businessEmail, businessDesc, businessSite } = this.state.fields;
      if (businessName && businessEmail && businessDesc && businessSite) {
        return true
      }
      return false
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

    /*if (touched['businessSite'] && !fields['businessSite']) {
      formValid = false;
      errors['businessSite'] ='Please enter a valid url.';
    }*/

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
      await this.props.putProfileForm(data);
      this.setState({ formSubmitted: true });
    }
  }

  render() {
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
    const { type } = this.state.fields;
    const checkFormCompletion = this.checkFormCompletion();
    const { formSubmitted } = this.state;
    if (formSubmitted) {
      return <Redirect to={routes.DASHBOARD_FRONTEND}/>;
    }
    const { profileForm } = this.props.profileForm;
    return (
        <React.Fragment>
          <section className='form flex'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-container flex'>
                <h2>Edit Your Profile</h2>
                <div className='form-edit-fields flex'>
                  { businessProfile }
                  <button type='submit' disabled={!checkFormCompletion} value='Submit'>Submit</button>
                </div>
              </div>
            </form>
          </section>
        </React.Fragment>
    );
  }
}

BusinessProfileEdit.propTypes = {
  profileForm: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  putProfileForm: PropTypes.func,
};

const mapStateToProps = state => ({
  profileForm: state.profileForm,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    putProfileForm: () => dispatch(putProfileForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessProfileEdit);
