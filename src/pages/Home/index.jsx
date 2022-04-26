import { Navigate, useLocation } from "react-router-dom";

import { Navbar } from "../../components/Navbar";

const Home = ({ isAuthenticated, signOut }) => {
  const location = useLocation();

  return (
    isAuthenticated ?
      <>
        <Navbar signOut={signOut} />
      </> :
      <Navigate to="/" state={{ from: location }} replace />
  )
}

export { Home }
