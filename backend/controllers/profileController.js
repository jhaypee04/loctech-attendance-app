const model = require('../model')

const getInstructorClassrooms = async (req, res) => {}

const getInstructors = async (req, res) => {
    const user = await model.User.find().populate('classrooms')
    res.status(200).json({user})
}

const createNewClassroom = async (req, res) => {
    const classroom = await model.Classroom.create({...req.body})
    // updating to user collection
    findInstructorAndUpdate("johnpauledozie004@gmail.com", {classrooms: classroom._id})
    res.status(200).json({classroom})
}

const createModule = async (req, res) => {
    const module = await model.Module.create({...req.body})
    res.status(200).json({module})
}

const getModules = async (req, res) => {}

const createAttendance = async (req, res) => {
    const attendance = await userProfile.Attendance.create({...req.body})
    res.status(200).json({attendance})
}

const getAttendance = async (req, res) => {}

const createNewStudent = async (req, res) => {
    const student = await model.Students.create({...req.body})
    res.status(200).json({student})
}

const getStudents = async (req, res) => {}

module.exports = {
    getInstructorClassrooms,
    getInstructors,
    createNewClassroom,
    createModule,
    getModules,
    createAttendance,
    getAttendance,
    createNewStudent,
    getStudents
}

// Read and Update Operation
function findInstructorAndUpdate(email, object){
    // console.log(`Email from app.post: ${email}, Classroom from post: ${object._id}. Outside app.post`)
    model.User.findOne({email})
    .then((docInstructor)=>{
        const InstructorId = docInstructor._id
        model.User.findByIdAndUpdate(
            InstructorId,
            { $push: object},
            { new: true, useFindAndModify: false },
            function(err){
                if(err){
                    console.log("Instructor Update Error: "+ err)
                }
                else{
                    console.log("Instructor Update success")
                }
            }
        )
    })
}