import React from 'react'
import { assets } from '../../assets/assets'
import {Link,useLocation} from 'react-router-dom'

function Navbar() {
  const location=useLocation()
  const isCoursesListPage=location.pathname.includes('/course-list')
  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCoursesListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <div>
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer"/>
        <div className="md:flex hidden items-center gap-5 text-gray-500">
          <div>
            <button>Become Educator</button>
            <Link to='/my-enrollments'>My Enrollments</Link>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
