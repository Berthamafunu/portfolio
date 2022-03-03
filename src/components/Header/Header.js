import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { saveAs } from 'file-saver';

const Header = ({ toggle }) => {

  // function handleDownloadCsv() {
  //   const { query, eventType } = queryParams;
  //   const url : string = buildUrl(`${Constants.TimeTrackerApi.BaseUrl}events/download`);
  //   eventsService.getCsv(url).then(data => {
  //     const blob = new Blob([data], {
  //       type: 'text.csv',
  //     });
  //     saveAs(blob, 'events.csv')
  //   })
  // }

  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://github.com/gurupawar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
