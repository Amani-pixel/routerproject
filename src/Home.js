import React from "react";
import Liste from './Liste';
import Add from './Add';
import Navigation from './Navigation';
function Home (movies){
    return(
         <>
        <div className='container'>
          <Navigation/>
          <Liste movies ={movies}/>
          </div>
          <Add />
          </>
       
    )
}
export default Home;
