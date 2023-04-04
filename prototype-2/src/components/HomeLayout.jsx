import CategoryCarousel from "./CategoryCarousel";
import CategoryList from "./CategoryList";
import TagCarousel from "./TagCarousel";
import TopCarousel from "./TopCarousel";

function HomeLayout () {

    return (
        <div class="py-24 ml-64">
            <TagCarousel type="Top Picks" tag="beep"/>
            <CategoryList/>
            <TopCarousel type="Top Livestreams" category="Gaming"/>
            <CategoryCarousel type="More of Gaming" category="Gaming"/>
        </div>
    )
}

export default HomeLayout