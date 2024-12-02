import { FaImdb } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import { img_url } from "../lib";
import { NavLink } from "react-router";




export default function Slider({ data }) {
  return (
             <div className="contein" style={{backgroundImage:`url(${img_url + data.backdrop_path})`}}>
             <div className="left">
                <h1>{data.title}</h1>
                <div className="cont">
                    <div>PG-18</div>
                    <p>3hr 10min</p>
                    <FaImdb className='icon' />
                    <p>{data.vote_average}</p>
                    <p>{data.release_date}</p>
                </div>
                <p>{data.overview}</p>
                <button><FaPlay /> Watch Now</button>
             </div>
             <div className="right">
                <div className="img" style={{backgroundImage:`url(${img_url + data.poster_path})`}}>
                   <NavLink to="/filmItem" className="filmItem"><FaRegPlayCircle className="icon2" /></NavLink>
                </div>
             </div>
             </div>
    
  );
}
