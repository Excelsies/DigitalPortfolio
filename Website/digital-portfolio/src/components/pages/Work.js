import React from 'react'
import '../../App.css'
import './Work.css'

export default function Work() {
    return ( 
        <div className='Work' style={{
            backgroundImage:'url(./images/img-backgroundW.jpg)', 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
            <section className="work-content">

                <h1 className='work-content-header'>Work History</h1>

                <div className='work-content-job'>
                    <h2 className='work-content-location'>
                        Solera AutoPoint | South Jordan, UT | January 2017 - Present</h2>
                    <p className='work-content-description'>
                        L1 Application Support Team Lead
                        <li>Provide phone, email, and chat support regarding the company's applications</li>
                        <li>Use SQL to pull and sometimes change data</li>
                        <li>Check each and every application to make sure they are function properly every morning</li>
                        <li>Case each phone call, email, and chat in SalesForce and escalate any issues that I cannot resolve via JIRA cases</li>
                        <li>Provide all communication between the Helpdesk and any other department</li>
                    </p>
                </div>
                <div className='work-content-job'>
                    <h2 className='work-content-location'>
                        Unisys | Salt Lake City, UT | December 2015 - January 2017</h2>
                    <p className='work-content-description'>
                        L1 Technical Support
                        <li>Provide over the phone technical and administrator support to the financial company Ameriprise</li>
                        <li>Case each contact via ServiceNow and escalate the ServiceNow tickets that could not be resolved over the phone to the respective team</li>
                    </p>
                </div>
                <div className='work-content-job'>
                    <h2 className='work-content-location'>
                        Autoliv | Brigham City, UT | September 2015 - January 2016</h2>
                    <p className='work-content-description'>
                        Production Associate
                        <li>Manning machines in an assembly line putting together explosives to be used in airbags</li>
                        <li>Monitor each machine used to ensure each piece is properly placed and welded</li>
                        <li>Ensure each piece is free of defects in each step of the process</li>
                        <li>Shut down ANY machine that is resulting in defects on the explosive for repair</li>
                    </p>
                </div>
                <div className='work-content-job'>
                    <h2 className='work-content-location'>
                        Staples | West Valley, UT | May 2015 - August 2015</h2>
                    <p className='work-content-description'>
                        Copy/Print Associate
                        <li>Manage registers when needed</li>
                        <li>Make customers prints appear the best we can for their specifications</li>
                        <li>Print, laminate, cut everything from business cards to large storefront banners</li>
                        <li>Ship packages via UPS</li>
                        <li>Send and recieve faxes</li>
                        <li>Copy images and send them to customers or print the copies</li>
                    </p>
                </div>
                <div className='work-content-job'>
                    <h2 className='work-content-location'>
                        Game Pedler | West Valley, UT | October 2014 - August 2015</h2>
                    <p className='work-content-description'>
                        Sales Associate
                        <li>Man the register for all their transactions</li>
                        <li>Keep the store clean, the counters wiped down, and the products displayed in a pleasing fassion</li>
                        <li>Interact with the customers with idle conversation, recommendations, and answering questions</li>
                        <li>Try to sale as much product as the customer is willing to get</li>
                    </p>
                </div>
                <div className='work-content-job'>
                    <h2 className='work-content-location'>
                        Seven Peaks Waterpark | Salt Lake City, UT | May 2014 - September 2014</h2>
                    <p className='work-content-description'>
                        Guest Interactions Employee
                        <li>Work the ticket both upselling packages and working the register</li>
                        <li>Manage the gift shop, manning the register while keeping the shack clean, organized, and stocked</li>
                        <li>Fill the inner tubes and rent them to the customers</li>
                        <li>Help customers in the office with their issues, coupons, or their season passes</li>
                    </p>
                </div>

                <div className='work-resumeBtn'>
                    <a href="https://drive.google.com/file/d/1QtxgxXmfakw4vuybPyCOCHfYa5Jl9JxL/view?usp=sharing" 
                        target="new" className="work-btn">
                        Check Out My Resume!
                    </a>
                </div>

            </section>
        </div>
        )
}