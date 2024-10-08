import React from 'react'
import sabad from "@assets/images/header/sabad.png"
import hexa from "@assets/images/header/hexa.png"
import { useState } from 'react'

const Header = () => {

    const [hList, setHlist] = useState(
        [
            { title: "دوره ها" },
            { title: "اساتید" },
            { title: "ارتباط با ما" },
            { title: "اخبار مقالات" },
        ]
    );

    return (
        <div class="container mx-auto flex justify-between items-center bg-transparent">
            <div>
                <img src={hexa} class="w-40 h-10  mr-12" />
            </div>
            <ul class="flex gap-10 items-center ">
                {hList.map((item, index) => {
                    return <li key={index} class="cursor-pointer text-[#263238]">
                        {item.title}
                    </li>
                })}
            </ul>
            <div class="flex gap-4 ml-12">
                <img src={sabad} class=" h-20 w-20" />
                <button class="bg-[#2196F3] text-white px-4 py-2 rounded-full my-3">ورود به حساب</button>
            </div>
        </div>
    )
}

export default Header