import { FaImdb, FaPlay, FaRegPlayCircle } from "react-icons/fa";

function FilmItem({ datas }) {
    console.log(datas);
    
    return(
        <div className="filmItemBox">
            <div className="cont1">
                 <FaRegPlayCircle className="play"/>
                 <p>Watch Trailer</p>
            </div>
            <div className="cont2">
            <div className="left">
                <h1>Avatar 2</h1>
                <div className="cont">
                    <div>PG-18</div>
                    <p>3hr 10min</p>
                    <FaImdb className='icon' />
                    <p>8.5</p>
                    <p>2020</p>
                </div>
                <p>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.</p>
                <button><FaPlay /> Watch Now</button>
             </div>
             <div className="right">
                <h2>Distributions Countries ___</h2>
                <p>Trusted by the worlds leading THeatres</p>
                <div className="countryCont">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/800px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="" />
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEUAkj/YHgUAOaYAlzMAL6wAO67iGwA5SKjLAAAA90lEQVR4nO3QqQHAAAwAofTdf+T6nKqHEZgBAAAAAAAAAAAAAAAAAAAA+Olim5ttTjYn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+Wk5mGbl20ONiflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSc1AejotKN4FcXqgAAAABJRU5ErkJggg==" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png" alt="" />
                    <img src="https://cdn.britannica.com/62/5062-050-35FFA3BE/Flag-Mali.jpg" alt="" />
                    <img src="https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg" alt="" />
                    <img src="https://cdn.britannica.com/50/5050-050-27172FF8/Flag-Equatorial-Guinea.jpg" alt="" />
                </div>
             </div>
            </div>
        </div>
    )
}

export default FilmItem;