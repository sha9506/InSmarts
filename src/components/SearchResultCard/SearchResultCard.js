import React from "react";
import './SearchResultCard.css';
import ticketR from '../../assets/ticketR.png';
import ticketL from '../../assets/ticketL.png';
import virat from '../../assets/virat.png';

const SearchResultCard=({item})=>
{
    return(  <div>
        <div className="search-image">
              <div className="image-left"><img src={ticketL}/> </div>
              <div className="search-box">
                  <div className="virat">
                      <img src={item.image} height={300}/>
                  </div>
                  <div className="virat-content">
                      
                      <div className="virat-content-info">{item.content}</div>
                      <div className="virat-content-read-more"><a href={item.link}>Read more</a></div>
                  </div>
              </div>
              <div className="image-right"><img src={ticketR}/> </div>
         </div>
        </div>
         )
}

export default SearchResultCard