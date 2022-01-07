import React, { useEffect, useMemo, useCallback } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from 'react-router-dom';
import { setInterval } from 'timers/promises';

interface AuthContextType {
  user: boolean;
}

const defaultState = {
  user: false
};

const AuthContext = React.createContext<AuthContextType>(defaultState);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<any>(false);

  if (!user) {
    setUser(true);
  }

  const value = useMemo(() => ({ user }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth() {
  return React.useContext(AuthContext);
}

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const ProtectedPage = () => {
  return <h3>Protected</h3>;
};

export default {
  AuthProvider,
  RequireAuth,
  ProtectedPage
};
