import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Profile.css";

const Profile = () => {
    return (
        <div className="row align-content-lg-center">

            <div className="col">
                <h5 className="name" >Bhumil Patel</h5>
                <p>Android and Flutter Developer</p>
            </div>
            <div className="col">
                <img src={"webIcon.jpeg"} className="rounded-circle" alt="Responsive pic" height="200px"/>
            </div>
        </div>
    )
}
export default Profile