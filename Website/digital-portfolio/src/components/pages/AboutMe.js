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
                In 6th grade I had a general idea of what I wanted to have as a career. 
                After thinking about what I am good at and what I liked to do I figured that I wanted to be a 3D Animator, a Software Engineer, or a Computer Engineer.
                Throughout middle school and high school I got the chance to learn 3D animation, to program my own applications, and to work directly with computer hardware.
                I quickly found that I thoroughly enjoyed working with code. While I did enjoy working with hardware, I realized I was not all that good at it. I also noticed that I'd get tired of animation very fast.
                So I happily focused on programming.
            </p>

            <p className='about-content-body work'>
                While taking classes for programming and creating my own applications, I decided to try to keep the jobs I chose to work as close to my career goal as I could at the time.
                Starting in customer service I worked my way to technical support, where I now am attempting to move into development. 
                In my spare time I would continue to work on software that kept me learning and working on code, improving where I can with projects I enjoy.
            </p>
            <p className='about-content-body projects'>
                I have come to realize with each and every project that I really don't care what it is I'm making, as the challenge of creating something out of code really held my interest. 
                Designing things from a simple notepad-esque application to procedurally generated mazes in a video game, writing in C# or using JavaScript, it didn't matter what I was making or what I was using, I was engaged and entertained.
                With this I was able to learn a multitude of languages in multiple Integrated Development Environments.
                I have learned to transition from one IDE to another with little confusion and from one language to another with little effort.
            </p>
            <p className='about-content-body conclusion'>
                While I thoroughly enjoy working with code, I do get burnt out after vast amounts of time working on a project. 
                With this there a several other things I enjoy doing, albeit less productive. In these times I would tend to sketch out an eyball, play a Japanese role playing game, or watch a comedy with my wife.
                All in all, I have found that I am perfectly content being locked in a dark room with my computer, only being fed on occasion, left to work on another application.
            </p>
        </div>
    </ul>
    )
}