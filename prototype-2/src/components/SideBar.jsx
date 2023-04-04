import icon1 from "../images/icons/icon1.jpg";
import icon2 from "../images/icons/icon2.jpg";
import icon3 from "../images/icons/icon3.jpg";
import icon4 from "../images/icons/icon4.jpg";
import icon5 from "../images/icons/icon5.jpg";
import icon6 from "../images/icons/icon6.jpg";

function SideBar() {
    return (
        <div class="mt-20">
            <aside id="default-sidebar" class="top-100 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                <ul class="space-y-2">
                    <p class="text-white font-bold ml-3">Subscribed</p>
                    <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-3">
                                <div class="flex w-full">
                                    <div class="w-16 h-16 my-auto">
                                        <img class="w-16 h-16 rounded-xl border-2 border-gray-500" src={icon1}/>
                                    </div>
                                    <div class="w-1/2 my-auto  p-2">
                                        StreamerA
                                    </div>
                                </div>
                            </span>
                        </a>
                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-3">
                                <div class="flex w-full">
                                    <div class="w-16 h-16 my-auto">
                                        <img class="w-16 h-16 rounded-xl border-2 border-gray-500" src={icon2}/>
                                    </div>
                                    <div class="w-1/2 my-auto  p-2">
                                        StreamerB
                                    </div>
                                </div>
                            </span>
                        </a>
                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-3">
                                <div class="flex w-full">
                                    <div class="w-16 h-16 my-auto">
                                        <img class="w-16 h-16 rounded-xl border-2 border-gray-500" src={icon3}/>
                                    </div>
                                    <div class="w-1/2 my-auto  p-2">
                                        StreamerC
                                    </div>
                                </div>
                            </span>
                        </a>
                    </li>
                </ul>
                <ul class="space-y-2 y-1/2 lg:my-20 2xl:my-40">
                    <p class="text-white font-bold ml-3">Following</p>
                    <li>
                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-3">
                                <div class="flex w-full">
                                    <div class="w-16 h-16 my-auto">
                                        <img class="w-16 h-16 rounded-xl border-2 border-gray-500" src={icon4}/>
                                    </div>
                                    <div class="w-1/2 my-auto  p-2">
                                        StreamerX
                                    </div>
                                </div>
                            </span>
                        </a>
                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-3">
                                <div class="flex w-full">
                                    <div class="w-16 h-16 my-auto">
                                        <img class="w-16 h-16 rounded-xl border-2 border-gray-500" src={icon5}/>
                                    </div>
                                    <div class="w-1/2 my-auto  p-2">
                                        StreamerY
                                    </div>
                                </div>
                            </span>
                        </a>
                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-3">
                                <div class="flex w-full">
                                    <div class="w-16 h-16 my-auto">
                                        <img class="w-16 h-16 rounded-xl border-2 border-gray-500" src={icon6}/>
                                    </div>
                                    <div class="w-1/2 my-auto p-2">
                                        StreamerZ
                                    </div>
                                </div>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            </aside>
        </div>
    )
}

export default SideBar