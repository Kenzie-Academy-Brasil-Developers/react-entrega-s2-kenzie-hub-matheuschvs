import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export { Router }
