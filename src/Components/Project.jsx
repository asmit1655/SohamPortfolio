import React from 'react'
import Card from './Card';
import { Card_details } from './CardDetails';
import wearables from '../Assets/1.png';
import diwali from "../Assets/Diwali E-cell.png";
import rath_yatra from "../Assets/Rath Yatra E-cell.png";
import techObrainz from "../Assets/TECH O BRAINZ POSTER FINAL.png";
import unity from "../Assets/Unity Day E-cell.png";
import fundingDen from "../Assets/What is Funding Den-1.png";
const Project = () => {
  return (
    <div className='project'>
        <h2 data-cursorpointer={true}>PROJECTS.</h2>
        <div className='detail'>
        {/* {Card_details.map((item) => (
            <Card key={item.id} data={item} />
        ))}; */}
        <Card url={wearables} title='Wearables' />
        <Card url={diwali} title='Diwali' />
        <Card url={rath_yatra} title='Rath Yatra' />
        <Card url={techObrainz} title='Tech O Brainz' />
        <Card url={unity} title='Unity Day' />
        <Card url={fundingDen} title='Funding Den' />
        </div>
    </div>
  )
}

export default Project;