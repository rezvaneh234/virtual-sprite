import React from 'react'
import Header from '@common/Header'
import background from '@assets/images/mainTop/bg.png'
import Search from '@common/Search'
import Statstic from './Statistic'

const MainTop = () => {
    return (
        <div className='bg' >
            <Header />
            <h2 class="text-xl text-[#263238]">پلتفرم اموزش طراحی وب</h2>
            <h1 class="text-6xl text-[#263238]">مرجع آموزش برنامه نویسی</h1>
            <h2 class="text-xl text-[#263238]">مرجع آموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی آموزشی به زبان فارسی</h2>
            <Search />
            <Statstic />
        </div>
    )
}

export default MainTop