import React ,{ useEffect,useState } from 'react'
import "./RowPost.css"
import Youtube from "react-youtube"
import axios from "../../axios"
import {imageUrl,API_KEY} from "../../constants/constant"

function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
    axios.get(props.url).then((response)=>{
        console.log(response.data);
        setMovies(response.data.results)
    })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    };

    const handleMovie=(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
         if(response.data.results.length!=0){
            setUrlId(response.data.results[0])
         }else{
            console.log("No trailer");
         }
        })
    }
    
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
         {movies.map((movie)=>
             <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+movie.backdrop_path}`}  alt="posters" />
         )}
           
        </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost