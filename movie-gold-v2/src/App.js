import logo from './logo.svg';
import './App.css';
import api from './api/apiConfig';
import { useEffect } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router';
import (Routes, Route) from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {

    try 
    {
      
      const response = await api.get('api/v1/movies');

      setMovies(response.data);
    
    } 
    catch (err) 
    {
      console.error(err);
    }
  
  
  }

  useEffect(() => {
    getMovies();
  }, []); 
    
    return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
