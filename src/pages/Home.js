import React, { useState } from 'react'
import './Home.css'
import search from '../components/Navbar/assets/search.png';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SearchResults from './SearchResults';

const Home = () =>
{
    const [searchInput, setSearchInput]= useState('');
    const [searched,  setSearched] = useState(false);

    return(<div>
        {searched?(<SearchResults searchInput={searchInput}/>): ( <div>
        <Navbar></Navbar>
    <div className='home' >
        <div className='home-head'>
           <div className='home-head-item'> Cut through the news noise in seconds</div>
        </div>
        <div className='home-search'>
            <div className='home-search-icon'>
                <img src={search}/>
            </div>
           <input className='home-search-input' 
                type='text'
                placeholder='What news would you like to read today'
                value={searchInput}
                onChange={(event)=>{setSearchInput(event.target.value)}}/>
        </div>
        <div className='home-content'>
                <div className='home-content-item'>Struggling to find and understand relevant news? InSmarts, powered by cutting-edge <br/> 
                language processing, curates and summarizes articles based on your specific needs. <br/>
                 Uncover key details on topics like IPL stats or upcoming budgets with ease. Dive deeper, <br/>
                 exploring intriguing connections like "Sports & Kohli" or "Music & Malik". Think of <br/>
                 InSmarts as your personal knowledge concierge, delivering personalized insights with <br/>
                 remarkable efficiency. Explore InSmarts today and reclaim your information edge.</div>
        </div>
        <div className='home-summary-button' onClick={()=>{setSearched(true)}}>
            Search and Summarize
        </div>
    </div>
    <Footer></Footer>
    </div>)
        }
    </div>)
}

export default Home