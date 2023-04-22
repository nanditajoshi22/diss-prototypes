import AllView from "./AllView";
import HomeShuffle from "./HomeShuffle";

function HomeLayout () {

    return (
        <div class="py-24 ml-36">
            <div class="h-fill w-fill">
                <HomeShuffle/>
            </div>
            <AllView/>
        </div>
    )
}

export default HomeLayout