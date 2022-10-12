import { useState } from 'react'

const studentNames = [
  {id: 0,name: 'Moses'},
  {id: 1,name: 'JohnPaul'},
  {id: 2,name: 'Elisha'},
  {id: 3,name: 'Jeremiah'},
  {id: 4,name: 'Julius'},
  {id: 5,name: 'Anthony'},
  {id: 6,name: 'Ada'}
]

const MarkAttendance = (prop) => {
  const nameOfClass = prop.classname
  const [weekNo, setWeekNo] = useState('week1') 
  const [dayOfAttendance, setDayOfAttendance] = useState('Monday')
  const [ checkBox, setCheckBox ] = useState( new Array(studentNames.length).fill(false))
  const [classname, setClassname] = useState(nameOfClass)

  const handleCheckBoxes = (id) => {
    const checkedBox = checkBox.map((item, index) =>
    index === id ? !item : item
    );
    setCheckBox(checkedBox);
  }
  // console.log(checkBox)
  var checkedName = []

  checkBox.filter((trueDays, trueDaysIndex)=>{
    if( studentNames.indexOf(studentNames.at(trueDaysIndex)) === trueDaysIndex && trueDays){
      checkedName[trueDaysIndex] = studentNames.at(trueDaysIndex).name
        // return trueDays
    }
    return 0
  })
    
  // console.log(checkedName)
  // console.log(chosenDays)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({weekNo,dayOfAttendance,checkedName,classname})

    const response = await fetch('http://localhost:4000/loctech/user/profile/markattendance', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({weekNo,dayOfAttendance,checkedName,classname})
    })
    const json = await response.json()
    if(response.ok){
        console.log(json)
    }
  }

  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Mark Attendance</div>

        <form onSubmit={handleSubmit} className="bg-gray-200 my-1 px-2 py-2">
          <div className="sm:flex sm:justify-between bg-gray-300 px-2">
            <label>Select a Week</label>
            <select 
              onChange={(e) => setWeekNo(e.target.value)}
              value={weekNo}
              name="week" className="sm:w-20 w-full bg-gray-400 ">
              <option value="week 1">Week 1</option>
            </select>
          </div>

          <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
            <label>Select Day of Attendance</label>
            <select 
              onChange={(e) => setDayOfAttendance(e.target.value)}
              value={dayOfAttendance}
              name="dayOfAttendance"
              className="sm:w-20 w-full bg-gray-400 "
            >
              <option value="Monday">Monday</option>
            </select>
          </div>

          <div className="bg-gray-300 mt-4 pb-1">
            <h1 className="border-b-2 border-white text-center">
              Mark Students
            </h1>

            <div>
              {studentNames.map((studentName)=>{
                const { id, name } = studentName
                return(
                  <div 
                    key={id}
                    className="bg-gray-400 flex justify-between mx-2 my-1 px-2">
                    <label>{name}</label>
                    <input type="checkbox" 
                      name={name}
                      id={name}
                      checked={checkBox[id]}
                      onChange={() => handleCheckBoxes(id)}
                      // onClick={(e) => clickHandler(e, weekday)}
                    />
                  </div>
                )
              })}
            </div>
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

export default MarkAttendance;
