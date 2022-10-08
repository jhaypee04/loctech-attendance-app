import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/classroomgallery" element={<ClassroomGallery />} />
          <Route path="/createnewclassroom" element={<CreateNewClassroom />} />
          <Route path="/classroom" element={<Classroom />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
