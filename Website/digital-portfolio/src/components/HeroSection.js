import React from 'react'
import '../App.css'
import { Button } from './Button'

import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/backgroundVideo.mp4" autoPlay loop muted />
            <h1>Garet Eyre</h1>
            <p>A website about me!</p>
            <div className="hero-btns">
                <Button className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                    buttonLink='/about'>
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
