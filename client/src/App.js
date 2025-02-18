import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NameHidingForm from "./pages/auth/NameHidingForm";
import DonorForm from "./pages/auth/DonorForm";
import Profile from "./pages/auth/Profile";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// react-router-dom is used for routing

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/NameHidingForm" element={<NameHidingForm />} />
        <Route path="/DonorForm" element={<DonorForm />} />
      </Routes>
    </>
  );
}
// basic routing is done here
// empty and fragment tags are used to wrap the routes

export default App;
