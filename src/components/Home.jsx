import NewFilms from "./NewFilms";
import PopularFilms from "./PopularFilms";
import SliderCont from "./SliderCont";


function Home({ datas }) {
    return(
        <>
           <SliderCont datas={datas}/>
           <PopularFilms/>
           <NewFilms/>
        </>
    )
}

export default Home