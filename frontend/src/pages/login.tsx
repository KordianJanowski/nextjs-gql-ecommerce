import type { NextPage } from 'next'
import Link from 'next/link'
import { LoginForm } from 'components'

const login: NextPage = () => {
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
            Login
          </h1>
          <LoginForm />
          <Link href="/register">
            <a>Don&apos;t have an account? <span className="font-semibold">Register</span></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default login
