import '../App.css';
import { useState } from "react";
import { Link } from "react-router-dom";

function QuestionTwo(){

    const [low, setLow] = useState("px-8 py-4 border rounded");
    const [mid, setMid] = useState("px-8 py-4 border rounded");
    const [high, setHigh] = useState("px-8 py-4 border rounded");

    function changeLow(){
        setLow("px-8 py-4 border rounded bg-gray-800");
        setMid("px-8 py-4 border rounded");
        setHigh("px-8 py-4 border rounded");
    }

    function changeMid(){
        setLow("px-8 py-4 border rounded");
        setMid("px-8 py-4 border rounded bg-gray-800");
        setHigh("px-8 py-4 border rounded");
    }

    function changeHigh(){
        setLow("px-8 py-4 border rounded");
        setMid("px-8 py-4 border rounded");
        setHigh("px-8 py-4 border rounded bg-gray-800");
    }

    return(
        <div class="flex h-screen w-screen justify-center items-center bg-gray-800 text-white">
            <div class="flex flex-row justify-center items-center overflow-visible">
                    <div className="container bg-gray-400 h-92 w-full rounded-xl shadow border border-2">
                        <div class="flex flex-col justify-center content-center items-center p-10">
                            <div class="text-4xl">
                                How long do you watch streams for?
                            </div>
                            <div class="grid grid-cols-3 gap-4 py-5 text-2xl">
                                <button class={low} onClick={changeLow}>
                                    Less than an hour
                                </button>
                                <button class={mid} onClick={changeMid}>
                                    1-2 hours
                                </button>
                                <button class={high} onClick={changeHigh}> 
                                    3+ hours
                                </button>
                            </div>
                            <Link to={"/SetUp/QuestionThree"}>
                                <div class="border rounded px-4 py-2 bg-gray-800">
                                    Next
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default QuestionTwo