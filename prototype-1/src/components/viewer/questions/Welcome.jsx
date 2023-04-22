import { Link } from "react-router-dom";
function Welcome() {
    return ( 
        <div>  
            <div class="flex flex-row justify-center items-center overflow-visible">
                    <div class="container bg-gray-500 h-92 w-full rounded-xl shadow border border-2 border-white">
                        <div class="flex flex-col justify-center content-center items-center p-10">
                            <div class="text-4xl">
                                Welcome
                            </div>
                            <div class="flex w-128 text-2xl p-12">
                                <p>Complete the following questions to cater your streaming recommendations to you.</p>
                            </div>
                            <Link to={"/SetUp/QuestionOne"}>
                                <div class="border rounded px-4 py-2 bg-gray-800">
                                    Start
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Welcome