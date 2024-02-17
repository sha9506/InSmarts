import React from 'react'
import './Title.css'
import search from '../Navbar/assets/search.png';

const Title = () =>
{
    return( <div className='title' >
        <div className='title-head'>
           <div className='title-head-item'> Cut through the news noise in seconds</div>
        </div>
        <div className='title-search'>
            <div className='title-search-icon'>
                <img src={search}/>
            </div>
           <input className='title-search-input' 
                type='text'
                placeholder='What news would you like to read today'/>
        </div>
        <div className='title-content'>
                <div className='title-content-item'>Struggling to find and understand relevant news? InSmarts, powered by cutting-edge <br/> 
                language processing, curates and summarizes articles based on your specific needs. <br/>
                 Uncover key details on topics like IPL stats or upcoming budgets with ease. Dive deeper, <br/>
                 exploring intriguing connections like "Sports & Kohli" or "Music & Malik". Think of <br/>
                 InSmarts as your personal knowledge concierge, delivering personalized insights with <br/>
                 remarkable efficiency. Explore InSmarts today and reclaim your information edge.</div>
        </div>
        <div className='title-summary-button'>
             Search and Summarize
        </div>
    </div>)
}

export default Title