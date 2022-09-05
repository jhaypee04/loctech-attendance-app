import { useState } from "react";
import Navbar from "./Navbar";
import chooseOtherDays from './db/chooseOtherDays.js'

const AddNewClassroom = () => {
    const [ classname, setClassName ] = useState('')
    const [ section, setSection] = useState('Morning')
    const [ days, setDays ] = useState('Monday, Wednesday, Friday')
    const [ number_of_weeks, setNumber_of_weeks ] = useState('')
    const [ toggleOthers, setToggleOthers ] = useState(false)
    const [ checkBox, setCheckBox ] = useState( new Array(chooseOtherDays.length).fill(false))

    // Success in Handling the checkboxes!! To return either true or false
    const handleCheckBoxes = (id) => {
        const checkedBox = checkBox.map((item, index) =>
        index === id ? !item : item
        );
        setCheckBox(checkedBox);
    }
    
    // console.log(checkBox)
    // Next on: We create an array that has the actual values of the day.

    var checkedDays = []

        // Succeeded in reducing the values in the new array to have only true values
        // Then, later also succeeded in creating a second array to have only the days from
        // the chooseOtherDays' arrays as compared to the number of true values from the bool_values array
        const chosenDays = checkBox.filter((trueDays, trueDaysIndex)=>{
            if( chooseOtherDays.indexOf(chooseOtherDays.at(trueDaysIndex)) === trueDaysIndex && trueDays){
                checkedDays[trueDaysIndex] = chooseOtherDays.at(trueDaysIndex).name
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

    const handleDaysAndOther = (e) => {
        setDays(e.target.value)
        if (e.target.value === 'others') {
            // console.log('Others was selected')
            setToggleOthers(true)
            
        }
        if (e.target.value !== 'others') {
            setToggleOthers(false)
        }
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({classname,section,days,number_of_weeks})

  }
    return ( 
        <>
            <Navbar />
            <div className="bg-two-circles bg-contain test">
                <form onSubmit={handleSubmit} className='form'>
                    <label htmlFor="classname">Class Name: </label>
                    <input type="text" id='classname' name='classname' placeholder='eg. Web Design and Development' onChange={(e)=>{setClassName(e.target.value)}} value={classname}/>

                    <label htmlFor="section">Section: </label>
                    <select className="" id="section"  onChange={(e)=>{setSection(e.target.value)}} value={section}>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>

                    <label htmlFor="days">Days</label>
                    <select className="" id="days" onChange={handleDaysAndOther} value={days}>
                        <option value="mon_tues_thur">Monday, Wednesday, Friday</option>
                        <option value="wed_fri_sat">Tuesday, Thursday</option>
                        <option value="saturday">Saturday</option>
                        <option value="others">Others</option>
                    </select>

                    { toggleOthers && 
                        <div className="chooseDays">
                        <h3>Choose Days</h3>

                            <div className="formControl sm:flex ">
                                { chooseOtherDays.map((oneDay) => {
                                        const { id, name } = oneDay
                                        return (
                                            <div key={id}  className='ml-4'>
                                                <input 
                                                    type="checkbox" 
                                                    name={name} 
                                                    id={name}
                                                    checked={checkBox[id]}
                                                    onChange={() => handleCheckBoxes(id)}
                                                />
                                                <label htmlFor={name}>{name}</label>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    }

                    <label htmlFor="number_of_weeks">Number of Weeks</label>
                    <input type="number" className="" name="number_of_weeks" id="number_of_weeks" placeholder="insert number" onChange={(e)=>{setNumber_of_weeks(e.target.value)}} value={number_of_weeks}></input>

                    <input type="submit" value="Register" className=''/>
                </form>
            </div>
        </>
     );
}
 
export default AddNewClassroom;