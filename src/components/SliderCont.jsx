import { useEffect, useState } from "react";
import Slider from "./Slider";
import { api_url, img_url } from "../lib";
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';





export default function SliderCont({ datas, key }) {
    
    
    return(
        
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                datas ? datas.map((data)=>{
                    return (
                        <SwiperSlide className='swiper-slide'>
                            <Slider data={data} key={data.id}/>
                        </SwiperSlide>
                    )
                }) : ""
            }
    </Swiper>
        
    )
}
