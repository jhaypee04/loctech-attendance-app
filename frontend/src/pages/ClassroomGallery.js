
// components
import Admin from "../components/AdminCard";
import InstructorCard from "../components/InstructorCard";

const ClassroomGallery = ({userRole, instructorInfo,classrooms, handleClick}) => {


  return (
    <>
      <main className="bg-gray-500">
            {userRole === "instructor" && <InstructorCard classrooms={classrooms}  handleClick={handleClick}/>}
            {userRole === "admin" && <Admin instructorInfo={instructorInfo} />}
      </main>
    </>
  );
};

export default ClassroomGallery;
