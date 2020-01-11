import React, { useState } from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { Link } from "react-router-dom";
import {
  faDirections,
  faColumns,
  faCaretDown,
  faSignOutAlt,
  faSearch,
  faLevelUpAlt,
  faExclamationCircle,
  faComments,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({ logout, isAuthenticated }) => {
  const [selection, setSelection] = useState("");

  return (
    <aside>
      <div className="dashboard__sidebar">
        <div className="dashboard__logo">
          <Link to="dashboard">
            {" "}
            <img
              className=""
              src={"https://www.myways.in/visitor/img/logo/logo%20home.png"}
            />
          </Link>
        </div>
        <div className="dashboard__sidebar-grid1">
          <div
            className="dashboard__sidebar1-item mt-0"
            onClick={() => setSelection("dashboard")}
          >
            <FontAwesomeIcon icon={faColumns} className="dashboard__icon" />
            <Link to="dashboard">Dashboard</Link>
            
          </div>
          <div
            className="dashboard__sidebar1-item"
            onClick={() => setSelection("suggestion")}
          >
            <FontAwesomeIcon icon={faDirections} className="dashboard__icon" />
            <Link to="">Suggested Careers</Link>
          </div>
          <div
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
            className="dashboard__sidebar1-item"
          >
            <FontAwesomeIcon icon={faSearch} className="dashboard__icon" />
            Discover Yourself
            <FontAwesomeIcon
              icon={faCaretDown}
              className="dashboard__icon mr-0 ml-2"
            />
          </div>
          <div className="collapse list-unstyled" id="pageSubmenu">
            <div
              className="dashboard__sidebar1-item dashboard__sub-item"
              onClick={() => setSelection("cognitive")}
            >
              <FontAwesomeIcon icon={faStar} className="dashboard__sub-icon" />{" "}
              <Link to="CognitiveIntelligence">Cognitive Intelligence</Link>
            </div>
            <div className="dashboard__sidebar1-item dashboard__sub-item">
              <FontAwesomeIcon icon={faStar} className="dashboard__sub-icon" />{" "}
              <Link to="careerValues">Career Values</Link>
            </div>
            <div className="dashboard__sidebar1-item dashboard__sub-item">
              <FontAwesomeIcon icon={faStar} className="dashboard__sub-icon" />{" "}
              Work Orientation
            </div>
            <div className="dashboard__sidebar1-item dashboard__sub-item">
              <FontAwesomeIcon icon={faStar} className="dashboard__sub-icon" />
              <Link to="personalityTraits">Personality Traits</Link>
            </div>
            <div className="dashboard__sidebar1-item dashboard__sub-item">
              <FontAwesomeIcon icon={faStar} className="dashboard__sub-icon" />{" "}
              <Link to="centerOfOperation">Centre of Operation</Link>
            </div>
            <div className="dashboard__sidebar1-item dashboard__sub-item">
              <FontAwesomeIcon icon={faStar} className="dashboard__sub-icon" />{" "}
              Learning Style
            </div>
            <div className="dashboard__sidebar1-item dashboard__sub-item mb-3">
              <FontAwesomeIcon icon={faStar} className="dashboard__sub-icon" />
              <Link to="subjectInterest">Subject Interest</Link>
            </div>
          </div>
          <div className="dashboard__sidebar1-item">
            <FontAwesomeIcon icon={faLevelUpAlt} className="dashboard__icon" />
            <Link to="careerLibrary">Grow with MyWays</Link>
          </div>
          <div className="dashboard__sidebar1-item">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="dashboard__icon"
            />
            Career Library
          </div>
          <div className="dashboard__sidebar1-item">
            <FontAwesomeIcon icon={faComments} className="dashboard__icon" />
            MyBuddy Chatbot
          </div>
          <div>
            {isAuthenticated && (
              <div className="dashboard__sidebar2-item">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="dashboard__icon"
                />
                <a href="" onClick={logout} className="dashboard__text-white">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
