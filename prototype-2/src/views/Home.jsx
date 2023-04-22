import TopBar from "../components/bars/TopBar";
import SideBar from "../components/bars/SideBar";
import HomeLayout from "../components/home/HomeLayout";

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