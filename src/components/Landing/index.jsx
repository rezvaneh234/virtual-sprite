import React from 'react'
import Header from '@app/Layouts/MainLayout/Navbar/Header'
import HeroSection from './HeroSection/HeroSection'
import KhadamatHolder from './Khadamat/KhadamatHolder'
import Footer from '@app/Layouts/MainLayout/Footer/Footer'
import CourseCategory from './CourseCategory/CourseCategory'
import CourseTopList from '../Courses/CourseTopList'
import CourseTop from '@core/services/api/courses/CourseTop'
import TeacherApi from '@core/services/api/teachers/TeacherApi'
import Test from './Teachers/test'



const Landing = () => {
  return (
    <div>
      {/* <Header/> */}
      <HeroSection />
      <KhadamatHolder />
      {/* <CourseTopList/> */}
      <CourseTop/>
      <CourseCategory/>
      <TeacherApi/>
      {/* <Test/> */}
      <Footer />
    </div>
  )
}

export default Landing