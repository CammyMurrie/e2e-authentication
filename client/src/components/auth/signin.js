import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

import InputField from '../inputField/input_field';

class Signin extends Component {

  handleFormSubmit({email, password}) {
    this.props.signinUser({email, password});
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops! {this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  render() {
    const {handleSubmit, fields: {email, password}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <InputField label='Email:' field={email} />
        <InputField label='Password:' field={password} />
        {this.renderAlert()}
        <button action='submit' className='btn btn-primary'>Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error};
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
