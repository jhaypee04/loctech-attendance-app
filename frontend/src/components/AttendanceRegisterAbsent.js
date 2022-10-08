import { useState } from "react";

const AttendanceRegisterAbsent = () => {
  const [showAccordion, setShowAccordion] = useState(false);
  const [showInnerAccordion, setShowInnerAccordion] = useState(false);
  const [showDetailsAccordion, setShowDetailsAccordion] = useState(false);

  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Absent Students</div>

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
                    className="bg-gray-400 border-b-2 my-1 mx-2 pl-4 text-white cursor-pointer"
                    onClick={() => {
                      setShowInnerAccordion(!showInnerAccordion);
                    }}
                  >
                    Monday
                  </h2>
                  {showInnerAccordion && (
                    <div>
                      <h3
                        className="bg-gray-500 text-white text-center my-1 mx-4 pl-2 cursor-pointer"
                        onClick={() => {
                          setShowDetailsAccordion(!showDetailsAccordion);
                        }}
                      >
                        Michael
                      </h3>

                      {showDetailsAccordion && (
                        <>
                          <div className="sm:flex sm:justify-between my-1 mx-4  px-2">
                            <h4 className="bg-gray-300 px-2">
                              Student's Phone Number
                            </h4>
                            <h5 className="bg-gray-100 px-2">08012345678</h5>
                          </div>

                          <div className="sm:flex sm:justify-between my-1 mx-4  px-2">
                            <h4 className="bg-gray-300 px-2">
                              Parent's Phone Number
                            </h4>
                            <h5 className="bg-gray-100 px-2">08012345678</h5>
                          </div>
                        </>
                      )}

                      <h3 className="bg-gray-500 text-white text-center my-1 mx-4 pl-2">
                        Raymond
                      </h3>
                      <h3 className="bg-gray-500 text-white text-center my-1 mx-4 pl-2">
                        Daniel
                      </h3>
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

export default AttendanceRegisterAbsent;
