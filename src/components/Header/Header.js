import React, { useState } from 'react'
import './Header.css';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import av1 from '../../images/av1.jpg';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {  
  const dispatch = useDispatch();  
  const [term, setTerm]=useState('');
  const sumitHandler = (e) =>{
    e.preventDefault();
    if(term==='') return alert('Please enter search term!')
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
    
  }
  return (
  <div className='header'>
        <div className='logo'> 
          <Link to='/'>CINEMATIC App</Link>
        </div> 
        <div className='search-bar'>
          <form onSubmit={sumitHandler}>
            <input type='text' value={term} placeholder='search movies/shows' onChange={(e)=> setTerm(e.target.value)}/>
            <button type='submit'><i className='fa fa-search'></i></button>
          </form>
        </div>
    <div className='user-image'>
       <img src={av1} alt='user'/>
    </div>
  </div>
  );
  
};

export default Header;