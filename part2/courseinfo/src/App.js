import React from 'react'

const App = (props) => {
  const { course } = props

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(courses => <li key={courses.exercises}>{courses.name} {courses.exercises}</li>)}
      </ul>
    </div>
  )
}

export default App