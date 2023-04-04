function CategoryList (props) {
    const current = props.name;
    const categories = [
        ["Trending","Trending"],
        ["Gaming","Gaming"],
        ["Fashion & Beauty", "Fashion+Beauty"],
        ["News","News"],
        ["Movies & Shows", "Movies+Shows"],
        ["Learning", "Learning"],
        ["Sports", "Sports"],
        ["Music", "Music"]
    ];

    const items = categories.map(cat => {
        let style = "px-8 py-4 border rounded";

        if(cat[0] === current){
            style = "px-8 py-4 border rounded bg-gray-800";
        }

        return (<a class={style} href={"/Category/" + cat[1]}>
            {cat[0]}
        </a>)
    })

    return (
        <div>
            <div class="px-10 py-6">
                <div className="bg-gray-400 h-56 w-fill rounded-xl shadow border-2">
                    <div class="grid grid-rows-2 grid-cols-4 gap-6 p-6 lg:text-xl 2xl:text-3xl text-center lg:mt-4 2xl:mt-1">
                        {items}
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default CategoryList