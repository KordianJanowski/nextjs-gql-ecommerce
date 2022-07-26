import React from 'react';
import { Formik, Field, Form } from 'formik';
import useRegisterForm from './register-form.hook'

const RegisterForm: React.FC = () => {
  const { formInitialValues, handleSubmit } = useRegisterForm()

  return (
    <div>
      Register
      <Formik initialValues={formInitialValues} onSubmit={(values) => handleSubmit(values)}>
        <Form>
          <Field name="name" type="name" placeholder="Name" /> <br />
          <Field name="surname" type="surname" placeholder="Surname" /> <br />
          <Field name="email" type="email" placeholder="Email adress" /> <br />
          <Field name="password" type="password" placeholder="Password" /> <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterForm;