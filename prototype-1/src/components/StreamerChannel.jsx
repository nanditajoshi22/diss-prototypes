import streamerInfo from "../streamerInfo.json"
import { AiOutlineFieldTime, AiFillTrophy, AiFillFire } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// import required modules
import { Navigation, Scrollbar, A11y } from "swiper";
import VideoElements from "./VideoElements";
import ChannelElements from "./ChannelElements";
import background from "../images/background.jpg";

function StreamerChannel () {

    return (
        <div>
            <div class="py-20 ml-32 text-white">
                <div class="">
                    <div class="flex w-full h-1/3 border-2 bg-pink-900 p-12">
                        <div class="my-auto w-24 h-24">
                            <img class="w-24 h-24 rounded-xl border border-2" src={background}/>
                        </div>
                        <div class="my-auto w-3/4 h-48 border-2 bg-gray-400 rounded ml-12">
                            <div class="p-10">
                                <div>{streamerInfo.name}</div>
                                <div>{streamerInfo.followers} followers</div>
                                <div>{streamerInfo.description}</div>
                            </div>
                        </div>
                        <div class="my-12 border-2 p-1 bg-gray-400 rounded ml-12 text-3xl h-24 w-52">
                            <div class="flex flex-col">
                                <div class="flex flex-row">
                                    <AiFillTrophy/> 
                                    <div class="mt-1 text-sm">{streamerInfo.achievements[0]}</div>
                                </div>
                                <div class="flex flex-row">
                                    <AiFillFire/> 
                                    <div class="mt-1 text-sm">{streamerInfo.achievements[1]}</div>
                                </div>
                                <div class="flex flex-row">
                                    <AiOutlineFieldTime/> 
                                    <div class="mt-1 text-sm">{streamerInfo.achievements[2]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ml-4 px-12 py-6">
                        <div class="w-full h-80">
                        <div class="font-bold text-lg">
                            Previous Streams
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
                                    loop={false}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}className="mySwiper">
                                        <SwiperSlide>
                                            <VideoElements name="The Last of Us" tag1="Subathon" tag2="Single Player" tag3="Horror" views="5k" category="Gaming" thumbnail={1} icon={6}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <VideoElements name="Review Time" tag1="Review" tag2="Iron Man" tag3="Marvel" views="500" category="Movies & Shows" thumbnail={1} icon={6}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <VideoElements name="Ranking Time" tag1="Ranking" tag2="A24" tag3="Opinions Welcome" views="25" category="Movies & Shows" thumbnail={0} icon={6}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <VideoElements name="Games w/ Tim" tag1="Multi-Player" tag2="Valorant" tag3="FPS" views="1.2k" category="Gaming" thumbnail={0} icon={6}/>
                                        </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div class="ml-4 px-12 py-6">
                        <div class="flex flex-row gap-5">
                            <div class="flex w-1/3 h-64 border-2 rounded bg-gray-400">
                                <div class="flex flex-col">
                                    <div class="p-2 font-bold text-lg">Streamer Tags</div>
                                    <div class="mt-5 ml-5 flex flex-col gap-5 text-center">
                                        <div class="py-2 px-10 border rounded bg-gray-800">
                                            {streamerInfo.streamerTags[0]}
                                        </div>
                                        <div class="py-2 px-10 border rounded bg-gray-800">
                                            {streamerInfo.streamerTags[1]}
                                        </div>
                                        <div class="py-2 px-10 border rounded bg-gray-800">
                                            {streamerInfo.streamerTags[2]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-1/3 h-64 border-2 rounded bg-gray-400">
                                <div class="flex flex-col">
                                    <div class="p-2 font-bold text-lg">Viewer Tags</div>
                                    <div class="mt-5 ml-5 flex flex-col gap-5 text-center">
                                        <div class="py-2 px-10 border rounded bg-gray-800">
                                            {streamerInfo.viewerTags[0]}
                                        </div>
                                        <div class="py-2 px-10 border rounded bg-gray-800">
                                            {streamerInfo.viewerTags[1]}
                                        </div>
                                        <div class="py-2 px-10 border rounded bg-gray-800">
                                            {streamerInfo.viewerTags[2]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-1/3 h-64 border-2 rounded bg-gray-400">
                                <div class="flex flex-col">
                                    <div class="p-2 font-bold text-lg">Recent Categories</div>
                                    <div class="mt-5 ml-5 flex flex-col gap-5 text-center">
                                        <div class="py-2 px-10 border rounded bg-gray-800">
                                            {streamerInfo.categories[0]}
                                        </div>
                                        <div class="py-2 px-10 border rounded bg-gray-800">
                                            {streamerInfo.categories[1]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ml-4 px-12 py-6">
                        <div class="w-full h-72">
                            <div class="font-bold text-lg">
                                Recent Collaborations
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
                                    loop={false}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}className="mySwiper">
                                        <SwiperSlide>
                                            <ChannelElements name="StreamerA" tag1="Multi-player" tag2="FPS" tag3="Overwatch" views="12k"/>
                                        </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div class="ml-4 px-12 py-6">
                        <div class="w-full h-72">
                            <div class="font-bold text-lg">
                                Suggested Collaborations
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
                                    loop={false}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}className="mySwiper">
                                        <SwiperSlide>
                                            <ChannelElements name="StreamerY" tag1="Multi-player" tag2="FPS" tag3="Valorant" views="3.4k"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ChannelElements name="StreamerZ" tag1="Ranking" tag2="Reaction" tag3="Review" views="16k"/>
                                        </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StreamerChannel