import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className="bg-success">
      <div className="">         
        <ul className="d-flex nav">
          <li className="">
            <Link to="/home" className="nav-link text-light font-weight-bold shadow-sm px-3 py-2">
              Home
            </Link>
          </li>
          <li className="">
            <Link to="/juego" className="nav-link text-light font-weight-bold shadow-sm px-3 py-2">
              Pokemon Memory
            </Link>
          </li>
          <li className="">
            <Link to="/ranking" className="nav-link text-light font-weight-bold shadow-sm px-3 py-2">
              Ranking
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}


