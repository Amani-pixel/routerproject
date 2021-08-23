import React from "react";
import ReactStars from "react-rating-stars-component";

function Filtre (filtreText,filtreRate) {

    return (
        <div>
            <input onChange={(e)=>filtreText (e.target.value)}/>
            <ReactStars
    count={5}
   onChange={(newRating)=>filtreRate(newRating)}
    size={24}
    activeColor="#ffd700"
  />,
        </div>

    )
}
    export default Filtre