import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>All About Me</h2>
                        <Link to='/DigitalPortfolio/about'>About Me</Link>
                        <Link to='/DigitalPortfolio/projects'>Projects</Link>
                        <Link to='/DigitalPortfolio/work-history'>Work History</Link>
                        <Link to='/DigitalPortfolio/hobbies'>Hobbies</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/DigitalPortfolio/' className='social-logo'>
                            Garet Eyre
                        </Link>
                    </div>
                    <small className='website-rights'>© Copyright ©2020 All rights reserved</small>
                    <small className='website-credit'>This portfolio was made from scratch with ♥ by Garet Eyre</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                            to='//www.facebook.com/garet.eyre'
                            target='_blank'
                            aria-label='Facebook'>
                                <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                            to='//www.linkedin.com/in/garet-eyre-062a2870'
                            target='_blank'
                            aria-label='LinkedIn'>
                                <i className='fab fa-linkedin'></i>
                        </Link>
                        <Link className='social-icon-link github'
                            to='//github.com/Excelsies'
                            target='_blank'
                            aria-label='GitHub'>
                                <i className='fab fa-github'></i>
                        </Link>
                        <a className='social-icon-link email'
                            href='mailto:gme97531@gmail.com'
                            aria-label='Email'>
                                <i className='far fa-envelope'></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
