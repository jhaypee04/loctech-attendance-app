const express = require('express')
const router = express.Router()
// controller functions
const {
    getInstructorClassrooms,
    getInstructors,
    createNewClassroom,
    createModule,
    getModules,
    createAttendance,
    getAttendance,
    createNewStudent,
    getStudents
} = require('../controllers/profileController')

// classroomGallery route
// instructorCard route
router.get('/instructorclassrooms', getInstructorClassrooms)
// adminCard route
router.get('/instructors', getInstructors)

// createNewClassroom route
router.post('/createnewclassroom', createNewClassroom)

// classroom routes
// module form route
router.post('/moduleform', createModule)
// modules register
router.get('/moduleregister', getModules)
// mark attendance
router.post('/markattendance', createAttendance)
// attendance register
router.get('/attendance', getAttendance)
// new student
router.post('/newstudent', createNewStudent)
// student register
router.get('/studentregister', getStudents)

module.exports = router