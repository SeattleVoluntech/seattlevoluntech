import React from 'react';
import PropTypes from 'prop-types';
import './landing-auth-form.scss';

class LandingAuthForm extends React.Component {
  constructor(props) {
    super(props);

    let { type } = this.props || null;
    this.type = type === 'login' ? 'login' : 'signup';

    this.MIN_NAME_LENGTH = 4;
    this.MIN_PASSWORD_LENGTH = 6;

    this.emptyState = {
      username: '',
      usernamePristine: true,
      usernameError: 'Username is required',
      password: '',
      passwordPristine: true,
      passwordError: 'A password is required',
      recoveryQuestion: '',
      recoveryAnswer: '',
      recoveryAnswerPristine: true,
      recoveryAnswerError: 'A question is required',
      isAdmin: false,
    };

    this.recoveryQuestionOptions = {
      pet: 'What is the name of your first pet?',
      car: 'What was the make of your first car?',
      street: 'What street did you grew up on?',
      sports: 'What is your favorite sports team?',
      college: 'What class in college did you graduate with high honors?',
    };

    this.state = this.emptyState;
  }

  handleValidation = (name, value) => {
    if (this.type === 'signup') {
      switch (name) {
        case 'username':
          if (value.length < this.MIN_NAME_LENGTH) {
            return <span className="error">
              Your username must be a minimum of {this.MIN_NAME_LENGTH} characters
            </span>;
          }
          return null;
        case 'password':
          if (value.length < this.MIN_PASSWORD_LENGTH) {
            return <span className="error">
              Your password must be at least {this.MIN_PASSWORD_LENGTH} characters long
            </span>;
          }
          return null;
        default:
          return null;
      }
    } // else -- if login ... no need for this validation
    return null;
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
      [`${name}Pristine`]: false,
      [`${name}Error`]: this.handleValidation(name, value)
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let isAdmin = this.state.isAdmin;
    const {usernameError, passwordError, recoveryAnswerError} = this.state;

    // on a fresh DB, this allows the first user to be an Admin
    if (this.props.users.length === 0) {
      isAdmin = true;
    }

    if (this.type === 'login' || (!usernameError && !passwordError && !recoveryAnswerError)) {
      this.props.onComplete( { ...this.state, isAdmin: isAdmin });
      this.setState(this.emptyState);
    }

    this.setState({
      usernamePristine: false,
      passwordPristine: false,
      recoveryAnswerPristine: false,
    })
  };

  generateRecoveryQuestionOptions() {
    const recoveryQuestionOptions = Object.values(this.recoveryQuestionOptions);
    return recoveryQuestionOptions.map((option) => {
      return <option key={Math.ceil(Math.random() * 1000000)} value={option}>{option}</option>
    });
  }

  render() {
    const signupJSX =
        <div className='create-form signup'>
          <li>
            <label htmlFor='recoveryQuestion'>Choose a Question</label>
            <select
                name='recoveryQuestion'
                placeholder='recovery question'
                type='select'
                value={this.state.recoveryQuestion}
                onChange={this.handleChange}>
              { /* blank option needed to support state change... */ }
              <option value='blank'></option>
              { this.generateRecoveryQuestionOptions() }
            </select>
          </li>
          <li>
            <label htmlFor='recoveryAnswer'>Recovery Answer</label>
            <input
                name='recoveryAnswer'
                placeholder='recovery answer'
                type='text'
                value={this.state.recoveryAnswer}
                onChange={this.handleChange}
            />
          </li>
        </div>;
    return(
        <div className='create-form'>
          <form onSubmit={this.handleSubmit}>
            <li>
              <label htmlFor='username'>User Name</label>
              <input
                  name='username'
                  placeholder='enter a username'
                  type='text'
                  value={this.state.username}
                  onChange={this.handleChange}
              />
            </li>
            { this.state.usernamePristine ? undefined : <p className='validation'>{this.state.usernameError}</p> }
            { this.type !== 'login' ? signupJSX : undefined }
            { this.state.recoveryAnswerPristine ? undefined : <p className='validation'>{this.state.recoveryAnswerError}</p> }
            <li>
              <label htmlFor='password'>Password</label>
              <input
                  name='password'
                  placeholder='please enter a password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange}
              />
            </li>
            { this.state.passwordPristine ? undefined : <p className='validation'>{this.state.passwordError}</p> }
            <button type='submit'>{ this.type }</button>
          </form>
        </div>
    );
  }
}

LandingAuthForm.propTypes = {
  onComplete: PropTypes.func,
};

export default LandingAuthForm;
