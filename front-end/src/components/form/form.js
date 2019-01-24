import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './form.css';

//https://codeburst.io/how-to-use-html5-form-validations-with-react-4052eda9a1d4
//https://codeburst.io/leveraging-html5-form-validation-validation-ui-in-react-validate-forms-in-2-mins-2228024ff50d
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
    };
    this.validate = this.validate.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  validate() {
    const formLength = this.formEl.length;

    if (this.formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        const elem = this.formEl[i];
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback');

        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage;
          } else {
            errorLabel.textContent = '';
          }
        }
      }
      return false;
    } else {
      for (let i = 0; i < formLength; i++) {
        const elem = this.formEl[i];
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          errorLabel.textContent = '';
        }
      };
      return true;
    }
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.validate()) {
      this.props.submit();
    }
    this.setState({ isValidated: true });
  }

  render() {
    const props = [...this.props];
    let classNames = [];
    if (props.className) {
      classNames = [...props.className];
      delete props.className;
    }

    if (this.state.isValidated) {
      classNames.push('.was-validated');
    }

    return (
      <form ref={form => this.formEl = form} onSubmit={this.submitHandler} {...props} className={classNames} noValidate>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  submit: PropTypes.func.isRequired
};

export default Form;
