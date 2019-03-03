import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MembersList from './MembersList';

import Spinner from '../common/Spinner';
import { getMembers } from '../../actions/memberActions';



class Members extends Component {
  componentDidMount() {
    this.props.getMembers();
  }

    render() {
      const { members, loading } = this.props.member;
      let memberContent;

      if (members === null || loading) {
        memberContent = <Spinner />;
      } else {
        if (members.length > 0) {
            <MembersList />
           
        } else {
          memberContent = <h4>No members found...</h4>;
        }
       
      }

      return (
       <div className="members">
       <h2>Members</h2>
        <div className="members-list">
          <div className="row">
          <div className="col-md-12">
            {memberContent}
            </div>
          </div>
        </div>
         <div style={{ marginBottom: "50px" }} />
      </div>
       
      );
    }
  }
  
 
Members.propTypes = {
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  member: state.member
});

export default connect(mapStateToProps, { getMembers })(Members);

  