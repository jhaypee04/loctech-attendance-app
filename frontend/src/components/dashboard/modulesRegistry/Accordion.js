import { useState } from 'react'

const Accordion = (week) => {
    const [show, setShow] = useState(false)
    const handleClick = (no) => {
        // console.log(no)
        setShow(!show)
    }

    const { no, day1, day3, day5, module1, module3, module5 } = week
    return ( 
        <div className="accordion_container">
            <div 
                onClick={()=>{handleClick(no)}}
                className="day_and_module_header"
                >Week {no}</div>

            {show && <div className="accordion_hidden">
                <div className="day_and_module_container">
                    <aside>{day1}</aside>
                    <section>{module1}</section>
                </div>
                <div className="day_and_module_container">
                    <aside>{day3}</aside>
                    <section>{module3}</section>
                </div>
                <div className="day_and_module_container">
                    <aside>{day5}</aside>
                    <section>{module5}</section>
                </div>
            </div>}
        </div>
     );
}
 
export default Accordion;