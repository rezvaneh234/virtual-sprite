import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import TeacherHolder from '@components/Landing/Teachers/TeacherHolder';



const TecherApi = () => {
    const [techers, setTeachers] = useState();


    const getAllTeachers = async () => {

        let res = await axios.get("https://classapi.sepehracademy.ir/api/Home/GetTeachers");
        setTeachers(res.data);

    }

    useEffect(() => {
        getAllTeachers()
    }, [])

    return (
        <TeacherHolder teachers={techers} />
    )
}

export default TecherApi


