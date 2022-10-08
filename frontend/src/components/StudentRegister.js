import { useState } from "react";

const StudentRegister = () => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Students Register</div>

        <div>
          {/* Accordion */}
          <div className="bg-white mt-2 py-2">
            <div className="bg-gray-200 m-2 ">
              <h1
                className="bg-gray-500 text-white border-b-2 border-white text-center cursor-pointer"
                onClick={() => {
                  setShowAccordion(!showAccordion);
                }}
              >
                Williams Richard
              </h1>

              {showAccordion && (
                <div className="pb-1">
                  <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
                    <h2 className="bg-gray-400 rounded-full my-1 mx-2 pl-4">
                      Student Email
                    </h2>
                    <h3 className="bg-gray-100 text-center my-1 mx-2 pl-2">
                      michael@gmail.com
                    </h3>
                  </div>

                  <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
                    <h2 className="bg-gray-400 rounded-full my-1 mx-2 pl-4">
                      Parent's Name
                    </h2>
                    <h3 className="bg-gray-100 text-center my-1 mx-2 pl-2">
                      michael's Dado
                    </h3>
                  </div>

                  <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
                    <h2 className="bg-gray-400 rounded-full my-1 mx-2 pl-4">
                      Parent's Email
                    </h2>
                    <h3 className="bg-gray-100 text-center my-1 mx-2 pl-2">
                      michaeldado@gmail.com
                    </h3>
                  </div>

                  <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
                    <h2 className="bg-gray-400 rounded-full my-1 mx-2 pl-4">
                      Parent's Phone
                    </h2>
                    <h3 className="bg-gray-100 text-center my-1 mx-2 pl-2">
                      0809ja4life
                    </h3>
                  </div>

                  <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
                    <h2 className="bg-gray-400 rounded-full my-1 mx-2 pl-4">
                      Student's Phone
                    </h2>
                    <h3 className="bg-gray-100 text-center my-1 mx-2 pl-2">
                      08012354989
                    </h3>
                  </div>

                  <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
                    <h2 className="bg-gray-400 rounded-full my-1 mx-2 pl-4">
                      Gender
                    </h2>
                    <h3 className="bg-gray-100 text-center my-1 mx-2 pl-2">
                      Male
                    </h3>
                  </div>

                  <div className="sm:flex sm:justify-between my-1 bg-gray-300 px-2">
                    <h2 className="bg-gray-400 rounded-full my-1 mx-2 pl-4">
                      Date of Birth
                    </h2>
                    <h3 className="bg-gray-100 text-center my-1 mx-2 pl-2">
                      In the beginning-Genesis 1:1
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentRegister;
