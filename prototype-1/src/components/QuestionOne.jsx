import '../App.css';
import { useState } from "react";
import { Link } from "react-router-dom";

function QuestionOne(){
    const [engager, setEngager] = useState("py-2 px-10 border rounded");
    const [multi, setMulti] = useState("py-2 px-10 border rounded");
    const [lurker, setLurker] = useState("py-2 px-10 border rounded");
    const [frog, setFrog] = useState("py-2 px-10 border rounded");

    function changeEngage(){
        setEngager("py-2 px-10 border rounded bg-gray-800");
        setMulti("py-2 px-10 border rounded");
        setLurker("py-2 px-10 border rounded");
        setFrog("py-2 px-10 border rounded");
    }

    function changeMulti(){
        setEngager("py-2 px-10 border rounded");
        setMulti("py-2 px-10 border rounded bg-gray-800");
        setLurker("py-2 px-10 border rounded");
        setFrog("py-2 px-10 border rounded");
    }

    function changeLurker(){
        setEngager("py-2 px-10 border rounded");
        setMulti("py-2 px-10 border rounded");
        setLurker("py-2 px-10 border rounded bg-gray-800");
        setFrog("py-2 px-10 border rounded");
    }

    function changeFrog(){
        setEngager("py-2 px-10 border rounded");
        setMulti("py-2 px-10 border rounded");
        setLurker("py-2 px-10 border rounded");
        setFrog("py-2 px-10 border rounded bg-gray-800");
    }

    return(
        <div class="flex h-screen w-screen justify-center items-center bg-gray-800 text-white">
            <div class="flex flex-row justify-center items-center overflow-visible">
                    <div className="container bg-gray-500 h-92 w-full rounded-xl shadow border border-2">
                        <div class="flex flex-col justify-center content-center items-center p-10">
                            <div class="text-4xl">
                                What type of stream viewer are you?
                            </div>
                            <div class="grid grid-cols-4 gap-4 py-5 text-2xl">
                                <button class={engager} onClick={changeEngage}>
                                    <div>The Engager</div>
                                    <div class="p-2 text-base">Attentively watching and contributing in chat.</div>
                                </button>
                                <button class={multi} onClick={changeMulti}>
                                    <div>The Multi-tasker</div>
                                    <div class="p-2 text-base">Watches whilst doing homework, chores, etc.</div>
                                </button>
                                <button class={lurker} onClick={changeLurker}> 
                                    <div>The Lurker</div>
                                    <div class="p-2 text-base">Watching whilst not contributing in chat.</div>
                                </button>
                                <button class={frog} onClick={changeFrog}>
                                    <div></div>The VOD Frog 
                                    <div class="p-2 text-base">Watches after the stream was live.</div>
                                </button>
                            </div>
                            <Link to={"/SetUp/QuestionTwo"}>
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

export default QuestionOne