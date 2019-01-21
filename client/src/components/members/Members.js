import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import FadeIn from "react-fade-in";


class Members extends Component {
    render() {
      return (
       <div className="members">members page</div>
      );
    }
  }
  
  Members.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(Members);
  