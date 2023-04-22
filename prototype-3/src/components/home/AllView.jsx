// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// import required modules
import VideoElements from "../VideoElements";
import streamData from "../../streamInfo.json";

function AllView(AllView){
    const items = streamData.streams.map((stream) =>  
        <SwiperSlide>
            <VideoElements name={stream.title} tag1={stream.tags[0]} tag2={stream.tags[1]} tag3={stream.tags[2]} views={stream.viewership} icon={stream.icon} thumbnail={stream.thumbnail} category={stream.category}/>
        </SwiperSlide>
    )

    return (
        <div>
            <Swiper 
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}className="mySwiper">
                {items[0]}
                {items[1]}
                {items[2]}
                {items[3]}
            </Swiper>
            <Swiper 
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}className="mySwiper">
                {items[4]}
                {items[5]}
                {items[6]}
                {items[7]}
            </Swiper>
        </div>
    );
}

export default AllView