import { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'
import { useClassnameContext } from './hooks/useClassnameContext'
// component
import Navbar from "./components/Navbar";
// pages
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ClassroomGallery from "./pages/ClassroomGallery";
import CreateNewClassroom from "./pages/CreateNewClassroom";
import Classroom from "./pages/Classroom";

export default function App() {
  const { user } = useAuthContext()
  const { dispatch } = useClassnameContext()
  const [userRole, setUserRole] = useState(null)
  const [instructorInfo, setInstructorInfo] = useState(null)
  const [classrooms, setClassrooms] = useState(null)
  const [classname, setClassName] = useState(null)

  useEffect(()=>{
    const getUsers = async () => {
      const response = await fetch('http://localhost:4000/loctech/user/profile/instructors')
      const json = await response.json()
      if(response.ok){
        const users = json.user
        console.log(users)

        users.map((userDoc)=>{
          // console.log(user.role)
          if(userDoc.username === user.username){
            console.log(userDoc)
            if(userDoc.role === "instructor"){
              console.log((userDoc.role))
              setUserRole("instructor")
              return userDoc
            }
            if(userDoc.role === "admin"){
              console.log((userDoc.role))
              setUserRole("admin")
              return userDoc
            }
          }
          
          return userDoc
        })

        const instructors = users.filter((user)=>{
          if(user.role === "instructor"){
            console.log((user.role))
            return user
          }
          return null
        })

        setInstructorInfo(instructors)

        instructors.filter((instructor)=>{
          if(instructor.username === user.username){
            console.log((instructor.username))
            setClassrooms(instructor.classrooms)
            return instructor
          }
          return null
        })
      }
    }
    getUsers()
  },[user,dispatch])

  
  
  console.log(instructorInfo)
  console.log((classrooms))
  console.log((classname))

  const handleClick = (classname) => {
    console.log(classname)
    setClassName(classname)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/classroomgallery" element={<ClassroomGallery userRole={userRole} instructorInfo={instructorInfo} classrooms={classrooms} handleClick={handleClick}/>} />
          <Route path="/createnewclassroom" element={<CreateNewClassroom />} />
          <Route path={`/classroom/:${classname}`} element={<Classroom classname={classname}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
