import icon1 from "../images/icons/icon1.jpg";
import icon2 from "../images/icons/icon2.jpg";
import icon3 from "../images/icons/icon3.jpg";
import icon4 from "../images/icons/icon4.jpg";
import icon5 from "../images/icons/icon5.jpg";
import icon6 from "../images/icons/icon6.jpg";

function SideBar() {
    const icons = [icon1,icon2,icon3,icon4,icon5,icon6];
    
    const items = icons.map((i) =>
        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="ml-3">
                <div class="w-full">
                    <div class="w-16 h-16 flex justify-end items-end">
                        <img class="w-16 h-16 rounded-xl border-2 border-gray-500" src={i}/>
                        <div class="-ml-4 w-4 h-4 border-2 rounded-3xl border-gray-500 bg-red-500"/>
                    </div>
                </div>
            </span>
        </a>)
        
    return (
        <div class="mt-20">
            <aside id="default-sidebar" class="top-100 left-0 z-40 w-36 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                    <ul class="space-y-2">
                        <li>
                        {items}
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SideBar