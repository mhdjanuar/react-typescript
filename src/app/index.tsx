import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
// import { AuthProvider } from './routes';

interface AuthContextType {
  user: any;
}

const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);
  setUser('newUser');

  const value = React.useMemo(() => ({ user }), []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AuthProvider>
  );
}
