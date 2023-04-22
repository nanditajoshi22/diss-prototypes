import AchievementCarousel from "../carousels/AchievementCarousel";
import CategoryList from "../categories/CategoryList";
import CategoryFilters from "../categories/CategoryFilters";

function CategoryLayout(props) {
    const category = props.name;
    return (
        <div class="py-24 ml-64">
            <CategoryList name={category}/>
            <AchievementCarousel achievement="Streamer of the week" category={category}/>
            <CategoryFilters category={category}/>
        </div>
    )
}

export default CategoryLayout