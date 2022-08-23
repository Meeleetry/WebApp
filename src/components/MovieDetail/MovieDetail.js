import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMoviesShowsDetail,removeSelectedMovieShow, getSelectedMovieShow} from '../../features/movies/movieSlice';
import './MovieDetail.css';
const MovieDetail = () => { 
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieShow)
  console.log(data);
  useEffect(() =>{
    dispatch(fetchAsyncMoviesShowsDetail(imdbID));
    return() =>{
      dispatch(removeSelectedMovieShow());
    }

  },[dispatch,imdbID]);


  return (
    <div className='movie-section'>
      {Object.keys(data).length ===0 ?(
      (<div>...Loading</div>)
  ) : ( 
      <>  
      <div className='section-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating'>
          <span>IMDB Rating <i className='fa fa-star'></i>: {data.imdbRating}</span>
          <span>IMDB Vote <i className='fa fa-thumps-up'></i>: {data.imdbVotes}</span>
          <span>Runtime <i className='fa fa-file'></i>: {data.Runtime}</span>
          <span>Year<i className='fa fa-calender'></i>: {data.Year}</span>
       </div>
        <div className='movie-plot'>{data.Plot}</div>
        <div className='movie-info'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
        </div>
        <div>
          <span>Stars</span>
          <span>{data.Actor}</span>
        </div>
        <div>
          <span>Genres</span>
          <span>{data.Genre}</span>
        </div>
        <div>
          <span>Languages</span>
          <span>{data.Language}</span>
        </div>
        <div>
          <span>Awards</span>
          <span>{data.Awards}</span>
        </div>
      </div>
      <div className='section-right'>
        <img src={data.Poster} alt={data.Title}/>
      </div>
      </div>
      </>
      )};
    </div>
  );
  
};
export default MovieDetail;