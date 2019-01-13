import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import FadeIn from "react-fade-in";

class About extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <FadeIn>
                  <h1 className="display-3 mb-4 brand-text">OVERWATCH</h1>
                  <p className="lead">
                    {" "}
                   About stuff
                  </p>
                  <hr />
                  <div>
                    {/* <Link
                      to="/register"
                      className="btn btn-lg btn-primary mr-2"
                    >
                      Register
                    </Link> */}
                    <br />
                    <Link to="/login" className="btn btn-lg btn-outline-light login-button">
                      Login
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(About);
