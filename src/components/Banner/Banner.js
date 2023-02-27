import React, { useEffect,useState } from 'react'
import {API_KEY, imageUrl} from "../../constants/constant"
import "./Banner.css"
import axios from '../../axios'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
      axios.get(`discover/movie?api_key=${API_KEY}&with_genres=35`).then((response)=>{
console.log(response.data.results[0]);
setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
      })
    }, [])
    
  return (
    <div  style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
     className='banner'>
        <div className='content'>
        <h1 className='title'>{movie?movie.title:""}</h1>
        <div className='banner-button'>
          <button className='button'>play</button>
          <button className='button'>my play</button>
        </div>
        <h1 className='discription'>{movie?movie.overview:""}</h1>
        <div className="fade_bottom"></div>
      </div>
    </div>
  )
}

export default Banner