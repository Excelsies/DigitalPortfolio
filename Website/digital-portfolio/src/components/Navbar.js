import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/DigitalPortfolio/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src='images/img-portrait.jpg' className="portrait__img" alt=''/>
                        <div className='navbar-logo-text'>Garet Eyre</div>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/DigitalPortfolio/' className='nav-links' onClick={closeMobileMenu}>
                                Home    
                            </Link>    
                        </li>    
                        <li className='nav-item'>
                            <Link to='/DigitalPortfolio/about' className='nav-links' onClick={closeMobileMenu}>
                                About Me    
                            </Link>   
                        </li> 
                        <li className='nav-item'>
                            <Link to='/DigitalPortfolio/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects    
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link to='/DigitalPortfolio/hobbies' className='nav-links' onClick={closeMobileMenu}>
                                Hobbies    
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link to='/DigitalPortfolio/work-history' className='nav-links' onClick={closeMobileMenu}>
                                Work History   
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link to='/DigitalPortfolio/contact-me' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact Me!    
                            </Link>    
                        </li>    
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact Me!</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
