import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 max-w-screen-xl mx-auto">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Tailwind CSS
        </span>
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
