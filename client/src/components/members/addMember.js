import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { addMember } from '../../actions/memberActions';
// test commit 


class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      texting: "",
      birthday: "",
      location: "",
      relationship: "",
      
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

 

  onSubmit(e) {
    e.preventDefault();

    const memberData = {
      name: this.state.name,
      email: this.state.email, 
      phone: this.state.phone, 
      texting: this.state.texting,
      birthday: this.state.birthday, 
      location: this.state.location,
      relationship: this.state.relationship,
    };

    this.props.addMember(memberData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    const dtr = [
      { label: "Select Relationship Status", value: 0 },
      { label: "Single", value: "Single" },
      { label: "In a Relationship", value: "In a Relationship" },
      { label: "Engaged", value: "Engaged" },
      { label: "Married", value: "Married" }
    ];

    const textingOptions = [
        { label: "* Text allowed?", value: 0 },
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" }

    ]

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add a new member</h1>
              <p className="lead text-center">
                Add some info below for the new member!
              </p>
              <small className="d-block pb-3">* required fields</small>

              <form onSubmit={this.onSubmit}>


                <TextFieldGroup
                  placeholder="* New Member Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="Add a name for the new member"
                />

                 <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="Add a email for the new member"
                />

                <TextFieldGroup
                  placeholder="Phone Number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                  info="Add a phone number for follow up"
                />

                 <SelectListGroup
                  placeholder="Okay to text?"
                  name="texting"
                  value={this.state.texting}
                  onChange={this.onChange}
                  options={textingOptions}
                  error={errors.texting}
                  info="If the member accepts texting capabilities, select YES!"
                />
             
             <TextFieldGroup
                placeholder="Birthday"
                name="birthday"
                type="date"
                value={this.state.birthday}
                onChange={this.onChange}
                error={errors.text}
                info="Enter the date of birth for the new member"
                />
                
                <SelectListGroup
                  placeholder="Relationship Status"
                  name="relationship"
                  value={this.state.relationship}
                  onChange={this.onChange}
                  options={dtr}
                  error={errors.relationship}
                  info="Select relationship status here"
                />
             
               
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City & State suggested (eg. Ladera Ranch, CA)"
                />
              
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-secondary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }} />
      </div>
    );
  }
}

AddMember.propTypes = {
  member: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  member: state.member,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addMember }
)(withRouter(AddMember));
