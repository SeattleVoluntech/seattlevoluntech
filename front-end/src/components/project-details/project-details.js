// packages
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux actions
import { fetchProjectDetails } from '../../actions/project-details-actions';

// components
//import ProjectEditing from './project-editing';
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

  componentDidMount() {
    this.props.fetchProjectDetails();
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
    const { error, loading, projectDetails } = this.props.projectDetails;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <Fragment>
        <section className='project-details flex'>
          {this.props.isBusiness
            ? <ProjectInfo isBusiness={true} handleSignUp={this.handleSignUp}
            projectDetails={projectDetails}/>
            : <ProjectInfo isBusiness={false} handleSignUp={this.handleSignUp}
          projectDetails={projectDetails}/>
          }
          {this.props.isVolunteer
            ? <ProjectInfo isVolunteer={true} handleSignUp={this.handleSignUp}
            projectDetails={projectDetails}/>
            : null
          }
        </section>
      </Fragment>
    );
  }
}

ProjectDetails.propTypes = {
  projectDetails: PropTypes.array,
  projectId: PropTypes.string,
  error: PropTypes.object,
  loading: PropTypes.bool,
  fetchProjectDetails: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  projectId: ownProps.match.params.id,
  projectDetails: state.projectDetails,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProjectDetails: () => dispatch(fetchProjectDetails(ownProps.match.params.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
