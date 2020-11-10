import React from 'react'
import '../../App.css'
import './AboutMe.css'

export default function AboutMe() {
    return( 
    <ul className='about-container'>
    <img src='images/IMG-wedding.jpg' alt="Profile" className="about-image"/>
        <div className='about-content'>
            <h1 className='about-content-header'>About Me</h1>

            <p className = 'about-content-body intro'>
                In 6th grade I had general idea of what I wanted to have as a career. 
                After thinking about what I am good at and what I liked to do I had the idea that I wanted to be a 3D Animator, a Software Engineer, or a Computer Engineer.
                Throughout middle school and high school I got the chance to learn 3D animation, to program my own applications, and work directly with computer hardware.
                I quickly found that I thoroughly enjoyed working with code. While I did enjoy working with hardware, I realized I was not all that good at it and I get tired of animation very fast.
                So I happily focused on programming.
            </p>

            <p className='about-content-body work'>
                While taking classes for programming and doing my own projects I decided to try to keep the jobs I got as close to my career goal as I could at the time.
                Starting in customer service I worked my way to technical support where I now am attempting to move into development. 
                In my spare time I continue working on projects that keep me learning and working on code, improving where I can with projects I enjoy.
            </p>
            <p className='about-content-body projects'>
                I found with each and every project that I really don't care what it is I'm making as the challenge of making something out of code really held my interest. 
                Making things from a simple notepad-esque application to help with my work to procedurally generated mazes in a video game, through using C# or writing in JavaScript, it doesn't matter what I'm making or what I'm using
                With this I was able to learn a multitude of languages in multiple Integrated Development Environments.
                I have learned to transition from one IDE to another with little effort and from one language to another with little confusion.
            </p>
            <p className='about-content-body conclusion'>
                While I thoroughly enjoy working with code, I do get burnt out after vast amounts of time working on a project. 
                With this there a several other things I enjoy doing, albeit less productive. Going from creating art, playing videogames, or watching movies and tv shows.
                All in all, I have found that I am perfectly content being locked in a dark room with my computer, being fed on occasion.
            </p>
        </div>
    </ul>
    )
}