import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile";
import React from "react";

function App() {
    return (
        <div >
            <Navbar/>
            <div className="profile">
                <Profile/>
            </div>
        </div>
    );
}

export default App;
