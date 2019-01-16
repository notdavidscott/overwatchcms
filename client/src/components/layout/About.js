import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import FadeIn from "react-fade-in";

class About extends Component {
  render() {
    return (
      <div className="about-whole-page">
      <div className="about">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <FadeIn>
                  <h1 className="display-3 mb-4 brand-text">Simple & Effective</h1>
                  <p className="lead">
                    {" "}
                  Customer organization made easy.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-2">
      </div>
      <div className="about-3">
      <FadeIn>
      <div>
                    <Link
                      to="/register"
                      className="btn btn-lg btn-outline-light mr-2 login-button">
                      Register
                    </Link>
                    <br />
                    <Link to="/login" className="btn btn-lg btn-outline-light login-button">
                      Login
                    </Link>
                  </div>
                  </FadeIn>
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
