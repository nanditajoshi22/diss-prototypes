// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// import required modules
import { Navigation, Scrollbar, A11y } from "swiper";
import VideoElements from "./VideoElements";

import streamData from "../streamInfo.json";
import React, { useState, useEffect } from "react";

function TagCarousel(props){
    const type = props.type;
    const tag = props.tag;

    const filtered = streamData.streams.filter((t => {
        for (let i = 0; i < t.tags.length; i++) { 
            if(t.tags[i]==tag){
                return true;
            }
        }
    }));

    const items = filtered.map((stream) =>
        <SwiperSlide>
            <VideoElements name={stream.title} tag1={stream.tags[0]} tag2={stream.tags[1]} tag3={stream.tags[2]} views={stream.viewership} icon={stream.icon} thumbnail={stream.thumbnail} category={stream.category}/>
        </SwiperSlide>)

    

    return (
        <div class="mt-2">
            <div class="ml-4 font-bold text-lg">
                {type}
            </div>
            <Swiper modules={[Navigation, Scrollbar, A11y]}
            breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                2048: {
                    slidesPerView: 4,
                    spaceBetween: 40
                  }
            }}
            navigation
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}className="mySwiper">
                {items}
            </Swiper>
        </div>
    );
}

export default TagCarousel