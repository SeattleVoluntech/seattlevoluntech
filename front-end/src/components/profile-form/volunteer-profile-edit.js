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

class VolunteerProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      formSubmitted: null,
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
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    fields[name] = value
    this.setState({
      fields,
    });
  }

  validateForm() {
    let { fields, touched } = this.state;
    let errors = {};
    let formValid = true;

    if (touched['volunteerFirstName'] && !fields['volunteerFirstName']) {
      formValid = false;
      errors['volunteerFirstName'] ='Please tell us your first name.';
    }

    if (touched['volunteerLastName'] && !fields['volunteerLastName']) {
      formValid = false;
      errors['volunteerLastName'] ='Please tell us your last name.';
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

  checkFormCompletion() {
      const { volunteerFirstName, volunteerLastName, volunteerEmail, volunteerBio } = this.state.fields;
      if (volunteerFirstName && volunteerLastName && volunteerEmail && volunteerBio) {
        return true
      }
      return false
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
    const { location } = this.props;
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
            <form noValidate onSubmit={this.handleSubmit}>
              <div className='form-container flex'>
                <h2>Edit Your Profile</h2>
                <div className='form-edit-fields flex'>
                  { volunteerProfile }
                  <button type='submit' disabled={!checkFormCompletion} value='Submit'>Submit</button>
                </div>
              </div>
            </form>
          </section>
        </React.Fragment>
    );
  }
}

VolunteerProfileEdit.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerProfileEdit);
