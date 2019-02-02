// packages
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux actions
import { fetchProjectDetails } from '../../actions/project-details-actions';

// components
import ProjectEditing from './project-editing';
import ProjectInfo from './project-info';
import * as routes from '../../routes';

// styling
import './project-details.scss';

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleClick() {
    this.setState({
      isEditing: true,
    });
  }

  handleSignUp() {
    // Post request
    return <Link to='/thank-you'>abc</Link>
  }

  render() {
    const { location, match } = this.props;
    return (
      <Fragment>
        <section className='project-details flex'>
          {this.props.isBusiness
            ? <span onClick={this.handleClick} className="editLink">edit</span>
            : null
          }
          {this.state.isEditing && this.props.isBusiness
            ? <ProjectEditing handleClick={this.handleClick}/>
          : <ProjectInfo isBusiness={false} handleSignUp={this.handleSignUp}/>
          }
        </section>
      </Fragment>
    );
  }
}

ProjectDetails.propTypes = {
  latestProjects: PropTypes.object,
  projects: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  fetchLatestProjects: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  projectId: ownProps.match.params.id,
  projectDetails: state.projectDetails,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjectDetails: () => dispatch(fetchProjectDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
