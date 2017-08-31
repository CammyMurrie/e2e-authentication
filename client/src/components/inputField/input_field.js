import React, {Component} from 'react';

class InputField extends Component {
  render() {
    const {field} = this.props;
    return (
      <fieldset className='form-group'>
        <label>{this.props.label}</label>
        <input {...field} className='form-control'/>
        {field.touched && field.error && <div className='error'>{field.error}</div>}
      </fieldset>
    );
  }
}

export default InputField;
