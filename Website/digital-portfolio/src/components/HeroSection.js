import React from 'react'
import '../App.css'
import { Button } from './Button'

import './HeroSection.css'

const Video = () => {
    const src = getVideoSrc(window.innerWidth);
    return(
        <video muted="true" src={src} autoPlay loop playsInline/>
    );
}

const getVideoSrc = width => {
    if(width >= 1080) return "/DigitalPortfolio/videos/backgroundVideo.mp4"
    if(width >= 720) return "/DigitalPortfolio/videos/backgroundVideoTablet.mp4"
    return "/DigitalPortfolio/videos/backgroundVideoMobile.mp4"
}

function HeroSection() {
    return (
        <div className='hero-container'>
            <Video />
            <h1>Garet Eyre</h1>
            <p>A website about me!</p>
            <div className="hero-btns">
                <Button className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                    buttonLink='/DigitalPortfolio/about'>
                        Who am I?
                </Button>
                <Button className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'>
                        Contact Me!
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
