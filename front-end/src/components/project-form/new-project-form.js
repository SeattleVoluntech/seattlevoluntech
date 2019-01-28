import React from 'react';

import './new-project-form.scss';

class ProjectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleBlur = (field) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    }, this.validateForm);
  }

  handleChange(e) {
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

    if (touched['projectName'] && !fields['projectName']) {
      formValid = false;
      errors['projectName'] ='Please give your project a name.';
    } else if (!touched['projectName']) {
      formValid = false;
      errors['projectName'] ='Please give your project a name.';
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

    if (touched['projectDesc'] && !fields['projectDesc']) {
      formValid = false;
      errors['projectDesc'] ='Please tell us about your project.';
    }

    if (touched['existingSite'] && !fields['existingSite']) {
      formValid = false;
      errors['existingSite'] ='Please enter a valid url.';
    }

    this.setState({
        errors: errors
      });
    return formValid;

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleClick();
    ///////////////////////////////////////////////////////////////////////////
    // Make POST request here
    ///////////////////////////////////////////////////////////////////////////
  }

  render() {
    return (
      <section className='project-form flex'>
        <form className='form-container' onSubmit={e => this.handleSubmit(e)}>
          <div className='project-container flex'>
            <h2>Create a new project</h2>
            <div className='project-edit-fields flex'>
              <label htmlFor='project-name'>Project Name: </label>
              <input type='text' id='project-name' name='projectName' required onChange={e => this.handleChange(e)} value={this.props.projectName} />
              <span className='invalid-feedback'>{this.state.errors.projectName}</span>
              <label htmlFor='business-name'>Business Name: </label>
              <input type='text' id='business-name' name='businessName' required onChange={e => this.handleChange(e)} value={this.props.businessName}/>
              <span className='invalid-feedback'>{this.state.errors.businessName}</span>
              <label htmlFor='business-desc'>Business Description: </label>
              <textarea id='business-desc' name='businessDesc' required onChange={e => this.handleChange(e)} value={this.props.businessDesc}/>
              <span className='invalid-feedback'>{this.state.errors.businessDesc}</span>
              <label htmlFor='project-desc'>Project Description: </label>
              <textarea rows='10' id='project-desc' name='projectDesc' required onChange={e => this.handleChange(e)} value={this.props.projectDesc}/>
              <span className='invalid-feedback'>{this.state.errors.projectDesc}</span>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default ProjectNew;
