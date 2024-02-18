import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";
import Footer from "../components/Footer/Footer";
import './SearchResults.css';
import SearchResultCard from "../components/SearchResultCard/SearchResultCard";


const newsList = [
    {
        content: "Rohit Sharma's instructions to Mohammed Siraj captured on stump mic during 3rd Test prove Virat Kohli correct",
        image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRqprksER3ZS6M1gVUmWxpDe-TSdtVHethWwGvmOqalWJEFsHHVLVdNW94sHFPRuA3WlK8DqGhfPrw5B2U',
        link : 'https://www.hindustantimes.com/cricket/rohit-sharmas-instructions-to-mohammed-siraj-captured-on-stump-mic-during-3rd-test-prove-virat-kohli-correct-101708178701744.html'
    },
    {
        content: "Ravichandran Ashwin back, India spinner to rejoin team in Rajkot on Day 4 of 3rd Test against England",
        image : 'https://www.hindustantimes.com/ht-img/img/2024/02/18/550x309/PTI02-16-2024-000259A-0_1708231136507_1708231161893.jpg',
        link : 'https://www.hindustantimes.com/cricket/ravichandran-ashwin-back-india-spinner-returns-to-action-on-day-4-of-3rd-test-against-england-in-rajkot-101708229921963.html'
    }
]

const SearchResults = ({searchInput=''})=>
{
    const [newsContent, setNewsContent]= useState(newsList);

    useEffect(()=>{
        setNewsContent(newsList.filter(item=>{item.content.toLowerCase().includes(searchInput.toLowerCase())}))
    },[])

return (<div>
     <Navbar></Navbar>
       <div className="title">SEARCH RESULTS</div>
       <div className="search-title">
       {searchInput} in Recent News
       </div>

       {newsContent.map((item)=>{
            return(<SearchResultCard item={item}/>)
       })}

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

export default SearchResults
