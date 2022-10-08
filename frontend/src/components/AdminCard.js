import { useState } from "react";
import { Link } from "react-router-dom";

const AdminCard = () => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <>
      <div className="bg-gray-100 mx-2 p-4">
        <h1 className="bg-gray-200 text-center p-2">Instructor Name</h1>

        {/* Accordion */}
        <div className="bg-white mt-2 py-2">
          <div className="bg-gray-200 m-2 ">
            <h1
              className="bg-gray-300 border-b-2 border-white text-center cursor-pointer"
              onClick={() => {
                setShowAccordion(!showAccordion);
              }}
            >
              Select a Course
            </h1>

            {showAccordion && (
              <div className="pb-1">
                <Link to="/classroom">
                  <h3 className="bg-gray-50 my-1 mx-4 pl-2">Reactjs</h3>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCard;
