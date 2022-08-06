import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from "../assets/png/tempLogo.png"

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 max-w-screen-xl mx-auto">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Logo} alt="tasky-tasky Logo" height="40px" width={200}/>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          aria-expanded={navOpen}
          onClick={() => {
            setNavOpen((prev) => !prev)
          }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:max-h-fit lg:flex lg:items-center lg:justify-end lg:w-auto transition-all overflow-hidden ${
          !navOpen ? 'max-h-0' : ''
        }`}
      >
        <div className="text-sm ">
          <Link
            to="/about-us"
            className="w-fit block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-10 ease-in transition"
          >
            Who We Are
          </Link>
          <Link
            to="/sign-in"
            className="w-fit block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-10 ease-in transition"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="w-fit block mt-4 lg:inline-block lg:mt-0 text-primaryColor hover:bg-gray-200 bg-white py-2 px-3 rounded-3xl transition ease-in"
          >
            Join as a Freelancer
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
