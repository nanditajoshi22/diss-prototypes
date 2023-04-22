import TopBar from "../components/bars/TopBar";
import SideBar from "../components/bars/SideBar";
import CategoryLayout from "../components/categories/CategoryLayout";

function Category(props){
    const name = props.name;

    return (
        <div class="bg-gray-800">
            <div class="fixed z-50">
                <TopBar/>
            </div>
            <div class="fixed">
                <SideBar/>
            </div>
            <div class="text-white">
                <CategoryLayout name={name}/>
            </div>
        </div>
    )
}

export default Category