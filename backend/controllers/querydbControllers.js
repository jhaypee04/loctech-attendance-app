const model = require('../model')

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

function findStudentAndUpdate( object){
    // console.log(`Email from app.post: ${email}, Classroom from post: ${object._id}. Outside app.post`)
    model.Students.find()
    .then((docStudent)=>{
        const studentId = docStudent._id
        model.Students.findByIdAndUpdate(
            studentId,
            { $push: object},
            { new: true, useFindAndModify: false },
            function(err){
                if(err){
                    console.log("Students Update Error: "+ err)
                }
                else{
                    console.log("Students Update success")
                }
            }
        )
    })
}

module.exports = {
    findInstructorAndUpdate,
    findStudentAndUpdate
}