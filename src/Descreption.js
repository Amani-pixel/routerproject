import React from "react";
import { Link, useParams} from 'react-router-dom';
export const Descreption= ( {movies} )=>{
    const params = useParams();
    const movie=movies.find((el)=> el.id ==params.id);
    return(
        <div>
            <img src={movie.posterUrl} alt={movie.name} />
        </div>
    )
    
     

}
export default Descreption;