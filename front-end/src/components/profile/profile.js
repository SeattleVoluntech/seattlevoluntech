// packages
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Redux action
import { fetchLatestProjects } from "../../actions/latest-projects-actions";

// custom components
import ProjectCard from '../open-projects/project-card';
import Button from '../button/button'

// styles
import './profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'business',
    };
  }

  switchUser = () => {
    const newUser = this.state.user === 'business' ? 'volunteer' : 'business';
    this.setState({ user: newUser });
  }

  componentDidMount() {
    this.props.fetchLatestProjects();
  }

  componentDidMount() {
    this.props.fetchLatestProjects();
  }

  render() {
    const { location } = this.props;
    const { error, loading, latestProjects } = this.props.latestProjects;

    const businessProfile = <div className='profile-info flex'><div className='profile-container'><h2>Pizza Pisa</h2>
      <Button onClick={this.switchUser}>Switch user</Button>
      <div className='profile-details flex'>
        <div className='profile-business-details'>
          <div><h4>Business Email : </h4><p>pizzapisa@gmail.com</p></div>
          <div><h4>Business Website: </h4><a href='http://seattlevoluntech.com'></a></div>
        </div>
        <div className='profile-business-desc flex'>
          <div><h4>Business Description: </h4><p>Pizza Pisa is a small family-owned pizzeria in Georgetown. They specialize in neapolitan style pizza. Every day, the owners make their own mozzarella cheese by hand with locally sourced ingredients. Each pizza is hand tossed with love. </p></div>
        </div>
      </div>
      <div className='profile-buttons flex'>
      <Link to='dashboard-edit' user='business'><Button>Edit your profile</Button></Link>
      <Link to='/project-new'><Button>Create a new project</Button></Link>
      </div>
      </div></div>;

    const volunteerProfile = <div className='profile-info flex'><div className='profile-container'><h2>Techy Bob</h2>
      <Button onClick={this.switchUser}>Switch user</Button>
      <div className='profile-details flex'>
        <div className='profile-volunteer-details'>
          <div><h4>Volunteer Email :</h4><p>techybob@gmail.com</p></div>
          <div><h4>Volunteer Skills :</h4><p>Web Design, Front End Development</p></div>
        </div>
        <div className='profile-volunteer-bio flex'>
          <div><h4>Volunteer Bio :</h4><p>I'm an engineer who is early in my career. I am interested in working on projects that help me build my expertise and portfolio while helping out in the community. </p></div>
        </div>
      </div>
      <div className='profile-buttons flex'>
      <Link to='dashboard-edit' user='volunteer'><Button>Edit your profile</Button></Link>
      </div>
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
          {this.state.user === 'volunteer' && (
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
