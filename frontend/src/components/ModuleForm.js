import { useState } from 'react'

const ModuleForm = (prop) => {
  const nameOfClass = prop.classname
  const [weekNo, setWeekNo] = useState('week1') 
  const [dayOfModule, setDayOfModule] = useState('Monday') 
  const [titleOfModule, setTitleOfModule] = useState('') 
  const [classname, setClassname] = useState(nameOfClass) 

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({weekNo,dayOfModule,titleOfModule,classname})

    const response = await fetch('http://localhost:4000/loctech/user/profile/moduleform', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({weekNo,dayOfModule,titleOfModule,classname})
    })
    const json = await response.json()
    if(response.ok){
        console.log(json)
    }
  }


  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Module Form</div>

        <form onSubmit={handleSubmit} className="bg-gray-200 my-1 px-2 py-2">
          <div className="bg-gray-300 my-2 sm:flex sm:justify-between px-2">
            <label>Choose the Week</label>
            <select 
              onChange={(e) => setWeekNo(e.target.value)}
              value={weekNo}
              name="weekNo" className="sm:w-2/4 w-full bg-gray-400 ">
              <option value="week1">Week 1</option>
              <option value="week2">Week 2</option>
            </select>
          </div>

          <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
            <label>Select Day of Module</label>
            <select 
              onChange={(e) => setDayOfModule(e.target.value)}
              value={dayOfModule}
              name="dayOfModule"
              className="sm:w-2/4 w-full bg-gray-400 "
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
            </select>
          </div>

          <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
            <label>Insert Module</label>
            <input
              type="text"
              onChange={(e) => setTitleOfModule(e.target.value)}
              value={titleOfModule}
              name="titleOfModule"
              className="sm:w-3/4 w-full border-4 border-gray-400 rounded-full p-1 px-4"
            />
          </div>
          {/* incude a hidden field for classname */}
          <input
            type="hidden"
            onChange={(e) => setClassname(e.target.value)}
            value={classname}
            name="classname"
            className="sm:w-3/4 w-full border-4 border-gray-400 rounded-full p-1 px-4"
          />

          <div className="text-center">
            <input
              type="submit"
              className="bg-gray-300 border-2 border-gray-400 mt-2 py-0.5 px-4 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ModuleForm;
