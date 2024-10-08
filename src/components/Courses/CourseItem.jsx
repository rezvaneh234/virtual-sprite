import React from 'react'
import lesson from '@assets/images/mainContent/topcourses/lesson.png'
import calendar from '@assets/images/mainContent/topcourses/calendar.png'
import clock from '@assets/images/mainContent/topcourses/clock.png'
import noPhoto from '@assets/images/mainContent/topcourses/no.png'
import liked from '@assets/images/mainContent/topcourses/liked.png'
import notLiked from '@assets/images/mainContent/topcourses/noLiked.png'





const CourseItem = ({ teacherName, cost, likeCount, isLiked, img, title, tarikh }) => {


  img === null ? img = noPhoto : img = img
  



  return (
    <div class='flex flex-col  gap-1 bg-[#ffffff] border-2 shadow-xl w-[18%] h-[390px] rounded-xl p-3 '>
      <img src={img} class='w-full h-[60%] ' />
      <h4 class='text-[#263238] text-[18px] text-right p-2'>{title}</h4>

      <div class='flex items-center justify-between bg-[#ECEFF1] p-2 rounded-full '>
        <div class='flex items-center ' >
          <img src={lesson} class='w-[15px] h-[15px] ' />
          <h6 class=' text-[12px]  text-[#263238]' >202 درس</h6>
        </div>
        <div class='flex items-center ' >
          <img src={clock} class='w-[18px] h-[18px] ' />
          <h6 class=' text-[12px]  text-[#263238]' >14 ساعت</h6>
        </div>
        <div class='flex items-center ' >
          <img src={calendar} class='w-[18px] h-[18px] ' />
          <h6 class=' text-[12px]  text-[#263238]' >5 اذر 1402</h6>
        </div>
      </div>
      <div class='flex items-center justify-between p-2'>
        <div class='text-[#263238] text-[16px] flex items-center gap-1'> مدرس : <h4 class='text-[#263238] text-[14px]'>{teacherName}</h4></div>
        <h4 class='text-[#263238] text-[13px]'>256 دانش‌آموز</h4>
      </div>
      <div class='flex items-center justify-between p-2'>
        <div class='flex items-center gap-1 bg-[#FFEBEE] p-2 rounded-full ' >
          <img src={liked} class='w-[15px] h-[15px] '/>
        <h4 class='text-[#F44336] text-[14px] ' >{likeCount}</h4>
        </div>
        <div class='text-[#2196F3] text-[16px] flex items-center gap-1'> {cost} <h4 class='text-[#263238] text-[12px]'>تومان</h4></div>
      </div>
      {/* <h4 class='text-[#263238]'>{tarikh}</h4> */}

    </div>
  )
}

export default CourseItem