import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';


function App() {

const [movies, setMovies] = useState();

const getMovies = async () => {
  try {
    // To get popular movies
    const response = await api.get("/movie/popular");
    
    console.log(response.data);
    // TMDB API returns movie data in the "results" array
    setMovies(response.data.results);
  } 
  catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  getMovies();
}, []);


  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
