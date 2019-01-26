import React from 'react';

import ProjectCard from '../open-projects/project-card';

// styles
import './profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    console.log(this.props);

    const businessProfile = <div className='profile-info flex'><div className='profile-container'><h3>this.props.businessname</h3>
    <span><h4>Business Email : </h4><p>this.props.business.email</p></span>
    <span><h4>Business Description: </h4><p>this.props.business.description</p></span>
    <span><h4>Business Website: </h4><p>this.props.business.website</p></span>
    </div>
    </div>;

    const volunteerProfile = <div><h3>Volunteer Name</h3><h3>Volunteer Email</h3></div>;

    return (
        <React.Fragment>
          {this.props.user === 'business' && (
              <React.Fragment>
              {businessProfile}
              <div className='profile-projects flex'>
                <button>Create a new project</button>
                <div className='open-projects flex'>
                  <h3>Open Projects</h3>
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                </div>
                <hr className='underline' />
                <div className='closed-projects flex'>
                  <h3>Closed Projects</h3>
                  <ProjectCard />
                </div>
              </div>)
          </React.Fragment>
          )}
          {this.props.user === 'volunteer' && (
            <React.Fragment>
              <div className='profile'>
                {volunteerProfile}
                <div className='current-projects flex'>
                  <h3>Current Projects</h3>
                  <ProjectCard />
                </div>
                <hr className='underline' />
                <div className='closed-projects flex'>
                  <h3>Past Projects</h3>
                  <ProjectCard />
                </div>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
    );
  }
}

export default Profile;
