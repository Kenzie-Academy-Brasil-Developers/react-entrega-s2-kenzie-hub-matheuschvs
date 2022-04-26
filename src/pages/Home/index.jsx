import { Navigate, useLocation } from "react-router-dom";

const Home = ({ isAuthenticated, signOut }) => {
  const location = useLocation();

  return (
    isAuthenticated ?
      <h1>Home Page!</h1> :
      <Navigate to="/" state={{ from: location }} replace />
  )
}

export { Home }
