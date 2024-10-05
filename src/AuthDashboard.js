import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthDashboard = ({ authType }) => {
  const [isLogin, setIsLogin] = useState(authType === 'login');

  // Whenever the authType prop changes, switch the form
  useEffect(() => {
    setIsLogin(authType === 'login');
  }, [authType]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-dashboard">
      {isLogin ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegisterForm toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthDashboard;