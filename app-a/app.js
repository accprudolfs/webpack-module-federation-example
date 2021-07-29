import React, { lazy, Suspense } from 'react'

function Loading() {
  return 'loading...'
}

const Login = lazy(() => import('login/Login'))

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 font-semibold text-white bg-red-600 shadow-md">
        AWESOME APP 1
      </header>
      <main className="flex-grow flex justify-center items-center">
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      </main>
    </div>
  )
}