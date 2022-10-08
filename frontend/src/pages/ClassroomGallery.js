import { useState } from "react";

// components
import Admin from "../components/AdminCard";
import InstructorCard from "../components/InstructorCard";

const ClassroomGallery = () => {
  const [role, setRole] = useState("instructor");
  return (
    <>
      <main className="bg-gray-500">
        <div className="grid sm:grid-cols-3 gap-2  p-4">
          <div className="cards ">
            {role === "instructor" && <InstructorCard />}
            {role === "admin" && <Admin />}
          </div>
          <div className="cards ">
            {role === "instructor" && <InstructorCard />}
            {role === "admin" && <Admin />}
          </div>
        </div>
      </main>
    </>
  );
};

export default ClassroomGallery;
