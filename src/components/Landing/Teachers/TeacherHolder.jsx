import React from 'react'
import TeacherItem from './TeacherItem'
import Title from '../Title/Title'

const TeacherHolder = ({teachers}) => {
    return (
        <div class='bg-[#E3F2FD]' >
            <Title title={"اساتید برتر "} />
            <div class='flex gap-5 justify-center my-5' >
                {teachers?.map((item) => (
                    <TeacherItem
                        key={item.teacherId}
                        img={item.pictureAddress}
                        teacherName={item.fullName}
                        courses={item.courseCounts}
                    />
                ))}
            </div>
        </div>
    )
}

export default TeacherHolder