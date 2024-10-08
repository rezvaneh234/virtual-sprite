import React from 'react'

const Khadamat = ({img, title , desc}) => {
    return (
        <div class="container border-[1px] bg-[#FFFFFF] border-[#CFD8DC] shadow-lg  w-[25%] flex flex-col justify-center align-center items-center gap-6 p-4 rounded-xl">
            <img src={img} class="w-[64px] h-[64px] " />
            <h2 class='text-lg text-[#263238]' >{title}</h2>
            <p class='text-[15px] text-[#455A64]' >{desc}</p>
        </div>
    )
}

export default Khadamat