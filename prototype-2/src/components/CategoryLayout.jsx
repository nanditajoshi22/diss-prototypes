import AchievementCarousel from "./AchievementCarousel";
import CategoryList from "./CategoryList";
import CategoryFilters from "./CategoryFilters";

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