
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function QuestionFour(){
    const catToTags = [["Trending",["Most Popular", "Most Viewed", "Most Recent"]],["Gaming",["Single Player", "Multi-Player", "First Playthrough"]],["Fashion & Beauty",["Make-up", "Hair", "Skincare"]],["News",["Politics", "World", "Tech"]],["Movies & Shows",["Review", "Ranking", "Reaction"]],["Learning",["Maths", "History", "Geography"]],["Sports",["Football", "Cricket", "Formula 1"]],["Music",["Pop", "Hip-Hop", "R&B"]]];

    let selectedCats = useParams();
    let tags = [];
    
    catToTags.map(cat => {
        if((cat[0] === selectedCats.cat1) | (cat[0] === selectedCats.cat2) | (cat[0] === selectedCats.cat3)){
            tags = cat[1].concat(tags);
        }
        return (0);
    })

    const [tag1, setTag1] = useState("px-8 py-4 border rounded");
    const [tag2, setTag2] = useState("px-8 py-4 border rounded");
    const [tag3, setTag3] = useState("px-8 py-4 border rounded");
    const [tag4, setTag4] = useState("px-8 py-4 border rounded");
    const [tag5, setTag5] = useState("px-8 py-4 border rounded");
    const [tag6, setTag6] = useState("px-8 py-4 border rounded");
    const [tag7, setTag7] = useState("px-8 py-4 border rounded");
    const [tag8, setTag8] = useState("px-8 py-4 border rounded");
    const [tag9, setTag9] = useState("px-8 py-4 border rounded");
    const [selectedTags, setSelectedTags] = useState([]);

    const changeTag1 = () => {
        setTag1("px-8 py-4 border rounded bg-gray-800");
        setSelectedTags([tags[0]].concat(selectedTags));
    };

    const changeTag2 = () => {
        setTag2("px-8 py-4 border rounded bg-gray-800");
        setSelectedTags([tags[1]].concat(selectedTags));
    };

    const changeTag3 = () => {
        setTag3("px-8 py-4 border rounded bg-gray-800");
        setSelectedTags([tags[2]].concat(selectedTags));
    };

    const changeTag4 = () => {
        setTag4("px-8 py-4 border rounded bg-gray-800");
        setSelectedTags([tags[3]].concat(selectedTags));
    };

    const changeTag5 = () => {
        setTag5("px-8 py-4 border rounded bg-gray-800");
        setSelectedTags([tags[4]].concat(selectedTags));
    };

    const changeTag6 = () => {
        setTag6("px-8 py-4 border rounded bg-gray-800");
        setSelectedTags([tags[5]].concat(selectedTags));
    };

    const changeTag7 = () => {
        setTag7("px-8 py-4 border rounded bg-gray-800");
        setSelectedTags([tags[6]].concat(selectedTags));
    };

    const changeTag8 = () => {
        setTag8("px-8 py-4 border rounded bg-gray-800");
        setSelectedTags([tags[7]].concat(selectedTags));
    };

    const changeTag9 = () => {
        setTag9("px-8 py-4 border rounded bg-gray-800");
        setSelectedTags([tags[8]].concat(selectedTags));
    };

    return(
        <div class="flex h-screen w-screen justify-center items-center bg-gray-800 text-white">
            <div class="flex flex-row justify-center items-center overflow-visible">
                <div class="container bg-gray-500 h-92 w-128 rounded-xl shadow border border-2">
                    <div class="flex flex-col justify-center content-center items-center p-10">
                        <div class="text-4xl text-light-pink-200">
                            Pick the top five tags that are most important to you:
                        </div>
                        <div class="grid grid-cols-3 gap-4 py-5 text-2xl">
                            <button class={tag1} onClick={changeTag1}>
                                <p>{tags[0]}</p>
                            </button>
                            <button class={tag2} onClick={changeTag2}>
                                <p>{tags[1]}</p>
                            </button>
                            <button class={tag3} onClick={changeTag3}>
                                <p>{tags[2]}</p>
                            </button>
                            <button class={tag4} onClick={changeTag4}>
                                <p>{tags[3]}</p>
                            </button>
                            <button class={tag5} onClick={changeTag5}>
                                <p>{tags[4]}</p>
                            </button>
                            <button class={tag6} onClick={changeTag6}>
                                <p>{tags[5]}</p>
                            </button>
                            <button class={tag7} onClick={changeTag7}>
                                <p>{tags[6]}</p>
                            </button>
                            <button class={tag8} onClick={changeTag8}>
                                <p>{tags[7]}</p>
                            </button>
                            <button class={tag9} onClick={changeTag9}>
                                <p>{tags[8]}</p>
                            </button>
                        </div>
                        <Link to={"/Recommendations/" + selectedCats.cat1 + "/" + selectedCats.cat2 + "/" + selectedCats.cat3 + "/" + selectedTags[0] + "/" + selectedTags[1] + "/" + selectedTags[2] + "/" + selectedTags[3] + "/" + selectedTags[4]}>
                            <div class="border rounded px-4 py-2 bg-gray-800">
                                Confirm
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionFour