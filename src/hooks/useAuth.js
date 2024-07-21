import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://localhost:5000/api/auth/user', {
            headers: {
              'Authorization': token
            }
          });
          setUser(response.data);
        }
      } catch (error) {
        setAuthError(error);
      }
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setAuthError(null);
    } catch (error) {
      setAuthError(error.response.data.message);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setAuthError(null);
    } catch (error) {
      setAuthError(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, authError, login, register, logout };
};

export default useAuth;
