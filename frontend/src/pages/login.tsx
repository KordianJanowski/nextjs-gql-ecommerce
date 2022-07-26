import Link from 'next/link';
import React from 'react';
import LoginForm from '../components/login-form/login-form';

const login: React.FC = () => {
  return (
    <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-white'>
      <div className='relative'>
        <Link href="/">
          <a className='absolute mb-5 text-3xl font-semibold text-center -translate-x-1/2 -top-14 left-1/2'>Shopping</a>
        </Link>
        <div className='py-16 px-10 md:px-16 border shadow rounded-xl w-96 md:w-[31rem]'>
          <h1 className='w-1/2 pb-5 mx-auto mb-5 text-3xl text-center border-b'>Login</h1>
          <LoginForm />
          <Link href="/forgot-password">
            <a className='font-semibold'>Forgot password?</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default login;