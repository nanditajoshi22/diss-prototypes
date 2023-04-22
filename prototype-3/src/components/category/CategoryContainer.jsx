import React, { useState } from "react";
import LiveNow from "../tabs/LiveNow";
import Channels from "../tabs/Channels";
import Discover from "../tabs/Discover";

function CategoryContainer(props) {
    const [content, setContent] = useState(
        <LiveNow category={props.category}/>
    )

    function changeContent(event) {
        const value = event.target.value;
        if(value === "live"){
            setContent(
                <LiveNow category={props.category}/>
            )
        } else if(value === "channels"){
            setContent(
                <Channels category={props.category}/>
            )
        } else {
            setContent(
                <Discover category={props.category}/>
            )
        }
    }


    return (
        <div>
            <div class="ml-12">
                <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" onChange={changeContent}>
                    <option value="live">Live Now</option>
                    <option value="channels">Channels</option>
                    <option value="discover">Discover</option>
                </select>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default CategoryContainer