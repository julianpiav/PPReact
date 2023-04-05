import PropTypes from 'prop-types';
import { useState } from "react";

const courses = [
    {
        id: 1,
        text: 'Curso 1'
    },
    {
        id: 2,
        text: 'Curso 2'
    },
    {
        id: 3,
        text: 'Curso 3'
    },
    {
        id: 4,
        text: 'Curso 4'
    }
]
export const CourseList = () => {

    return (
        <>
            <h1>Lista de cursos</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{course.text}</li>
                ))}
            </ul>
        </>
    )
}



