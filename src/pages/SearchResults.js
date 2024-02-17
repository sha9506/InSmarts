import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Title from "./Title";
import Footer from "../components/Footer/Footer";
import './SearchResults.css';
import ticket from '../assets/ticket.png';
import ticketR from '../assets/ticketR.png';
import ticketL from '../assets/ticketL.png';
import virat from '../assets/virat.png';

const Home = ()=>
{
    return (<div>
     <Navbar></Navbar>
       <div className="home-title">SEARCH RESULTS</div>
       <div className="search-title">
       Virat Kohli in Recent News
       </div>
       <div className="home-image">
            <div className="image-left"><img src={ticketL}/> </div>
            <div className="home-box">
                <div className="virat">
                    <img src={virat}/>
                </div>
                <div className="virat-content">
                    <div className="virat-content-info">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu adNorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="virat-content-read-more">Read more</div>
                </div>
            </div>
            <div className="image-right"><img src={ticketR}/> </div>
       </div>
       <div className="dive-item">
            <div className="dive-title">Dive Deeper</div>
            <div className="dive-content">
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac <br/>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac <br/>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac <br/>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
            </div>
        </div>
    <Footer></Footer>

</div>
    )
}

export default Home