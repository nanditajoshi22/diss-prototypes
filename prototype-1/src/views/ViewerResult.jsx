import TopBar from "../components/bars/TopBar";
import SideBar from "../components/bars/SideBar";
import Recommendations from "../components/viewer/Recommendations";


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