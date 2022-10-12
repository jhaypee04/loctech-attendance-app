const express = require('express')
const router = express.Router()
// controller functions
const {
    getSingleClassroom,
    getInstructors,
    createNewClassroom,
    createModule,
    getModules,
    createAttendance,
    getAttendanceOfStudents,
    createNewStudent,
    getStudents
} = require('../controllers/profileController')

// classroomGallery route
// instructorCard route
router.get('/singleclassroom:classname', getSingleClassroom)
// adminCard route
router.get('/instructors', getInstructors)

// createNewClassroom route
router.post('/createnewclassroom', createNewClassroom)

// classroom routes
// module form route
router.post('/moduleform', createModule)
// modules register
router.get('/moduleregister:classname', getModules)
// mark attendance
router.post('/markattendance', createAttendance)
// attendance register
router.get('/attendance', getAttendanceOfStudents)
// new student
router.post('/newstudent', createNewStudent)
// student register
router.get('/studentregister', getStudents)

module.exports = router