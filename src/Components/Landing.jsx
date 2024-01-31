import React from 'react';
import Profile from "../Assets/SD_POTRAIT1-removebg-preview.png";
import { motion } from "framer-motion";
const Landing = () => {
    const headingOptions = {
        initial:{y:"-100%", opacity:0},
        whileInView:{y:0, opacity:1}
      };
      const textOptions = {
        ...headingOptions,
        transition:{
          delay: 0.3,
        }
      }
      const imageOptions = {
        initial:{scale:0.1, opacity:0},
        whileInView:{scale:1, opacity:1},
        transition:{
          delay: 0.3,
        }
      }
  return (
    <div className='profile'>
    <div className='heading'>
        <motion.h3 data-cursorpointer={true} style= {{}}{...headingOptions}>Soham Dhal</motion.h3>
        <motion.p data-cursorpointer={true} style={{}}{...textOptions}>A Graphic Desginer based in Odisha.</motion.p>
    </div>
    <div className='image'>
    <motion.img data-cursorpointer={true} style={{}}{...imageOptions} src={Profile} alt='profile' />
    </div>
    </div>
  )
}

export default Landing;