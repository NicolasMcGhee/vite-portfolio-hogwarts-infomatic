import React from 'react'
import './index.css'
import Hogwarts from '../../assets/Icons/Hogwarts_Icon.png'

export default function Navbar() {
  return (
    <nav className='nav-container nav-flex'>
        <div>
            <img src={Hogwarts} alt="Hogwarts Coat Of Arms" width={125}/>
        </div>
        <div>
            <ul className='nav-infoList'>
                <li>Home</li>
                <li>Staff</li>
                <li>Students</li>
                <li>Enroll</li>
            </ul>
        </div>
    </nav>
  )
}
