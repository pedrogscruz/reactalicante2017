import React from 'react'
import { reduxForm, Field } from 'redux-form'
import showResults from './showResults'
import isValidEmail from 'sane-email-validation'
import provinces from '../data/provinces'
import {createRenderer} from './RenderField'
import renderInput from './RenderInput'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid Email'
  }
  if (!values.province) {
    errors.province = 'Required'
  }
  return errors
}

const RenderSelect = createRenderer((input, label, { children }) =>
  <select {...input}>
    {children}
  </select>
)

let DemoForm = ({ handleSubmit, submitting }) =>
  <form onSubmit={handleSubmit(showResults)}>
    <Field name="firstName" label="First Name" component={renderInput} />
    <Field name="lastName" label="Last Name" component={renderInput} />
    <Field name="email" label="Email" component={renderInput} />
    {/* <Field name="province" label="Province" component={RenderSelect}>
      <option />
      {provinces.map(province =>
        <option key={province} value={province}>
          {province}
        </option>
      )}
    </Field> */}
    <button type="submit" disabled={submitting}>
      Submit
    </button>
  </form>

DemoForm = reduxForm({
  form: 'demo',
  destroyOnUnmount: false,
  validate
})(DemoForm)
export default DemoForm;