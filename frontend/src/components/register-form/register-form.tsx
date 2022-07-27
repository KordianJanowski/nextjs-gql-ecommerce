import React from 'react'
import { Formik, Field, Form } from 'formik'
import useRegisterForm from './register-form.hook'

const RegisterForm: React.FC = () => {
  const { formInitialValues, handleSubmit } = useRegisterForm()

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="login-register-form">
          <Field
            className="login-register-input"
            name="name"
            type="name"
            placeholder="Name"
          />
          <Field
            className="login-register-input"
            name="surname"
            type="surname"
            placeholder="Surname"
          />
          <Field
            className="login-register-input"
            name="email"
            type="email"
            placeholder="Email adress"
          />
          <Field
            className="login-register-input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="login-register-button">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterForm
