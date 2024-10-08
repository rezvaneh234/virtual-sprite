import React from 'react'
import right from '@assets/images/MainContent/khadamat/11.png'
import mid from '@assets/images/MainContent/khadamat/22.png'
import left from '@assets/images/MainContent/khadamat/33.png'
import { useState } from 'react'
import Khadamat from './Khadamat';
import Title from '../Title/Title'



const KhadamatHolder = () => {
    const [khadamat, setKhadamat] = useState(
        [
            { img: right, title: "سادگی خدمات", desc: 'سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت ' },
            { img: mid, title: "فرصت های شغلی", desc: 'سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت ' },
            { img: left, title: "مدرک معتبر", desc: 'سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت ' },
        ]
    );
    return (
        <div class='mb-10' >
            <Title title={"خدمات ما"} />
            <div class='flex justify-evenly' >
                {khadamat.map((item, index) => {
                    return <Khadamat
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                    />
                })} </div>
        </div>
    )
}

export default KhadamatHolder