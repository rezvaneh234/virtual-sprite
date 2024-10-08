import React from 'react'
import right from '@assets/images/HeroSection/1.png'
import mid from '@assets/images/HeroSection/2.png'
import left from '@assets/images/HeroSection/3.png'
import AmarItem from './AmarItem'
import { useState } from 'react'
import HeroSection from './HeroSection';

const Statistic = () => {
    const [amar, setAmar] = useState(
        [
            { img: right, num: "167", type: 'مدرس مجرب' },
            { img: mid , num: "408,228", type: 'دقیقه آموزش' },
            { img: left, num: "460,789", type: 'نفر دانشجو' },
        ]
    );
    return (
        <div class='flex justify-center gap-8 mb-14' > {amar.map((item, index) => {
            return <AmarItem
                key={index}
                img= {item.img}
                num={item.num}
                type={item.type}
            />
        })} </div>
    )
}

export default Statistic