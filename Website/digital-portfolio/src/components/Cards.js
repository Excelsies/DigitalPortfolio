import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of these topics!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG-wedding.jpg'
              text='Explore what it means to be Garet.'
              label='About Me'
              path='/DigitalPortfolio/about'
            />
            <CardItem
              src='images/img-Projects.jpg'
              text='Travel through my past to see the projects I have worked on!'
              label='Projects'
              path='/DigitalPortfolio/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-hobbies.jpg'
              text='Check out what Garet likes to do when he is not hard at work'
              label='Hobbies'
              path='/DigitalPortfolio/hobbies'
            />
            <CardItem
              src='images/img-work.jpg'
              text='Find out all about my work history!'
              label='Work History'
              path='/DigitalPortfolio/work-history'
            />
            <CardItem
              src='images/img-contact.jpg'
              text='Would not hurt to reach out to Garet!'
              label='Contact Me'
              path='/DigitalPortfolio/contact-me'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
