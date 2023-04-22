import CategoryCarousel from "./CategoryCarousel";
import TagCarousel from "./TagCarousel";
import { useParams } from "react-router-dom";

function Recommendations() {
    const params = useParams();

    return (
        <div class="py-24 ml-36 text-white">
            <TagCarousel type="Top Picks" tag1={params.tag1} tag2={params.tag2} tag3={params.tag3} tag4={params.tag4} tag5={params.tag5}/>
            <CategoryCarousel category={params.cat1}/>
            <CategoryCarousel category={params.cat2}/>
            <CategoryCarousel category={params.cat3}/>
        </div>
    )
}

export default Recommendations