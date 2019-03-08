import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import FadeIn from 'react-fade-in';
import { getMemberById } from '../../actions/memberActions';

class Member extends Component {

    componentDidMount(){
        if (this.props.match.params.id) {
            this.props.getMemberById(this.props.match.params.id);
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.member.member === null && this.props.member.loading){
           // this.props.history.push('/not-found');
        }
    }


    render(){

        const { member, loading } = this.props.member;
        let memberContent; 

        if (member === null || loading) {
            memberContent = <Spinner />;
        } else {
            memberContent = (
                <div>
            <div className="row">
            <div className="col-md-6">
               <Link to="/members" className="btn btn-light mb-3 float-left">
                to Members
              </Link>
              </div>
              </div>
              <div className="row">
              <div className="col-sm-12">
                Name: {member.name}<br/>
                Email: {member.email}<br/>
                Phone: {member.phone}<br/>
           
              </div>
              </div>
              </div>
             
            )
        }

        return (
          
            <div className="profile">   
                <div className="container">
                <div className="row">
                    <div className="col-md-12">{memberContent}</div>
                </div>              
                </div>
            </div>
        
        );
    }
}

Member.propTypes = {
    getMemberById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired, 
    member: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    member: state.member, 
    auth: state.auth
});



export default connect(mapStateToProps, { getMemberById })(Member);