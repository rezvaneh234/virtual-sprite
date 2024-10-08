import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CourseTopList from '@components/Courses/CourseTopList';


const CourseTop = () => {
  const [topCourses, setTopCourses] = useState();


  const getTopCourses = async () => {

    let res = await axios.get("https://classapi.sepehracademy.ir/api/Home/GetCoursesTop?Count=5");
    setTopCourses(res.data);
    
  }
  
  useEffect(() => {
    getTopCourses()
  }, [])

  return (
    <CourseTopList topCourses={topCourses} />
  )
}

export default CourseTop


