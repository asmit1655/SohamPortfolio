import React from 'react';
import { Experience_details } from './ExperienceDetails';
const Experience = () => {
  return (
    <div className='experience'>
        <h2 data-cursorpointer={true}>WORK EXPERIENCE.</h2>
        <div className='experience_details'>
            {Experience_details.map((item) => (
                <div className='box'>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                    <hr></hr>
                </div>
            ))}
        </div>    
    </div>
  )
}

export default Experience;