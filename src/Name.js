import React from "react";
import { useState } from "react";

const Name = () => {
  const array = ["Jamunashri", "Keerthana", "Brindha", "Kavitha"];
  const [studentName, setStudentName] = useState("Jamuna");
  return (
    <>
      Student name change form
      <div>{studentName}</div>
      <button
        onClick={() =>
          // randomly change the student name
          setStudentName(array[Math.floor(Math.random() * array.length)])
        }
      >
        Change Student Name
      </button>
    </>
  );
};

export default Name;

// Change Stuudent Name

// Student name change form

// {studentName}

// button => Change  Student Name

// onClick => chaged the student  name

// 10 *  4 = 40
// array[4]
//Math.floor(Math.random() * array.length)

// react codesandbox
