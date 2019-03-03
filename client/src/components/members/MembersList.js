import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Members from './Members';

class MembersList extends Component {
  render() {
    const { members } = this.props;
  
    return members.map(member => <Members key={member._id} member={member} />);
  }
}

MembersList.propTypes = {
  members: PropTypes.array.isRequired
};

export default MembersList;
