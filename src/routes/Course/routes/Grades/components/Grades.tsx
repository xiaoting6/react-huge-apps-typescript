/*globals COURSES:true */
import React, { Component } from 'react'

class Grades extends Component<any, any> {
  render() {
    let { assignments } = COURSES[this.props.params.courseId]

    return (
      <div>
        <h3>Grades</h3>
        <ul>
          {assignments.map(assignment => (
            <li key={assignment.id}>{assignment.grade} - {assignment.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Grades
