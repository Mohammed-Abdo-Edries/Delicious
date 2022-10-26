import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
// import { FaBars } from 'react-icons/fa'
// import { SidebarData } from './SidebarData'
// import { AiOutlineClose } from 'react-icons/ai'
// import { IconContext } from 'react-icons/lib'

function Navbar() {
  return (
    <BrowserRouter>
    <nav className="navbar">
    <div className='logo'>Delicious</div>
      <ul className="ul">
        <li><Link to='#carousel' smooth>order now</Link></li>
        <li><Link to='#testamoneals' smooth>Testamoneals</Link></li>
        <li><Link to='#location' smooth>our Location</Link></li>
        <li><Link to='#contact'className='last' smooth >Contact us</Link></li>
      </ul>
    </nav>
    </BrowserRouter>
  )
}

export default Navbar;