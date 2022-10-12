import { useState } from "react";
import { Link } from "react-router-dom";

const AdminCard = ({instructorInfo}) => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <>
    <div className="grid sm:grid-cols-3 gap-2  p-4">
        {instructorInfo && instructorInfo.map((instructorData)=>{
          return(
            <div key={instructorData._id} className="bg-gray-100 mx-2 p-4">
              <h1 className="bg-gray-200 text-center p-2">{instructorData.username}</h1>

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
          )
        })}
      
      </div>
    </>
  );
};

export default AdminCard;
