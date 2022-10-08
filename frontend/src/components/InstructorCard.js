import { Link } from "react-router-dom";

const InstructorCard = () => {
  return (
    <>
      <div className="bg-gray-100 mx-2 p-4">
        <Link to="/classroom">
          <h1 className="bg-gray-200 text-center p-2">Course Name</h1>
          <div className="bg-gray-200 text-center p-2 mt-1 ">
            <span>No of Students: </span>
            <span>20</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default InstructorCard;
