import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Recommendations from "../components/Recommendations";


function ViewerResult () {
    return (
        <div class="bg-gray-800">
            <div class="fixed z-50">
                <TopBar/>
            </div>
            <div class="fixed">
                <SideBar/>
            </div>
            <div>
                <Recommendations/>
            </div>
        </div>
    )
}

export default ViewerResult