import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfileDropdown = ({ isLoggedIn, toggleLogin }) => {
  const navigate = useNavigate();

  // Function to handle navigation to Schedule Pickup HTML page
  const handleSchedulePickup = () => {
    window.open('/SchedulePickup.html', '_blank'); // Open SchedulePickup.html in a new tab
  };

  return (
    <div className="dropdown">
      <img
        src={require('./assets/profile-pic.jpg')}
        alt="User Profile"
        className="profile-pic dropdown-toggle"
        id="profileDropdown"
        data-bs-toggle="dropdown"
      />
      <ul className="dropdown-menu" aria-labelledby="profileDropdown">
        <li>
          <Link className="dropdown-item" to="#">Profile</Link>
        </li>
        <li>
          <a className="dropdown-item" onClick={handleSchedulePickup}>Schedule Pickup</a>
        </li>
        <li>
          <a className="dropdown-item logout-item" href="#" onClick={toggleLogin}>Log Out</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
