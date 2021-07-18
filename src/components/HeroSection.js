import React from 'react'
import './HeroSection.css'
import '../App.css'
import video from "./911.mp4"

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop type="video/mp4"/>
           <p>
             Thinking...
           </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=G2rel4zugeE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Since96
        </a>
        </div>
    )
}
