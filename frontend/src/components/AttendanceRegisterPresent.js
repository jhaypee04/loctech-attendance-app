import { useState } from "react";

const AttendanceRegisterPresent = () => {
  const [showAccordion, setShowAccordion] = useState(false);
  const [showInnerAccordion, setShowInnerAccordion] = useState(false);

  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Present Students</div>

        <div>
          {/* Accordion */}
          <div className="bg-white mt-2 py-2">
            <div className="bg-gray-200 mx-2 ">
              <h1
                className="bg-gray-300 border-b-2 border-white text-center cursor-pointer"
                onClick={() => {
                  setShowAccordion(!showAccordion);
                }}
              >
                Week 1
              </h1>

              {showAccordion && (
                <div className="pb-1 bg-gray-400">
                  <h2
                    className="bg-gray-400 border-b-2 my-1 mx-2 pl-4 text-white"
                    onClick={() => {
                      setShowInnerAccordion(!showInnerAccordion);
                    }}
                  >
                    Monday
                  </h2>
                  {showInnerAccordion && (
                    <div>
                      <h3 className="bg-gray-50 my-1 mx-4 pl-2">Michael</h3>
                      <h3 className="bg-gray-50 my-1 mx-4 pl-2">Raymond</h3>
                      <h3 className="bg-gray-50 my-1 mx-4 pl-2">Daniel</h3>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceRegisterPresent;
