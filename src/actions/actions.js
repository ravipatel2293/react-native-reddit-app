//actions
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

const FETCH_ABOUT_SUBREDDİT_REQUEST = 'FETCH_ABOUT_SUBREDDİT_REQUEST';
const FETCH_ABOUT_SUBREDDİT_SUCCESS = 'FETCH_ABOUT_SUBREDDİT_SUCCESS';
const FETCH_ABOUT_SUBREDDİT_FAILURE = 'FETCH_ABOUT_SUBREDDİT_FAILURE';

//action creators

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (data, afterKey) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
    after: afterKey,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

//login action creator
const userLogin = () => {
  return {
    type: USER_LOGIN,
  };
};

const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

// About subreddit&user action creator

const fetchAboutSubredditRequest = () => {
  return {
    type: FETCH_ABOUT_SUBREDDİT_REQUEST,
  };
};

const fetchAboutSubredditSuccess = (data) => {
  return {
    type: FETCH_ABOUT_SUBREDDİT_SUCCESS,
    payload: data,
  };
};

const fetchAboutSubredditFailure = (error) => {
  return {
    type: FETCH_ABOUT_SUBREDDİT_FAILURE,
    payload: error,
  };
};

// async api request with redux-thunk
const fetchData = (afterKey, list) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    fetch(`https://www.reddit.com/.json?raw_json=1&after=${afterKey}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const data = res.data.children;
        var multipleData = [];
        list == null
          ? (multipleData = data)
          : (multipleData = list.concat(data));
        //console.log('multiple dataa: ', multipleData);
        dispatch(fetchUserSuccess(multipleData, res.data.after));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};

const fetchAboutSubreddit = (subreddit_name_prefixed) => {
  return (dispatch) => {
    dispatch(fetchAboutSubredditRequest());
    fetch(`https://www.reddit.com/${subreddit_name_prefixed}/about.json`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const data = res;
        dispatch(fetchAboutSubredditSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchAboutSubredditFailure(error));
      });
  };
};

export {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  fetchData,
  userLogin,
  USER_LOGIN,
  USER_LOGOUT,
  userLogout,
  fetchAboutSubredditFailure,
  fetchAboutSubredditSuccess,
  fetchAboutSubredditRequest,
  FETCH_ABOUT_SUBREDDİT_FAILURE,
  FETCH_ABOUT_SUBREDDİT_SUCCESS,
  FETCH_ABOUT_SUBREDDİT_REQUEST,
  fetchAboutSubreddit,
};
