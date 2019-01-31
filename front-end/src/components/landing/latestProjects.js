/// packages
import React from 'react';
import ProjectCard from '../open-projects/project-card';

// styles
import './latestProjects.scss';

class LatestProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }

    componentDidMount() {
        fetch('http://localhost:8080/projects/latest')
            .then((response) => {
              let clone = response.clone();
                console.log(response.json());
                return clone.json();
            }).then((data) => {
            const projectsTwo = data;
            console.log(projectsTwo);
            this.setState({ projects: projectsTwo });
        }).catch(err=>{
          console.log(err);
        });
    }

    render() {
        return (
            <div id='latest-projects' className='latest-projects'>
                <h3>Latest Projects</h3>
                <hr className="underline"/>
                <div className='new-projects'>
                    {this.state.projects.map((project, i) => <ProjectCard
                        currentProject={project}
                        key={i}
                        className='main-project'
                    />)}
                </div>
            </div>
        );
    }
}

export default LatestProjects;
