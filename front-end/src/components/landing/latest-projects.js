// packages
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux actions
import { fetchLatestProjects } from '../../actions/latest-projects-actions';

// components
import ProjectCard from '../open-projects/project-card';

// styles
import './latest-projects.scss';

class LatestProjects extends React.Component {
  componentDidMount() {
    this.props.fetchLatestProjects();
  }

  render() {
    const { error, loading, latestProjects } = this.props.latestProjects;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading === 'false') {
      return <div>Loading...</div>;
    }

    return (
        <div id='latest-projects' className={'latest-projects-container'}>
            <h2>Latest Projects</h2>
            <hr className="underline"/>
            <div className={'latest-projects flex'}>
                {latestProjects.length > 0 && latestProjects.map((project, i) => <ProjectCard
                    currentProject={project}
                    key={i}
                    className={`main-project ${this.props.className}`}
                />)}
            </div>
        </div>
    );
  }
}

LatestProjects.propTypes = {
  latestProjects: PropTypes.object,
  projects: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  fetchLatestProjects: PropTypes.func,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  latestProjects: state.latestProjects,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLatestProjects: () => dispatch(fetchLatestProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestProjects);
