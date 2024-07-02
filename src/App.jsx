import { useState } from 'react'

import './App.css'


function App() {
  /*const name='shawon';
  console.log(name,"name");
  const skills=["js","React","Redux"];*/
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([
    {id: "1", name: "Mahir"},
    {id: "2" , name:"Nahid"},
  ]);
  
  const [editMode,setEditMode] = useState(false);
  
  const [editableStudent, setEditableStudent] = useState(null);
  
  const submitHandler = (event) => {
    event.preventDefault();
    if(studentName.trim() === "")
      return alert('Please provide a valid name');
    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName
    }
    setStudents([...students,newStudent]);
    setStudentName("");
  };

  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
  };

  const updateHandler = () => {
    /*const targetedIndex= students.findIndex(
      (student) => student.id === editableStudent.id,

    );*/
    const updatedStudentList =students.map((student)=>{
      if(student.id=== editableStudent.id){
        return {...student, name: studentName};
        //student.name = studentName;
      }
      return student;
    });
    setStudents(updatedStudentList);
    setStudentName('');
    setEditMode(false);
    setEditableStudent(null);
  };

  const removeHandler = (studentId) => {
    const updatedStudentList = students.filter(
     (student)=> student.id!=studentId,
    );
    setStudents(updatedStudentList);
  };
  

return (
 <div className="App">
  <form onSubmit={submitHandler} className="form">
    <input type="text" value={studentName} 
    onChange ={(e)=> setStudentName(e.target.value)} />
  <button type="submit">
    {editMode ? "Update Student" : "Create Student"}
  </button>
  </form>
  <div className="student-section">
    <div className="list all-list">
      <h2>All students</h2>
      <ul>
        {students.map(student=>(
          <li className="list-item" key={student.id}> 
          <span>{student.name}</span>
          <button onClick ={() => editHandler(student)}>
            Edit</button>
          <button onClick = { () => removeHandler(student.id)}>
            Remove
          </button>
          <button>
            Sent to Present List
          </button>
          <button>
            Sent to Absent List
          </button>
          </li>
        ))}
      </ul>
    </div>
    <div className="list present-list">
    <h2>Present students</h2>
    </div>
     <div className="list absent-list">
     <h2>Absent students</h2>
     </div>


  </div>
  
</div>
);
  
}

export default App
