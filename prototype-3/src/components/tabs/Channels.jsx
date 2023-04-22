// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import streamData from "../../streamInfo.json";
import ChannelElements from "../ChannelElements";

function Channels(props){
    const seed = Math.floor(Math.random() * 7);
    let indices = [seed, (seed+4)%8, (seed+7)%8, (seed+2)%8,(seed+5)%8, (seed+3)%8, (seed+6)%8, (seed+1)%8];

    const category = props.category;
    const filtered = streamData.streams.filter((t => t.category===category));

    const items = filtered.map((stream) =>  
        <SwiperSlide>
            <ChannelElements name={stream.name} tag1={stream.tags[0]} tag2={stream.tags[1]} tag3={stream.tags[2]} views={stream.viewership} icon={stream.icon} category={stream.category}/>
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
                {items[indices[0]]}
                {items[indices[1]]}
                {items[indices[2]]}
                {items[indices[3]]}
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
                {items[indices[4]]}
                {items[indices[5]]}
                {items[indices[6]]}
                {items[indices[7]]}
            </Swiper>
        </div>
    );
}

export default Channels