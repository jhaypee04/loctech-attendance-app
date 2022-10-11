import { useEffect,useState } from 'react'

const CreateNewClassroom = () => {
  const [classname, setClassname] = useState('')
  const [classdays, setClassdays] = useState('')
  const [classduration, setClassduration] = useState('')

  const weekdays = [
    {id: 0,name: 'Monday'},
    {id: 1,name: 'Tuesday'},
    {id: 2,name: 'Wednesday'},
    {id: 3,name: 'Thursday'},
    {id: 4,name: 'Friday'},
    {id: 5,name: 'Saturday'},
    {id: 6,name: 'Sunday'}
  ]

  const [ checkBox, setCheckBox ] = useState( new Array(weekdays.length).fill(false))

  const handleCheckBoxes = (id) => {
    const checkedBox = checkBox.map((item, index) =>
    index === id ? !item : item
    );
    setCheckBox(checkedBox);
}
console.log(checkBox)
var checkedDays = []

// Succeeded in reducing the values in the new array to have only true values
// Then, later also succeeded in creating a second array to have only the days from
// the weekdays' arrays as compared to the number of true values from the bool_values array
const chosenDays = checkBox.filter((trueDays, trueDaysIndex)=>{
    if( weekdays.indexOf(weekdays.at(trueDaysIndex)) === trueDaysIndex && trueDays){
        checkedDays[trueDaysIndex] = weekdays.at(trueDaysIndex).name
        return trueDays
    }
    // else{
    //         checkedDays[trueDaysIndex] = ''
    //         return ''
    //     }
    return 0
    })
    
    console.log(checkedDays)
    console.log(chosenDays)

  // const [list, setList] = useState([])
  

  // const clickHandler = (e, weekday) => {

  //   if (e.target.checked) {
  //       setList(prevState => [
  //           ...prevState,
  //           weekday
  //       ])
  //   }
  // }
//   useEffect(() => {
//     // Perform whatever you want to do when list changes here
//     console.log(list);

// }, [list])

  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">+Create New Classroom</div>

        <form className="bg-gray-200 my-1 px-2 py-2">
          <div className="sm:flex sm:justify-between bg-gray-300 px-2">
            <label>Class Name</label>
            <input
              type="text"
              onChange={(e) => setClassname(e.target.value)}
              value={classname}
              className="sm:w-3/4 w-full border-gray-400 border-2 pl-2"
            />
          </div>

          <div className="bg-gray-300 mt-4 pb-1">
            <h1 className="border-b-2 border-white text-center">
              Select The Class Days
            </h1>

            <div>
                {weekdays.map((weekday)=>{
                  const { id, name } = weekday
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

          <div className="sm:flex sm:justify-between bg-gray-300 px-2">
            <label>Number of Weeks</label>
            <input
              type="number"
              onChange={(e) => setClassduration(e.target.value)}
              value={classduration}
              className="sm:w-3/4 w-full border-gray-400 border-2 pl-2"
            />
          </div>

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

export default CreateNewClassroom;
