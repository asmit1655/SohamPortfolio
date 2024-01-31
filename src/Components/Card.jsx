import React from 'react';
// import image from "../Assets/1.png";
import { motion } from "framer-motion";
const Card = ({url,title}) => {
    const imageOptions = {
        initial:{scale:0.1, opacity:0},
        whileInView:{scale:1, opacity:1},
        transition:{
          delay: 0.2,
        }
      }
    // const { url, title } =data;
  return (
    <motion.div style={{}}{...imageOptions} className='card'>
        <img data-cursorpointer={true} src={url} alt='card' />
        <div data-cursorpointer={true} className='caption'>{title}</div>
    </motion.div>
  )
}

export default Card;