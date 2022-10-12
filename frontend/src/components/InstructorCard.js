import { Link } from "react-router-dom";

const InstructorCard = ({classrooms,handleClick}) => {
  
  console.log(classrooms)

  

  return (
    <>
      <div className="grid sm:grid-cols-3 gap-2  p-4">
      {classrooms && classrooms.map((classroom)=>{
        const { classname } = classroom
          return(
          <div key={classroom._id} className="bg-gray-100 mx-2 p-4">
            <Link to={`/classroom/${classname}`} onClick={()=>handleClick(classname)}>
              <h1 className="bg-gray-200 text-center p-2">{classroom.classname}</h1>
              <div className="bg-gray-200 text-center p-2 mt-1 ">
                <span>No of Students: </span>
                <span>20</span>
              </div>
            </Link>
          </div>
        )
      })}
      </div>
    </>
  );
};

export default InstructorCard;
