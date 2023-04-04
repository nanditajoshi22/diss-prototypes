import streamData from "../streamInfo.json";
import { ImShuffle } from 'react-icons/im';
import { TbCircleFilled } from 'react-icons/tb';
import { AiFillHeart } from 'react-icons/ai';
import { MdOutlineNotInterested } from 'react-icons/md';
import React, { useState } from "react";

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

function HomeShuffle() {

    function myRandomInts(quantity, max){
        const arr = []
        while(arr.length < quantity){
          var candidateInt = Math.floor(Math.random() * max) + 1;
          arr.push(candidateInt);
        }
      return(arr)
    }
    
    const [indices, setIndices] = useState(myRandomInts(100, (streamData.streams.length-1)));
    
    const [i, setI] = useState(0);
    const [current, setCurrent] = useState(streamData.streams[indices[0]]);
    const [text, setText] = useState(" ");
    const [like, setLike] = useState("rounded-xl border bg-gray-400 text-5xl p-5");
    const [notIn, setNotIn] = useState("rounded-xl border bg-gray-400 text-5xl p-5");

    function onShuffle(){
        setText(" ");
        setCurrent(streamData.streams[indices[i]]);
        setI(i+1);
        setLike("rounded-xl border bg-gray-400 text-5xl p-5");
        setNotIn("rounded-xl border bg-gray-400 text-5xl p-5");
    }

    function onLike(){
        setLike("rounded-xl border text-5xl p-5");
        setNotIn("rounded-xl border bg-gray-400 text-5xl p-5");
        setText("Thank you for your feedback, we will recommend more videos like this in the future.");
    }

    function onNotInterested(){
        setLike("rounded-xl border bg-gray-400 text-5xl p-5");
        setNotIn("rounded-xl border text-5xl p-5");
        setText("Thank you for your feedback, we will not recommend more videos like this in the future.");
    }

    const categories = ["Trending", "Gaming", "Fashion & Beauty", "News", "Movies & Shows", "Learning", "Sports", "Music"];

    const offset = current.thumbnail + (categories.indexOf(current.category)*2);

    const icons = [icon1,icon2,icon3,icon4,icon5,icon6];
    const thumbnails = [trending1,trending2,gaming1,gaming2,fashion1,fashion2,news1,news2,movies1,movies2,learning1,learning2,sports1,sports2,music1,music2];

    return(
        <div>
            <div class="flex justify-center items-center py-6">
                <div className="container bg-gray-400 h-80 w-1/2 rounded-xl shadow border-2">
                    <div class="flex flex-col justify-left content-left items-left">
                        <div class="text-4xl ml-25 h-64">
                            <img class="w-fit h-64 rounded-xl border" src={thumbnails[offset]}/>    
                        </div>
                        <div class="flex flex-col">
                            <div class="flex flex-row px-2">
                                <div class="text-l">
                                    <div class="mt-0.5">
                                        <img class="w-6 h-6 border rounded-xl" src={icons[current.icon]}/>
                                    </div>
                                </div>
                                <div class="text-l ml-2">
                                    <div class="">
                                        {current.title}
                                    </div>
                                </div>
                                <div class="ml-2 text-red-600">
                                    <div class="">
                                        <div class="flex flex-row">
                                            <TbCircleFilled class="text-xs mt-1.5"/> 
                                            <div class="px-0.5">{current.viewership}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row px-2 py-1">
                                <div class="text-sm">
                                    <div class="border-2 w-fit p-0.5 rounded">{current.tags[0]}</div>
                                </div>
                                <div class="text-sm px-3">
                                    <div class="border-2 w-fit p-0.5 rounded">{current.tags[1]}</div>
                                </div>
                                <div class="text-sm">
                                    <div class="border-2 w-fit p-0.5 rounded">{current.tags[2]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-col px-4 justify-center content-center items-center">
                    <div class="h-24 w-24">
                        <button class="rounded-xl border bg-gray-400 text-5xl p-5" onClick={onShuffle}>
                            <ImShuffle/>
                        </button>
                    </div>
                    <div class="h-24 w-24">
                        <button class={like} onClick={onLike}>
                            <AiFillHeart/>
                        </button>
                    </div>
                    <div class="h-24 w-24">
                        <button class={notIn} onClick={onNotInterested}>
                            <MdOutlineNotInterested/>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex justify-center content-center items-center">
                {text}
            </div>
        </div>
    )
}

export default HomeShuffle