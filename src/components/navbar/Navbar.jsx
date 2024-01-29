import React from 'react';
import './Navbar.scss';
import {LinkedIn,GitHub} from '@mui/icons-material';
import {motion} from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} >Amna Waheed</motion.span>
            <div className="social">
            <a href="https://www.linkedin.com/in/amna-waheed-5a3872193/" target="_blank"><LinkedIn/></a>
            <a href="https://github.com/amnaWaheed" target="_blank"><GitHub/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar