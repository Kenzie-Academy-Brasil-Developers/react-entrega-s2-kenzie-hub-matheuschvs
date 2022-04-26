import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('@kenziehub:token')
    const user = JSON.parse(localStorage.getItem('@kenziehub:user'));

    if (token && user) {
      setIsAuthenticated(true);
    }
  }, [])

  const signIn = ({ token, user }) => {
    setIsAuthenticated(true);

    localStorage.setItem('@kenziehub:token', token);
    localStorage.setItem('@kenziehub:user', JSON.stringify(user));
  }

  const signOut = () => {
    setIsAuthenticated(false);

    localStorage.clear();
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Login isAuthenticated={isAuthenticated} signIn={signIn} />}
      />
      <Route
        path="register"
        element={<Register isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="home"
        element={<Home isAuthenticated={isAuthenticated} signOut={signOut} />}
      />
    </Routes>
  )
}

export { Router }
