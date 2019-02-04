// packages
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux actions
import { fetchCurrentUserInfo } from '../../actions/get-currentuser-info-actions';

// custom components
import Profile from '../profile/profile';

// styles
import './dashboard.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUserInfo();
  }

  render() {
    const { currentUserInfo } = this.props;
    return (
      <div className='dashboard'>
        <Profile user={'business'}/>
        {this.props.user === 'business' && (
          <Profile user={'business'}/>
        )}
        {this.props.user === 'volunteer' && (
          <Profile user={'volunteer'}/>
        )}
      </div>
    );
  }
}

Dashboard.propTypes = {
  currentUserInfo: PropTypes.object,
  projects: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  fetchCurrentUserInfo: PropTypes.func,
};

const mapStateToProps = state => ({
  currentUserInfo: state.currentUserInfo,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUserInfo: () => dispatch(fetchCurrentUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
