import React from 'react';
import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial : {
    x:-500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity:1,
    transition: {
      duration:1,
      staggerChildren: 0.1
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial : {
    x:0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration:20,
      repeat: Infinity,
      repeatType:"mirror"
    },
  }
}
 
const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className="textContainer" variants = {textVariants} initial ="initial" animate="animate" >
            <motion.h2 variants = {textVariants} >AMNA WAHEED</motion.h2>
            <motion.h1 variants = {textVariants} >Mern Stack Developer & UI Designer</motion.h1>
            <motion.div variants = {textVariants} className="buttons">
                <motion.button variants = {textVariants} >See the Latest Works</motion.button>
                <motion.button variants = {textVariants} >Contact Me</motion.button>
            </motion.div>
            <motion.img variants = {textVariants} animate = 'scrollButton' src= '/assets/scroll.png' alt= ""/>
        </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial = 'initial' animate="animate" className="slidingTextContainer">
          Writer Content Creater Influencer
        </motion.div>
        <div className="imageContainer">
            <img src= '/assets/hero.png' alt= ""/>
        </div>
    </div>
  )
}

export default Hero