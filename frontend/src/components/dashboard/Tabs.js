import Attendance from "./attendance/Attendance";
import ModulesRegistry from "./modulesRegistry/ModulesRegistry";
import Student from "./students/Student";
import Week from "./weeks/Week";


const Tabs = ({ tabToggler }) => {
    // console.log(tabToggler)
    return (
        <>
            { tabToggler === 'tab1' && <Week id="tab1"/>}
            { tabToggler === 'tab2' && <ModulesRegistry id="tab2"/>}
            { tabToggler === 'tab3' && <Attendance id="tab3"/>}
            { tabToggler === 'tab4' && <Student id="tab4"/>}
        </>
     );
}
 
export default Tabs;