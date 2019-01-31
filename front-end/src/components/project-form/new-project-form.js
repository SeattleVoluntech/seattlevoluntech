import React from 'react';

//styles
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

    if (touched['projectName'] && !fields['projectName']) {
      formValid = false;
      errors['projectName'] ='Please give your project a name.';
    }

    if (touched['projectDesc'] && !fields['projectDesc']) {
      formValid = false;
      errors['projectDesc'] ='Please tell us about your project.';
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
      <section className='form flex'>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className='form-container flex'>
            <h2>Create a new project</h2>
            <div className='form-edit-fields flex'>
              <label htmlFor='project-name'>Project Name: (Required)</label>
              <input type='text' id='project-name' name='projectName' required onChange={this.handleInputChange} onBlur={this.handleBlur('projectName')} value={this.props.projectName} />
              <span className='invalid-feedback'>{this.state.errors.projectName}</span>
              <label htmlFor='project-desc'>Project Description: (Required)</label>
              <textarea rows='10' id='project-desc' name='projectDesc' required onChange={this.handleInputChange} onBlur={this.handleBlur('projectDesc')} value={this.props.projectDesc}/>
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
