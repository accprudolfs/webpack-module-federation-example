import React, { lazy, Suspense } from 'react'

function Loading() {
  return 'loading...'
}

const Login = lazy(() => import('login/Login'))

export default function LoginPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
  )
}