import React from 'react';
import { Routes, Route } from 'react-router-dom';
import R from './routes';
import HomePage from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="app">
      <R.AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/protected"
            element={
              <R.RequireAuth>
                <R.ProtectedPage />
              </R.RequireAuth>
            }
          />
        </Routes>
      </R.AuthProvider>
    </div>
  );
};

export default React.memo(App);
