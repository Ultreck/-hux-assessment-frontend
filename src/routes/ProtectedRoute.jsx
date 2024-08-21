import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // If not authenticated, redirect to the registration page
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
