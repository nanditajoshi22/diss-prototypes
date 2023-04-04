import background from "../images/background.jpg";

function ChannelElements(props){
    const name = props.name;
    const tag1 = props.tag1;
    const tag2 = props.tag2;
    const tag3 = props.tag3;
    const icon = props.icon;
    const count = props.views;

    return (
        <div>
            <div class="flex flex-row justify-center items-center overflow-visible px-12 py-6">
                <div className="container bg-dark-purple h-52 w-90 rounded-xl shadow border-2 bg-gray-400">
                    <div class="flex flex-row justify-center content-center items-center mt-9">
                        <div class="text-lg">
                            <div class="w-28 h-28">
                                <img class="w-28 h-28 rounded-xl border-2" src={background}/>
                            </div>
                        </div>
                        <div class="flex flex-col px-2 py-1">
                            <div class="text-base font-bold">
                                <div class="w-fit p-0.5">{name}</div>
                            </div>
                            <div class="text-base py-1">
                                <div class="w-fit p-0.5">{count} followers</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row p-4 justify-center content-center items-center">
                            <div class="text-xs">
                                <div class="border-2 w-fit p-0.5 rounded">{tag1}</div>
                            </div>
                            <div class="text-xs px-3">
                                <div class="border-2 w-fit p-0.5 rounded">{tag2}</div>
                            </div>
                            <div class="text-xs">
                                <div class="border-2 w-fit p-0.5 rounded">{tag3}</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelElements