import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Title from './Home'
import Footer from '../components/Footer/Footer'
import './History.css';
import search from '../components/Navbar/assets/search.png';

const History = ()=>
{
    return(<div>
    <Navbar></Navbar>
       <div className='history-title'>LOOK BACK AT WHAT YOU’VE READ</div>  
      <div className='search'>
      <div className='history-search'>
            <div className='history-search-icon'>
                <img src={search}/>
            </div>
           <input className='history-search-input' 
                type='text'
                placeholder='Search History'/>
        </div>
      </div>
       <div className="history-content">
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac <br/>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac <br/>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac <br/>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
            </div>
    <Footer></Footer>

</div>
    )
}

export default History