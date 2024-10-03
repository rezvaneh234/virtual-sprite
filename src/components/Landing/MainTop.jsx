import React from 'react'
import Header from '@common/Header'
import background from '@assets/images/mainTop/bg.png'
import Search from '@common/Search'
import Statstic from './Statistic'

const MainTop = () => {
    return (
        <div  className='bg' >
            <Header />
            <div>
                <div class="mt-40">
                    <h2 class="py-5 text-xl text-[#263238]">پلتفرم اموزش طراحی وب</h2>
                    <h1 class="py-5 text-6xl text-[#263238]">مرجع آموزش برنامه نویسی</h1>
                    <h2 class="py-5 text-xl text-[#263238]">مرجع آموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی آموزشی به زبان فارسی</h2>
                </div>
                <Search/>
                <Statstic/>
            </div>
        </div>
    )
}

export default MainTop