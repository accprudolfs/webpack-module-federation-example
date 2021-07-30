import React, { lazy, useState, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './Login'

function Loading() {
  return 'loading...'
}

const About = lazy(() => import('./About'))

export default function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="flex flex-col h-screen">
      <Router>
        <header onClick={() => setCount(count + 1)} className="p-4 font-semibold text-white bg-red-600 shadow-md">
          {`AWESOME APP ${count}`}
        </header>
        <main className="flex-grow flex justify-center items-center">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/about">
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            </Route>
          </Switch>
        </main>
        <footer className="p-4 font-semibold text-white bg-red-600 shadow-md">
          <Link to="/about">ABOUT AWESOME APP</Link>
        </footer>
      </Router>
    </div>
  )
}