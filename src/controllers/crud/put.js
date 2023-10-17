//const students = require("../../utils/studentsDatabase.js");
import students from "../../utils/studentsDatabase";
//Put api

// students = require("../..utils/studentsDatabase");
export  const putData= async(req, res) =>{
    let studentId = req.params.id;
    let student =req.body;
    let currentStudent = students.filter((x)=> x.studentId = studentId)[0];
    if (currentStudent){
//let isValid =validateStudent(student);
// if(isvalid = ""){
currentStudent.firstName =student.firstName;
currentStudent.lastName = student.lastName;
currentStudent.Gender = student.gender;
await res.status(200).send(students)}
    };
    //module.exports = putData;
    //export default putData;