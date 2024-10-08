import React from 'react'
import CourseItem from './CourseItem'
import { useState } from 'react';
import { useEffect } from 'react';
import { getTopCourses } from '@core/services/api/courses/courseTop.api.js';
import Btn from '../common/Btn';
import Title from '../Landing/Title/Title';

const CourseTopList = ({topCourses}) => {

    // const [topCourses, setTopCourses] = useState();

    // const res = getTopCourses()
    // console.log(res)
    // setTopCourses(res);

    // useEffect(() => {
    //     getTopCourses()
    // }, [])

    return (
        <div >
            <Title title={"دوره‌های اموزشی "} />
            <div class='flex gap-5 justify-center my-5' >
                {topCourses?.map((item) => (
                    <CourseItem
                        key={item.courseId}
                        img={item.tumbImageAddress}
                        title={item.title}
                        tarikh={item.lastUpdate}
                        teacherName={item.teacherName}
                        cost={item.cost}
                        likeCount={item.likeCount}
                        isLiked={item.userIsLiked}
                    />
                ))}
            </div>
            <Btn insideText={"مشاهده همه"} />
        </div>
    )
}

export default CourseTopList