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

function findClassroomAndUpdate(classname, object){
    // console.log(`Email from app.post: ${email}, Classroom from post: ${object._id}. Outside app.post`)
    model.Classroom.findOne({classname})
    .then((docClassroom)=>{
        const classroomId = docClassroom._id
        model.Classroom.findByIdAndUpdate(
            classroomId,
            { $push: object},
            { new: true, useFindAndModify: false },
            function(err){
                if(err){
                    console.log("Classroom Update Error: "+ err)
                }
                else{
                    console.log("Classroom Update success")
                }
            }
        )
    })
}

module.exports = {
    findInstructorAndUpdate,
    findClassroomAndUpdate
}