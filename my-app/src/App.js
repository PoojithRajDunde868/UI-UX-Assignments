import React from "react";
// import Counter from "./A1.components/counter";
// import Header from "./A1.components/header";
// import UserProfile from "./A1.components/userprofile";
// import UserList from './UserList';
// import Timer from './Timer';
// import TaskList from './TaskList';
// import Wrapper from './Wrapper';
import { Routes, Route } from 'react-router-dom';
import Navbar from './A1.components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login_temp';


function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      
      
    <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
