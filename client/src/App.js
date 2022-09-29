import { useEffect } from 'react';
import './App.css';
//API KEY: 51f209c2
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=51f209c2'
const movie1 = {
    Poster: "N/A",
    Title: "Spiderman",
    Type: "movie",
    Year: "1990",
    imdbID: "tt0100669"
}
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}}`);
        const data = await response.json()

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman')
    },[]);

    return (
        <div className = "app">
            <h1>MovieLand</h1>

            <div className = "search">
                <input placeholder = "Search for movies" value = "Superman" onChange = {() => {}}/>
                <img src = {SearchIcon} alt = "search" onClick = {() => {}}/>
            </div>
            <div className = "container">
                <div className = "movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>            
            </div>

        </div>

            
            );
}
export default App;
