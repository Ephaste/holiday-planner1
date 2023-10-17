// import students from "../../utils/studentsDatabase";
// export const patch =("/:id", (req, res) => {
//     const studentId = parseInt(req.params.id);
//     const updatedStudent = req.body;

//     const currentStudent = students.find((x) => x.studentId === studentId);

//     if (currentStudent) {
//         if (updatedStudent.firstName) {
//             currentStudent.firstName = updatedStudent.firstName;
//         }
//         if (updatedStudent.lastName) {
//             currentStudent.lastName = updatedStudent.lastName;
//         }
//         if (updatedStudent.Gender) {
//             currentStudent.Gender = updatedStudent.Gender;
//         }

//         res.status(200).json(currentStudent);
//     } else {
//         res.statusMessage = "Student does not exist";
//         res.sendStatus(404);
//     }
// });
//Update User By ID
import { students} from "../../models";
export const UpdateData = async (req, res) => {
  try {
    let student = await students.findById(req.params.Id);
    if (!student) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "User not found" });
    }
    Object.assign(student, req.body);
    await student.save();
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};