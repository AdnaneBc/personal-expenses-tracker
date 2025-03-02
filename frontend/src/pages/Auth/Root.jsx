const Root = () => {
  // check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");
  // if authenticated, return <Dashboard />
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};

export default Root;
