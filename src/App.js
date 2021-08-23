
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import Liste from './Liste';
import Descreption from './Descreption';
import {useState}from 'react'
import Add from './Add';
import { Route } from 'react-router-dom';
import Home from './Home';

function App() {
  const [movies, setMovies] = useState([        {
    
  title: "Cruella",
    description: "The film is set in 1970s London about the story of Corla de Ville's earlier life and childhood before she transforms into the Evil Lady from the animated film 101 Dalmatians, where we will see the factors that led to this transformation.",
    posterUrl: "https://fr.web.img2.acsta.net/pictures/21/02/17/16/12/0290309.jpg",
    rate: "4",
    id:1
    
},
{
  title: "Fadherhood",
  description: "The events revolve in a dramatic setting, about a man who loses his wife one day after her birth, only to find himself forced to raise his daughter alone and discover the meaning and world of parenthood for a better future for the child",
  posterUrl: "https://img5.cdn.cinoche.com/images/232e2662367bdba050e380ad699b8808.jpg",
  rate: "2",
  id:2
},
{
  
  title: "LUCA",
  description: "In a framework of adventure and fantasy, an Italian boy meets a sea monster disguised as a human, and a strong friendship develops between them, which defies all circumstances on the charming Italian beaches.",
  posterUrl: "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
  rate: "5",
  id:3
   
}]);
const addF=(newMovies)=>{
  setMovies([...movies,newMovies])
}
  return(
   <div>

     <Route exact path='/' render={()=> <Home> movies={movies}</Home>}/>
     <Route  path='/movie/:id' render={()=> <Descreption> movies={movies}</Descreption>}/>
     <Route  path='*' ><h1>page not found</h1></Route>
   </div>
  )

}

export default App;
