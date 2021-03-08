import React from 'react';

const Header = (props) => {
  return (
    <header class="studenta">
      <h1>{props.title}</h1>
      <span className="stats">CURRENT : {props.totalStudents}</span>
    </header>
  );
};

const Student = (props) => {
  return (
    <div className="student">
      <span className="student-name">
        <button
          className="remove-student"
          onClick={() => props.removeStudent(props.id)}
        >
          ✖
        </button>
        {props.studentName}
      </span>
    </div>
  );
};

class DevList extends React.Component {
  state = {
    students: [
      {
        name: 'Ryan M',
        id: 1,
      },
      {
        name: 'Nathaniel S',
        id: 2,
      },
      {
        name: 'Narty K',
        id: 3,
      },
      {
        name: 'Nick M',
        id: 4,
      },
      {
        name: 'Michael F',
        id: 5,
      },
      {
        name: 'Ashley',
        id: 6,
      },
    ],
  };

  handleRemoveStudent = (id) => {
    this.setState((prefState) => {
      return {
        students: prefState.students.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="studentboard">
        <Header title="DEVS" totalStudents={this.state.students.length} />
        {this.state.students.map((student) => (
          <Student
            studentName={student.name}
            id={student.id}
            key={student.id.toString()}
            removeStudent={this.handleRemoveStudent}
          />
        ))}
      </div>
    );
  }
}
export default DevList;
