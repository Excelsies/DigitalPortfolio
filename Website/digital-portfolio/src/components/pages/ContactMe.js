import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import './ContactMe.css'
import { Button } from '../Button'

export default function ContactMe() {
    return ( 
        <>
            <h1 className='contactme'>Contact Me!</h1>
            <section className='contact'>
                <p className='contact-heading'>
                    Reach out to Garet! There's no harm in trying!
                </p>
                <p className='contact-text'>
                    You can fill out this form
                </p>
                <div className='input-areas'>
                    <form>
                        <div>
                            <input type='name' name='name' placeholder='Your Email*' className='contact-input'/>
                        </div>
                        <div>
                            <input type='email' name='email' placeholder='Your Name*' className='contact-input'/>
                        </div>
                        <div>
                            <input type='subject' name='subject' placeholder='Subject*' className='contact-input'/>
                        </div>
                        <div>
                            <input type='body' name='body' placeholder='What would you like to say?' className='contact-input'/>
                        </div>
                        <div>
                            <Button buttonStyle='btn--large'>Send Message</Button>
                        </div>
                    </form>
                </div>
                <p className='contact-text'>
                    OR
                </p>
                <p className='contact-text 2'>
                 Directly email me at <a className='email-link' href='mailto:gme97531@gmail.com'> gme97531@gmail.com</a>
                </p>
            </section>
            <Footer />
        </>
        )
}