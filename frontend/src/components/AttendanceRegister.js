import { useState } from "react";

// components
import AttendanceRegisterPresent from "./AttendanceRegisterPresent";
import AttendanceRegisterAbsent from "./AttendanceRegisterAbsent";

const AttendanceRegister = () => {
  const [showTab, setShowTab] = useState("tab4Present");

  const Tabs = [
    { id: "tab4Present", tabName: "Present" },
    { id: "tab4Absent", tabName: "Absent" }
  ];

  const handleClick = (id) => {
    setShowTab(id);
  };

  return (
    <>
      <div className="container bg-white mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">AttendanceRegister</div>

        {/* Nav */}
        <div className="Nav bg-gray-100 p-4 text-center cursor-pointer">
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
          {showTab === "tab4Present" && <AttendanceRegisterPresent />}
          {showTab === "tab4Absent" && <AttendanceRegisterAbsent />}
        </div>
      </div>
    </>
  );
};

export default AttendanceRegister;
