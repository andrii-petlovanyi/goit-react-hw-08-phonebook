const getIsLoggedIn = state => state.auth.isLoggedIn;

// const getUserEmail = state => state.auth.user.email;

const getUserName = state => state.auth.user.name;

const getUserToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  // getUserEmail,
  getUserName,
  getUserToken,
};

export default authSelectors;
