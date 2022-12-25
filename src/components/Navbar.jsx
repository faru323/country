import React from 'react'
import './style.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const Navbar = () => {

    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (checked) => {
      setDarkMode(checked);
    };
  return (
    <div className='Navb'>
    <div className='NavbLeft'> <p id='navtitle'>Where in the world?</p></div>
    <div className='NavbRight'>
    <DarkModeSwitch id='darkMode'

    checked={isDarkMode}
    onChange={toggleDarkMode}
    size={40}
  />
    
    
    </div>
    
    </div>
  )
}

export default Navbar