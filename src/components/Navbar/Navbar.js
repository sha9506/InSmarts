import React from 'react';
import './Navbar.css';
import facebook from '../Navbar/assets/facebook.svg';
import google from '../Navbar/assets/google.svg';
import instagram from '../Navbar/assets/instagram.svg';
import pinterest from '../Navbar/assets/pinterest.svg';
import skype from '../Navbar/assets/skype.svg';


const Navbar = () =>
{
    return(<div className='navbar'>
        <div className='top-bar'>
            <div className='top-bar-date'>MON, FEB 19, 2023 |  11.05AM IST</div>
            <div className='top-bar-icons'>
                <div className='icon'><img src={facebook}/></div>
                <div className='icon'><img src={google}/></div>
                <div className='icon'><img src={instagram}/></div>
                <div className='icon'><img src={skype} /></div>
                <div className='icon'><img src={pinterest}/></div>
            </div>
            <div className='top-bar-button'>
                <div className='top-bar-button-item'>
                    <a href='/'>HOME</a>
                </div>
                <div className='top-bar-button-item'>
                    <a href='/history'>HISTORY</a>
                </div>
                <div className='top-bar-button-item'>SIGN UP</div>
            </div>
        </div>
        <div className='nav-title'>
            <div className='nav-title-insmart'>
                <div className='logo-insmart'></div>
                INSMARTS</div>
            <div className='nav-title-description'>Since 2024</div>
            <div className='nav-title-line'></div>
        </div>
        
    </div>
    )
}

export default Navbar