import { Navigate, useLocation } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";

const Home = ({ isAuthenticated, user, signOut }) => {
  const location = useLocation();

  return (
    isAuthenticated ?
      <>
        <Navbar signOut={signOut} />
        <Header user={user} />
      </> :
      <Navigate to="/" state={{ from: location }} replace />
  )
}

export { Home }
