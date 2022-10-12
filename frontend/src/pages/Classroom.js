import { useState } from "react";

// components
import ModulesForm from "../components/ModuleForm";
import ModulesRegister from "../components/ModulesRegister";
import MarkAttendance from "../components/MarkAttendance";
import AttendanceRegister from "../components/AttendanceRegister";
import NewStudent from "../components/NewStudent";
import StudentRegister from "../components/StudentRegister";

const Classroom = ({classname}) => {
  const [showTab, setShowTab] = useState("tab1");

  const Tabs = [
    { id: "tab1", tabName: "Module Form" },
    { id: "tab2", tabName: "Module Register" },
    { id: "tab3", tabName: "Mark Attendance" },
    { id: "tab4", tabName: "Attendance Register" },
    { id: "tab5", tabName: "+New Student" },
    { id: "tab6", tabName: "Students Register" }
  ];

  const handleClick = (id) => {
    setShowTab(id);
  };

  console.log(classname)

  return (
    <>
    {/* Header */}
    <header className="bg-slate-500 text-white">
      <h1>{classname}</h1>
    </header>
      {/* Nav */}
      <div className="Nav bg-gray-100 p-4 flex overflow-x-scroll text-center cursor-pointer">
        {Tabs.map((tab) => {
          return (
            <span
              key={tab.id}
              onClick={() => {
                handleClick(tab.id);
              }}
              className="bg-gray-200 mx-2 p-2"
            >
              {tab.tabName}
            </span>
          );
        })}
      </div>

      {/* Tab */}

      <div className="bg-gray-100 my-2 py-2">
        {showTab === "tab1" && <ModulesForm classname={classname} />}
        {showTab === "tab2" && <ModulesRegister classname={classname} />}
        {showTab === "tab3" && <MarkAttendance classname={classname} />}
        {showTab === "tab4" && <AttendanceRegister classname={classname} />}
        {showTab === "tab5" && <NewStudent classname={classname} />}
        {showTab === "tab6" && <StudentRegister classname={classname} />}
      </div>
    </>
  );
};
export default Classroom;
