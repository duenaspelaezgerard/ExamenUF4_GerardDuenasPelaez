import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className="bg-primary">
      <div className="">         
        <ul className="d-flex nav justify-content-center">
          <li className="">
            <Link to="/registro" className="nav-link text-light font-weight-bold shadow-sm px-3 py-2">
              Registro
            </Link>
          </li>
          <li className="">
            <Link to="/login" className="nav-link text-light font-weight-bold shadow-sm px-3 py-2">
              Login
            </Link>
          </li>
          <li className="">
            <Link to="/panel" className="nav-link text-light font-weight-bold shadow-sm px-3 py-2">
              Panel
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}