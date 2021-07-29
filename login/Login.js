import React from 'react'

function Icon() {
  return (
    <div className="p-3 rounded-full bg-purple-600 shadow">
      <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24" height='32' width='32'>
        <g fill='none'>
          <path d='M0 0h24v24H0V0z'/>
          <path d='M0 0h24v24H0V0z' opacity='.87'/>
        </g>
        <path fill="white" d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'/>
      </svg>
    </div>
  )
}

export default function Login() {
  return (
    <div className="max-w-md px-12 py-8 bg-white shadow-lg rounded-lg">
      <form>
        <div className="flex justify-center items-center mb-8">
          <Icon />
        </div>
        <div className="relative w-full mb-3">
          <input type="email" name="email" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Email" style={{ transition: 'all 0.15s ease 0s;' }} />
          <small className="p-2 text-red-500">* Email</small>
        </div>
        <div className="relative w-full mb-3">
          <input type="password" name="password" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" style={{ transition: 'all 0.15s ease 0s;' }} />
          <small className="p-2 text-red-500">* Password</small>
        </div>
        <div class="text-center mt-6">
            <input type="submit" name="login" id="login" value="Login" className="p-3 rounded-lg bg-purple-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500" />
        </div>
      </form>
    </div>
  )
}