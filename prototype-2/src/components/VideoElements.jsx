import { TbCircleFilled } from 'react-icons/tb';
import icon1 from "../images/icons/icon1.jpg";
import icon2 from "../images/icons/icon2.jpg";
import icon3 from "../images/icons/icon3.jpg";
import icon4 from "../images/icons/icon4.jpg";
import icon5 from "../images/icons/icon5.jpg";
import icon6 from "../images/icons/icon6.jpg";

import trending1 from "../images/thumbnails/trending1.jpg";
import trending2 from "../images/thumbnails/trending2.jpg";
import gaming1 from "../images/thumbnails/gaming1.jpg";
import gaming2 from "../images/thumbnails/gaming2.jpg";
import fashion1 from "../images/thumbnails/fashion1.jpg";
import fashion2 from "../images/thumbnails/fashion2.jpg";
import news1 from "../images/thumbnails/news1.jpg";
import news2 from "../images/thumbnails/news2.jpg";
import movies1 from "../images/thumbnails/movies1.jpg";
import movies2 from "../images/thumbnails/movies2.jpg";
import learning1 from "../images/thumbnails/learning1.jpg";
import learning2 from "../images/thumbnails/learning2.jpg";
import sports1 from "../images/thumbnails/sports1.jpg";
import sports2 from "../images/thumbnails/sports2.jpg";
import music1 from "../images/thumbnails/music1.jpg";
import music2 from "../images/thumbnails/music2.jpg";

function VideoElements(props){
    const name = props.name;
    const tag1 = props.tag1;
    const tag2 = props.tag2;
    const tag3 = props.tag3;
    const views = props.views;
    const icon = props.icon;
    const thumbnail = props.thumbnail;
    const category = props.category;

    const categories = ["Trending", "Gaming", "Fashion & Beauty", "News", "Movies & Shows", "Learning", "Sports", "Music"];

    const offset = thumbnail + (categories.indexOf(category)*2);

    const icons = [icon1,icon2,icon3,icon4,icon5,icon6];
    const thumbnails = [trending1,trending2,gaming1,gaming2,fashion1,fashion2,news1,news2,movies1,movies2,learning1,learning2,sports1,sports2,music1,music2];

    return (
        <div>
            <div class="flex flex-row justify-center items-center overflow-visible px-12 py-6">
                <div className="container bg-gray-400 h-52 w-90 rounded-xl shadow border border-2">
                    <div class="flex flex-col justify-left content-left items-left">
                        <div class="text-4xl ml-25 h-36">
                            <img class="w-80 h-36 rounded-xl border border-white" src={thumbnails[offset]}/>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex flex-row px-2">
                                <div class="text-l">
                                    <div class="mt-0.5">
                                        <img class="w-6 h-6 rounded-xl border border-white" src={icons[icon]}/>
                                    </div>
                                </div>
                                <div class="text-l ml-2">
                                    <div class="">
                                        {name}
                                    </div>
                                </div>
                                <div class="ml-2 text-red-600">
                                    <div class="">
                                        <div class="flex flex-row">
                                            <TbCircleFilled class="text-xs mt-1.5"/> 
                                            <div class="px-0.5">{views}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row px-2 py-1">
                                <div class="text-sm">
                                    <div class="border-2 w-fit p-0.5 rounded">{tag1}</div>
                                </div>
                                <div class="text-sm px-3">
                                    <div class="border-2 w-fit p-0.5 rounded">{tag2}</div>
                                </div>
                                <div class="text-sm">
                                    <div class="border-2 w-fit p-0.5 rounded">{tag3}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default VideoElements