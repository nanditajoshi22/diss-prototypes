import TopBar from "../components/bars/TopBar";
import SideBar from "../components/bars/SideBar";
import StreamerChannel from "../components/streamer/StreamerChannel";

function Streamer(){
    return (
        <div class="bg-gray-800 bg-cover">
            <div class="fixed z-50">
                <TopBar/>
            </div>
            <div class="fixed">
                <SideBar/>
            </div>
            <div class="bg-gray-800 h-auto bg-cover bg-scroll overflow-visible">
                <StreamerChannel/>
            </div>
        </div>
    )
}

export default Streamer