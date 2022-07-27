import React from 'react'
import { Formik, Field, Form } from 'formik'
import useLoginForm from './login-form.hook'

const LoginForm: React.FC = () => {
  const { formInitialValues, handleSubmit } = useLoginForm()

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="login-register-form">
          <Field
            className="login-register-input"
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <Field
            className="login-register-input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="login-register-button">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm;