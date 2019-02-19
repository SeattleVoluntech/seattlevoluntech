// packages
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux actions
import { fetchAllProjects } from '../../actions/get-all-projects-actions';

// custom components
import ProjectCard from './project-card';

// styling
import './project-pane.scss';

class ProjectPane extends React.Component {
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  render() {
    const { error, loading, allProjects } = this.props.allProjects;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="projectPane">
        {allProjects.length > 0 && allProjects.map((project, i) => <ProjectCard
            currentProject={project}
            key={i}
            className='main-project'
        />)}
      </div>
    );
  }
}

ProjectPane.propTypes = {
  allProjects: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  fetchAllProjects: PropTypes.func,
};

const mapStateToProps = state => ({
  allProjects: state.allProjects,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProjects: () => dispatch(fetchAllProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPane);
