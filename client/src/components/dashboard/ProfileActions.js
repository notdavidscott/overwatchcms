import React from "react";
import { Link } from "react-router-dom";
import ProfileAvatar from '../profile/ProfileAvatar';

const ProfileActions = () => {
  return (
    <div>
<div className="row"> 
      <div className="col-md-12">
        
      <h4 className="thin-text text-center text-secondary">OVERWATCH</h4>
      <br/>

      <div className="col-6 col-md-6 m-auto">
      

      </div>
      <br/>
      <div class="dashboard-options">
     <div class="row">
        <div className="col-sm-12 col-md-4 col-lg-3">
        <Link to="/add-experience" className="btn btn-block btn-light dashboard-option"> 
        <i className="fas fa-user-circle blue-text icon-sizing-1" /><br/>
            Reminders
        </Link>
       </div>
       <div className="col-sm-12 col-md-4 col-lg-3">
        <Link to="/add-education" className="btn btn-block btn-light dashboard-option">
        <i className="fas fa-users blue-text icon-sizing-1" /><br/>
           Members
        </Link> 
     </div>
     <div className="col-sm-12 col-md-4 col-lg-3">
        <Link to="/add-interests" className="btn btn-block btn-light dashboard-option">
        <i className="fas fa-briefcase blue-text icon-sizing-1" /><br/>
            Finance
        </Link>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
        <Link to="/add-group" className="btn btn-block btn-light dashboard-option">
          <i className="fas fa-users blue-text icon-sizing-1" /><br/>
            Groups
        </Link>
        </div>
        </div>
        <br/>
        <div class="row">
        <div className="col-sm-12 col-md-6">
        <Link to="/edit-profile" className="btn btn-block btn-light">
            <i className="fas fa-cog blue-text mr-1" /> 
            Edit Account
        </Link>
        </div>
        
        <div className="col-sm-12 col-md-6">
        <a className="btn btn-block btn-light" href="https://docs.google.com/forms/d/e/1FAIpQLSd8UG6Tyg4ZmbunLP6R-8HCO8kJApx3HtBk6X8_QLGgSdNPGQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"> 
        <i className="fas fa-microphone blue-text"></i> Overwatch Feedback
        </a>
        </div>
        </div>
        </div> 
        <div className="col-md-6">
        
        </div>
        </div>
        </div>
      </div>
   
  );
};

export default ProfileActions;
