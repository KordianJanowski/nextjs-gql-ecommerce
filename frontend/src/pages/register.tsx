import type { NextPage } from 'next'
import RegisterForm from '../components/register-form/register-form'
import Link from 'next/link'

const register: NextPage = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-gray-50">
      <div className="relative">
        <Link href="/">
          <a className="absolute mb-5 text-3xl font-semibold text-center -translate-x-1/2 -top-14 left-1/2">
            Shopping
          </a>
        </Link>
        <div className="py-16 px-10 md:px-16 border shadow rounded-xl w-96 md:w-[31rem] bg-white">
          <h1 className="w-1/2 pb-5 mx-auto mb-5 text-3xl text-center border-b">
            Register
          </h1>
          <RegisterForm />
          <Link href="/login">
            <a>Already have an account? <span className="font-semibold">Login</span></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default register
