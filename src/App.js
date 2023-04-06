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
    const [newCourse, setNewCourse] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (event) => {
        setNewCourse(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Verificar si el curso ya existe en la lista
        const courseExists = courses.find(course => course.text === newCourse);

        if (courseExists) {
            setErrorMsg('El curso ya existe en la lista');
        } else {
            // Agregar el nuevo curso a la lista de cursos
            const newCourseItem = {
                id: courses.length + 1,
                text: newCourse
            };

            courses.push(newCourseItem);

            // Actualizar el estado
            setNewCourse('');
            setErrorMsg('');
        }
    };

    const handleCourseDelete = (id) => {
        const updatedCourses = courses.filter(course => course.id !== id);
        setCourses(updatedCourses);
    };

    return (
        <>
            <h1>Lista de cursos</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{courseItem(course, handleCourseDelete)}</li>
                ))}
            </ul>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={newCourse} onChange={handleInputChange} />
                <button type="submit">Agregar curso</button>
                {errorMsg && <p>{errorMsg}</p>}
            </form>
        </>
    )
}

function courseItem(course, onDeleteClick) {
  const { id, text } = course;

  const handleDeleteClick = () => {
    onDeleteClick(id);
  }

  return (
    <div>
      <p>Descripción del curso: {text}</p>
      <button onClick={handleDeleteClick}>Borrar</button>
    </div>
  );
}
export default courseItem;
