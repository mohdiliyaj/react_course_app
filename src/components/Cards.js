import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    const data = props.allCourses;
    const filter = props.filter;

    const [likedCourses, setLikedCourses] = useState([]);

    const courses = [];
    if (filter === "All") {
        Object.values(data).forEach(item => {
            item.forEach(e => {
                courses.push(e);
            })
        })
    }else{
        data[filter].forEach(e=>{
            courses.push(e);
        })
    }

    return (
        <div className='container py-3'>
            <div className='row'>
                {
                    courses.map((course) => {
                        return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                    })
                }
            </div>
        </div>
    )
}

export default Cards
