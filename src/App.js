import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import CarListings from './components/CarListings';
import Auth from './components/Auth';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/user" component={UserDashboard} />
          <Route path="/cars" component={CarListings} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
