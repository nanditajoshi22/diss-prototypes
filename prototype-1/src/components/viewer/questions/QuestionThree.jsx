
import { useState } from "react";
import { Link } from "react-router-dom";

function QuestionThree(){

    const [trending, setTrending] = useState("px-8 py-4 border rounded");
    const [gaming, setGaming] = useState("px-8 py-4 border rounded");
    const [fashion, setFashion] = useState("px-8 py-4 border rounded");
    const [news, setNews] = useState("px-8 py-4 border rounded");
    const [movies, setMovies] = useState("px-8 py-4 border rounded");
    const [learning, setLearning] = useState("px-8 py-4 border rounded");
    const [sports, setSports] = useState("px-8 py-4 border rounded");
    const [music, setMusic] = useState("px-8 py-4 border rounded"); 
    const [selectedCats, setSelectedCats] = useState([]);

    const changeTrending = () => {
        setTrending("px-8 py-4 border rounded bg-gray-800");
        setSelectedCats(["Trending"].concat(selectedCats));
    };

    const changeGaming = () => {
        setGaming("px-8 py-4 border rounded bg-gray-800");
        setSelectedCats(["Gaming"].concat(selectedCats));
    };

    const changeFashion = () => {
        setFashion("px-8 py-4 border rounded bg-gray-800");
        setSelectedCats(["Fashion & Beauty"].concat(selectedCats));
    };

    const changeNews = () => {
        setNews("px-8 py-4 border rounded bg-gray-800");
        setSelectedCats(["News"].concat(selectedCats));
    };

    const changeMovies = () => {
        setMovies("px-8 py-4 border rounded bg-gray-800");
        setSelectedCats(["Movies & Shows"].concat(selectedCats));
    };

    const changeLearning = () => {
        setLearning("px-8 py-4 border rounded bg-gray-800");
        setSelectedCats(["Learning"].concat(selectedCats));
    };

    const changeSports = () => {
        setSports("px-8 py-4 border rounded bg-gray-800");
        setSelectedCats(["Sports"].concat(selectedCats));
    };

    const changeMusic = () => {
        setMusic("px-8 py-4 border rounded bg-gray-800");
        setSelectedCats(["Music"].concat(selectedCats));
    };
    
    return(
        <div class="flex h-screen w-screen justify-center items-center bg-gray-800 text-white">
            <div class="flex flex-row justify-center items-center overflow-visible">
                <div className="container bg-gray-500 h-92 w-128 rounded-xl shadow border border-2">
                    <div class="flex flex-col justify-center content-center items-center p-10">
                        <div class="text-4xl">
                            Pick the top three categories that interest you:
                        </div>
                        <div class="grid grid-cols-4 gap-4 py-5 text-2xl">
                            <button class={trending} onClick={changeTrending}>
                                <p>Trending</p>
                            </button>
                            <button class={gaming} onClick={changeGaming}>
                                <p>Gaming</p>
                            </button>
                            <button class={fashion} onClick={changeFashion}>
                                <p>Fashion & Beauty</p>
                            </button>
                            <button class={news} onClick={changeNews}>
                                <p>News</p>
                            </button>
                            <button class={movies} onClick={changeMovies}>
                                <p>Movies & Shows</p>
                            </button>
                            <button class={learning} onClick={changeLearning}>
                                <p>Learning</p>
                            </button>
                            <button class={sports} onClick={changeSports}>
                                <p>Sports</p>
                            </button>
                            <button class={music} onClick={changeMusic}>
                                <p>Music</p>
                            </button>
                        </div>
                        <Link to={"/SetUp/QuestionFour/" + selectedCats[0] + "/" + selectedCats[1] + "/" + selectedCats[2]}>
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

export default QuestionThree