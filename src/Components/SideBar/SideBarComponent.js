import React from 'react';
import { FaHome, FaTachometerAlt, FaPlane, FaVideo, FaList } from 'react-icons/fa';
// import './Sidebar.css'; Import the CSS file

const SidebarComponent = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h2 className="sidebar-heading">Main</h2>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <FaHome className="sidebar-icon" />
                        <span>Home</span>
                    </li>
                    <li className="sidebar-item">
                        <FaTachometerAlt className="sidebar-icon" />
                        <span>Dashboard</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h2 className="sidebar-heading">Services</h2>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <FaPlane className="sidebar-icon" />
                        <span>Airports</span>
                    </li>
                    <li className="sidebar-item">
                        <FaVideo className="sidebar-icon" />
                        <span>Videos</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h2 className="sidebar-heading">Others</h2>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <FaList className="sidebar-icon" />
                        <span>List 1</span>
                    </li>
                    <li className="sidebar-item">
                        <FaList className="sidebar-icon" />
                        <span>List 2</span>
                    </li>
                    <li className="sidebar-item">
                        <FaList className="sidebar-icon" />
                        <span>List 3</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SidebarComponent;
