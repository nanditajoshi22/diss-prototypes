import CategoryCarousel from "../carousels/CategoryCarousel";
import CategoryList from "../categories/CategoryList";
import TagCarousel from "../carousels/TagCarousel";
import TopCarousel from "../carousels/TopCarousel";

function HomeLayout () {

    return (
        <div class="py-24 ml-64">
            <TagCarousel type="Top Picks" tag="Multi-Player"/>
            <CategoryList/>
            <TopCarousel type="Top Livestreams" category="Gaming"/>
            <CategoryCarousel type="More of Gaming" category="Gaming"/>
        </div>
    )
}

export default HomeLayout