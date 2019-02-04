import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchLatestProjects } from "../../actions/latest-projects-actions";

import ProjectCard from '../open-projects/project-card';

// styles
import './profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLatestProjects();
  }

  render() {
    const { location } = this.props;
    const { error, loading, latestProjects } = this.props.latestProjects;

    const businessProfile = <div className='profile-info flex'><div className='profile-container'><h3>Business Name Here</h3>
      <div className='profile-details flex'>
        <div className='profile-business-details'>
          <span><h4>Business Email : </h4><p>Business Email here</p></span>
          <span><h4>Business Website: </h4><a href='http://seattlevoluntech.com'>`http://seattlevoluntech.com`</a></span>
        </div>
        <div className='profile-business-desc '>
          <span><h4>Business Description: </h4><p>My business is the best. My business is the best. My business is the best. My business is the best. My business is the best.business is the best. My business is the best. My business is the best. My business is the best. My business is the best.</p></span>
        </div>
      </div>
      <div className='business-profile-buttons flex'>
      <Link to='dashboard-edit' user='business'><button>Edit your profile</button></Link>
      <Link to='/project-new'><button>Create a new project</button></Link>
      </div>
      </div></div>;

    const volunteerProfile = <div className='profile-info flex'><div className='profile-container flex'><h3>this.props.volunteername</h3>
      <span><h4>Volunteer Email :</h4><p>this.props.volunteer.email</p></span>
      <span><h4>Volunteer Skills :</h4><p>this.props.volunteer.skills</p></span>
      <Link to='/dashboard-edit'><button>Edit your profile</button></Link>
      </div></div>;

    return (
        <React.Fragment>
          {console.log(latestProjects)}
          {this.props.user === 'business' && (
            <div className='profile'>
            {businessProfile}
            <div className='profile-projects flex'>
              <div className='open-projects flex'>
                <h2>Open Projects</h2>
                <ProjectCard
                   currentProject={latestProjects[0]}
                />)}
              </div>
              <hr className='underline' />
              <div className='closed-projects flex'>
                <h2>Closed Projects</h2>
                {/* map over project object to generate cards and pass userType as props */}
              </div>
            </div>
            </div>)
          }
          {this.props.user === 'volunteer' && (
            <React.Fragment>
              <div className='profile'>
                {volunteerProfile}
                <div className='profile-projects flex'>
                  <div className='current-projects flex'>
                    <h2>Current Projects</h2>
                    {/* map over project object to generate cards and pass userType as props */}
                  </div>
                  <hr className='underline' />
                  <div className='closed-projects flex'>
                    <h2>Past Projects</h2>
                    {/* map over project object to generate cards and pass userType as props */}
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
    );
  }
}

Profile.propTypes = {
  fetchLatestProjects: PropTypes.func,
  projects: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  latestProjects:PropTypes.object,
};

const mapStateToProps = state => ({
  latestProjects: state.latestProjects,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLatestProjects: () => dispatch(fetchLatestProjects()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
