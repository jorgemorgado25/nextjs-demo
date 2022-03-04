import React from 'react'
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export default function Navbar() {
  return (
    <nav className={ styles.menuContainer }>
        { menuItems.map( ({ text, href }) => 
          <ActiveLink text={ text } href={ href } key={ href } /> 
        ) }
    </nav>
  )
}
