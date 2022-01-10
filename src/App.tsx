import React from 'react';
import { Routes, Route } from 'react-router-dom';
import R from './routes';

const App: React.FC = () => {
  return (
    <div className="app">
      <R.AuthProvider>
        <Routes>
          <Route path="/login" element={<h1>Login</h1>} />
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
