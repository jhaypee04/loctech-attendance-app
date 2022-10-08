import { useState } from "react";

// components
import ModulesForm from "../components/ModuleForm";
import ModulesRegister from "../components/ModulesRegister";
import MarkAttendance from "../components/MarkAttendance";
import AttendanceRegister from "../components/AttendanceRegister";
import NewStudent from "../components/NewStudent";
import StudentRegister from "../components/StudentRegister";

const Classroom = () => {
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

  return (
    <>
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
        {showTab === "tab1" && <ModulesForm />}
        {showTab === "tab2" && <ModulesRegister />}
        {showTab === "tab3" && <MarkAttendance />}
        {showTab === "tab4" && <AttendanceRegister />}
        {showTab === "tab5" && <NewStudent />}
        {showTab === "tab6" && <StudentRegister />}
      </div>
    </>
  );
};
export default Classroom;
