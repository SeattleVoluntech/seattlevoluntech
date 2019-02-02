import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as routes from '../../routes';

//styles
import './new-project-form.scss';

class ProjectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { status: 'open' },
      errors: {},
      formSubmitted: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleBlur = (field) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    }, this.validateForm);
  }

  handleInputChange(e) {
    let { fields } = this.state;
    fields[e.target.name] = e.target.value;
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

    if (touched['businessDescription'] && !fields['businessDescription']) {
      formValid = false;
      errors['businessDescription'] ='Please tell us briefly about your business.';
    }

    if (touched['businessSite'] && !fields['businessSite']) {
      formValid = false;
      errors['businessSite'] ='Please enter a valid url.';
    }

    if (touched['projectName'] && !fields['projectName']) {
      formValid = false;
      errors['projectName'] ='Please give your project a name.';
    }

    if (touched['projectDescription'] && !fields['projectDescription']) {
      formValid = false;
      errors['projectDescription'] ='Please tell us about your project.';
    }

    this.setState({
        errors: errors
      });
    return formValid;

  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()){
      this.setState({ formIsValid: true })
    }
    if (this.state.formIsValid) {
      const data = JSON.stringify(this.state.fields);
      fetch('http://localhost:8080/projects', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: data,
      }).catch((error) => {
        console.log(error);
      });
      await this.setState({ formSubmitted: true });
    }
  }

  checkFormCompletion() {
      const { businessName, businessDescription, projectDescription, projectName } = this.state.fields;
      if (businessName && businessDescription && projectDescription && projectName) {
        return true
      }
      return false
  }

  render() {
    const checkFormCompletion = this.checkFormCompletion();
    const { formSubmitted } = this.state;
    if (formSubmitted) {
      return <Redirect to={routes.DASHBOARD_FRONTEND}/>;
    }
    return (
      <section className='form flex'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-container flex'>
            <h2>Create a new project</h2>
            <div className='form-edit-fields flex'>
              <label htmlFor='business-name-edit'>Business Name:</label>
              <input type='text' id='business-name-edit' name='businessName' required onChange={this.handleInputChange} onBlur={this.handleBlur('businessName')} value={this.state.fields.businessName || ''}/>
              <span className='invalid-feedback'>{this.state.errors.businessName}</span>
              <label htmlFor='business-desc-edit'>Business Description:</label>
              <textarea rows='10' id='business-desc-edit' name='businessDescription' required onChange={this.handleInputChange} onBlur={this.handleBlur('businessDescription')} value={this.state.fields.businessDescription || ''}/>
              <span className='invalid-feedback'>{this.state.errors.businessDescription}</span>
              <label htmlFor='business-website-edit'>Existing Website (Optional): </label>
              <input type='url' id='business-website-edit' name='businessSite' onChange={this.handleInputChange} onBlur={this.handleBlur('businessSite')} value={this.state.fields.businessSite || ''}/>
              <span className='invalid-feedback'>{this.state.errors.businessSite}</span>
              <label htmlFor='project-name'>Project Name:</label>
              <input type='text' id='project-name' name='projectName' required onChange={this.handleInputChange} onBlur={this.handleBlur('projectName')} value={this.state.fields.projectName || ''} />
              <span className='invalid-feedback'>{this.state.errors.projectName}</span>
              <label htmlFor='project-desc'>Project Description:</label>
              <textarea rows='10' id='project-desc' name='projectDescription' required onChange={this.handleInputChange} onBlur={this.handleBlur('projectDescription')} value={this.state.fields.projectDescription || ''}/>
              <span className='invalid-feedback'>{this.state.errors.projectDescription}</span>
              <button type='submit' disabled={!checkFormCompletion} value='Submit'>Submit</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default ProjectNew;
