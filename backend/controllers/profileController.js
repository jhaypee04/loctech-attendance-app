const model = require('../model')
const {
    findInstructorAndUpdate,
    findStudentAndUpdate
} = require('./querydbControllers')

const getInstructorClassrooms = async (req, res) => {}

const getInstructors = async (req, res) => {
    const user = await model.User.find().populate('classrooms').populate('students')
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

const getModules = async (req, res) => {
    const modules = await model.Module.find()
    res.status(200).json({modules})
}

const createAttendance = async (req, res) => {
    const attendance = await model.Attendance.create({...req.body})
    // updating to attendance collection
    findStudentAndUpdate( {attendance: attendance._id})
    res.status(200).json({attendance})
}

const getAttendanceOfStudents = async (req, res) => {
    const studentAttendance = await model.Students.find().populate('attendance')
    res.status(200).json({studentAttendance})
}

const createNewStudent = async (req, res) => {
    const student = await model.Students.create({...req.body})
    // updating to user collection
    findInstructorAndUpdate("johnpauledozie004@gmail.com", {students: student._id})
    res.status(200).json({student})
}

const getStudents = async (req, res) => {
    const students = await model.Students.find()
    res.status(200).json({students})
}

module.exports = {
    getInstructorClassrooms,
    getInstructors,
    createNewClassroom,
    createModule,
    getModules,
    createAttendance,
    getAttendanceOfStudents,
    createNewStudent,
    getStudents
}

