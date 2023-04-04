import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import HomeLayout from "../components/HomeLayout";

function Home(){
    return (
        <div class="bg-gray-800">
            <div class="fixed z-50">
                <TopBar/>
            </div>
            <div class="fixed">
                <SideBar/>
            </div>
            <div class="text-white">
                <HomeLayout/>
            </div>
        </div>
    )
}

export default Home