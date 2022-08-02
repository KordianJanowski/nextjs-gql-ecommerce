import type { NextPage } from 'next'
import Link from 'next/link'
import RegisterForm from '../components/register-form/register-form'

const register: NextPage = () => {
  return (
    <div className="login-register-container">
      <div className="relative">
        <Link href="/">
          <a className="login-register-page-link">
            Shopping
          </a>
        </Link>
        <div className="login-register-box">
          <h1 className="login-register-title">
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
