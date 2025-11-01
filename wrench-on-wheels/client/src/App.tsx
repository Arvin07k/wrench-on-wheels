import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import AdminDashboard from './pages/AdminDashboard';
import MechanicDashboard from './pages/MechanicDashboard';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/booking" component={BookingPage} />
                    <Route path="/admin" component={AdminDashboard} />
                    <Route path="/mechanic" component={MechanicDashboard} />
                    <Route path="/user" component={UserDashboard} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;