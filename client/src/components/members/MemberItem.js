import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deleteMember } from '../../actions/memberActions';

import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import FadeIn from 'react-fade-in';


class MemberItem extends Component {
    
  onDeleteClick(id) {
    this.props.deleteMember(id);
  }

 
  render() {
    const { member, auth } = this.props;
    

    return (
      <FadeIn>
        
          <Link to={`/members/${member._id}`}>
          <div className="card card-body bg-light mb-3">
         <div className="row">
          <div className="col-sm-12">
           <span className="member-names"> {member.name} </span>
           
            </div>
            </div>
         </div>
         </Link>
    </FadeIn>
    );
  }
}

MemberItem.defaultProps = {
  showActions: true
};

MemberItem.propTypes = {
  deleteMember: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteMember })(
  MemberItem
);
