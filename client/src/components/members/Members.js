import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import MemberItem from './MemberItem';
import { getMembers } from '../../actions/memberActions';

class Members extends Component {
  componentDidMount() {
    this.props.getMembers();
  }

    render() {
      const { members, loading } = this.props.member;
      let memberItems;

      if (members === null || loading) {
        memberItems = <Spinner />;
      } else {
        if (members.length > 0) {
           memberItems = members.map(member => (
             <MemberItem key={member._id} member={member} />
           ));
        } else {
          memberItems = <h4>No members found...</h4>;
        }
       
      }

      return (
       <div className="members">
       <h2>Members</h2>
        <div className="members-list">
          <div className="row">
          <div className="col-md-12">
              {memberItems}
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

  