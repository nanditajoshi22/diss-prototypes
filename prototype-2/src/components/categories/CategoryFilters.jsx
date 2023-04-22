import React, { useState } from "react";
import LiveNow from "../tabs/LiveNow";
import Discover from "../tabs/Discover";
import Channels from "../tabs/Channels";

function CategoryFilters(props) {
    
    const [liveNow, setLiveNow] = useState("px-8 py-4 border rounded bg-gray-800");
    const [channels, setChannels] = useState("px-8 py-4 border rounded");
    const [discover, setDiscover] = useState("px-8 py-4 border rounded");
    const [display, setDisplay] = useState(
        <LiveNow category={props.category}></LiveNow>
    )

    const changeLiveNow = () => {
        setLiveNow("px-8 py-4 border rounded bg-gray-800");
        setChannels("px-8 py-4 border rounded");
        setDiscover("px-8 py-4 border rounded");
        setDisplay(
            <LiveNow category={props.category}></LiveNow>
        );
    };

    const changeChannels = () => {
        setLiveNow("px-8 py-4 border rounded");
        setChannels("px-8 py-4 border rounded bg-gray-800");
        setDiscover("px-8 py-4 border rounded");
        setDisplay(
            <Channels category={props.category}></Channels>
        );
    };

    const changeDiscover = () => {
        console.log("you just clicked");
      
        setLiveNow("px-8 py-4 border rounded");
        setChannels("px-8 py-4 border rounded");
        setDiscover("px-8 py-4 border rounded bg-gray-800");
        setDisplay(
            <Discover category={props.category}></Discover>
        );
    };


    return (
        <div>
            <div>
                <div class="px-10 py-6">
                    <div className="bg-dark-purple h-36 w-fill rounded-xl shadow border-2 bg-gray-400">
                        <div class="grid grid-cols-3 gap-6 p-6 lg:text-xl 2xl:text-3xl text-center lg:mt-4 2xl:mt-3">
                            <button class={liveNow} onClick={changeLiveNow}>
                                Live Now
                            </button>
                            <button class={channels} onClick={changeChannels}>
                                Channels
                            </button>
                            <button class={discover} onClick={changeDiscover}>
                                Discover
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {display}
                </div>
            </div> 
        </div>
    )
}

export default CategoryFilters