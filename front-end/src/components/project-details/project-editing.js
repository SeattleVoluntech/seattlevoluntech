import React from 'react';

class ProjectEditing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: this.props.projectName,
      businessName: this.props.businessName,
      businessDesc: this.props.businessDesc,
      ProjectDesc: this.props.businessDesc,
    }
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" value={this.props.projectName} name="projectName" required onChange={e => this.handleChange(e)} />
        <input type="text" value={this.props.businessName} name="businessName" required onChange={e => this.handleChange(e)} />
        <textarea name="businessDesc" value={this.props.businessDesc} required onChange={e => this.handleChange(e)}></textarea>
        <textarea name="projectDesc" value={this.props.projectDesc} required onChange={e => this.handleChange(e)}></textarea>
        <button>Submit</button>
      </form>
    );
  }
}

export default ProjectEditing;
