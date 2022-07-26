import React from 'react';
import { Formik, Field, Form } from 'formik';
import useLoginForm from './login-form.hook';

const LoginForm: React.FC = () => {
  const { formInitialValues, handleSubmit } = useLoginForm()

  return (
    <div>
      <Formik initialValues={formInitialValues} onSubmit={(values) => handleSubmit(values)}>
        <Form className='py-5'>
          <Field className="w-full p-5 bg-zinc-100 rounded-2xl" name="email" type="email" placeholder="E-mail" /> <br />
          <Field className="w-full p-5 mt-5 bg-zinc-100 rounded-2xl" name="password" type="password" placeholder="Password" /> <br />
          <button className="w-full p-5 mt-10 font-semibold text-white bg-black rounded-2xl" type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm;