import React from 'react'
import dore from '@assets/images/mainContent/teachers/dore.png'
import nobody from '@assets/images/mainContent/teachers/nobody.jpg'



const TeacherItem = ({ img, teacherName, courses }) => {
  img === null ? img = nobody : img = img
    return (
        <div class='flex flex-col gap-3 bg-[#ffffff] border-2 shadow-xl w-[17%] h-[390px] rounded-md '>
            <img src={img} class='w-full h-[50%] ' />
            <h4 class='text-[#263238] text-[20px] '>{teacherName}</h4>
            <div class='flex' >
                <img src={dore} class=' w-[16px] h-[16px] ' />
                <h4 class='text-[#2196F3] text-[14px] '> {courses} دوره</h4>
            </div>
        </div>
    )
}

export default TeacherItem