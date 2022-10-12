import { useState } from 'react'

const NewStudent = (prop) => {
  const nameOfClass = prop.classname
  const [studentName, setStudentName] = useState('') 
  const [studentEmail, setStudentEmail] = useState('') 
  const [parentEmail, setParentEmail] = useState('') 
  const [parentPhoneNo, setParentPhoneNo] = useState(0)
  const [studentPhoneNo, setStudentPhoneNo] = useState(0)
  const [gender, setGender] = useState('male')
  const [dob, setDob] = useState('')
  const [classname, setClassname] = useState(nameOfClass)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({studentName,studentEmail,parentEmail,parentPhoneNo,studentPhoneNo,gender,dob,classname})

    const response = await fetch('http://localhost:4000/loctech/user/profile/newstudent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({studentName,studentEmail,parentEmail,parentPhoneNo,studentPhoneNo,gender,dob,classname})
    })
    const json = await response.json()
    if(response.ok){
        console.log(json)
    }
  }

  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Add New Student</div>

        <form onSubmit={handleSubmit} className="bg-gray-200 my-1 px-2 py-2">
          <div className="sm:flex sm:justify-around">
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label>Student Name:</label>
              <input
                type="text"
                onChange={(e) => setStudentName(e.target.value)}
                value={studentName}
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
              />
            </div>

            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label>Student Email:</label>
              <input
                type="email"
                onChange={(e) => setStudentEmail(e.target.value)}
                value={studentEmail}
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
              />
            </div>
          </div>

          <div className="sm:flex sm:justify-around">
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label>Parent Name:</label>
              <input
                type="text"
                onChange={(e) => setParentEmail(e.target.value)}
                value={parentEmail}
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
              />
            </div>

            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label className="sm:w-2/4">Parent Phone No.:</label>
              <input
                type="number"
                onChange={(e) => setParentPhoneNo(e.target.value)}
                value={parentPhoneNo}
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
              />
            </div>
          </div>

          <div className="sm:flex sm:justify-around ">
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label className="sm:w-2/4">Student Phone No.:</label>
              <input
                type="number"
                onChange={(e) => setStudentPhoneNo(e.target.value)}
                value={studentPhoneNo}
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
              />
            </div>

            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2 sm:w-2/4">
              <label className="sm:w-2/4">Gender:</label>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="sm:w-2/4 w-full bg-gray-50 border-2 border-gray-400 px-1"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="">
            <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2">
              <label className="">Date of Birth:</label>
              <input
                type="date"
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                className="sm:w-3/4 w-full bg-gray-50 border-2 border-gray-400 px-1 "
              />
            </div>
          </div>

          {/* incude a hidden field for classname */}
          <input
            type="hidden"
            onChange={(e) => setClassname(e.target.value)}
            value={classname}
            className="sm:w-3/4 w-full border-4 border-gray-400 rounded-full p-1 px-4"
          />

          <div className="flex justify-center ">
            <input
              type="submit"
              className="sm:w-1/4 w-2/4 bg-gray-50 border-2 border-gray-400 px-1 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewStudent;
