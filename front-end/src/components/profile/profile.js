import React from 'react';
import { Link } from 'react-router-dom';

import ProjectCard from '../open-projects/project-card';

// styles
import './profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;

    const businessProfile = <div className='profile-info flex'><div className='profile-container flex'><h3>this.props.businessname</h3>
      <span><h4>Business Email : </h4><p>this.props.business.email</p></span>
      <span><h4>Business Description: </h4><p>this.props.business.description</p></span>
      <span><h4>Business Website: </h4><p>this.props.business.website</p></span>
      <div className='business-profile-buttons'>
      <Link to='dashboard-edit'><button>Edit your profile</button></Link>
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
          {this.props.user === 'business' && (
            <div className='profile'>
            {businessProfile}
            <div className='profile-projects flex'>
              <div className='open-projects flex'>
                <h2>Open Projects</h2>
                {/* map over project object to generate cards and pass userType as props */}
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
              <hr className='underline' />
              <div className='closed-projects flex'>
                <h2>Closed Projects</h2>
                {/* map over project object to generate cards and pass userType as props */}
                <ProjectCard />
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
                    <ProjectCard />
                  </div>
                  <hr className='underline' />
                  <div className='closed-projects flex'>
                    <h2>Past Projects</h2>
                    {/* map over project object to generate cards and pass userType as props */}
                    <ProjectCard />
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
    );
  }
}

export default Profile;
