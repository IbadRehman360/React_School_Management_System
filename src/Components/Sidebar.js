import React, { useState } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';
import './styles/style.css';

function Sidebar() {
  const [expanded, setExpanded] = useState(true); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <SideNav onSelect={selected => {
        console.log(selected);
        navigate('/' + selected)
      }}
      className="bg-danger">
        <SideNav.Toggle onClick={toggleSidebar} />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="Dashboard">
            <NavIcon><i className="fa-solid fa-gauge" style={{ fontSize: "1.75em" }} /></NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="Enrollment">
            <NavIcon><i className="fas fa-duotone fa-book" style={{ fontSize: "1.75em" }} /></NavIcon>
            <NavText>Course Enrollment</NavText>
          </NavItem>
          <NavItem eventKey="Classes">
            <NavIcon><i className="fas fa-duotone fa-person-chalkboard" style={{ fontSize: "1.75em" }} /></NavIcon>
            <NavText>My Classes</NavText>
          </NavItem>
          <NavItem eventKey="Attendence">
            <NavIcon><i className="fa-solid fa-clipboard-user" style={{ fontSize: "1.75em" }} /></NavIcon>
            <NavText>Attendence</NavText>
          </NavItem>
          <NavItem eventKey="Assignment">
            <NavIcon><i className="fa-sharp fa-solid fa-pen-to-square" style={{ fontSize: "1.75em" }} /></NavIcon>
            <NavText>Assignment</NavText>
          </NavItem>
          <NavItem eventKey="Results">
            <NavIcon><i className="fa-solid fa-square-poll-vertical" style={{ fontSize: "1.75em" }} /></NavIcon>
            <NavText>Results</NavText>
          </NavItem>
          <NavItem eventKey="Fee">
            <NavIcon><i className="fa-solid fa-sack-dollar" style={{ fontSize: "1.75em" }} /></NavIcon>
            <NavText>Fee</NavText>
          </NavItem>
     
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default Sidebar;
