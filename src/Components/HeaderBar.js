import React from 'react';
import profile from "../Components/assets/customer01.jpg";
import './styles/style.css';

function HeaderBar() {
  return (
    <div className="topbar d-flex justify-content-between">
        <div class="search">
            <label>
                <input type="text" className="pe-4" placeholder="Search here" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </label>
        </div>

        <div className="user">
            <img src={profile}  alt="Profile Image" />
        </div>
    </div>
  );
}

export default HeaderBar;