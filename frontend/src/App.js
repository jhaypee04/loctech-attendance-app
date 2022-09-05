import Dashboard from './components/dashboard/Dashboard'
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AddNewClassroom from './components/AddNewClassRoom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/dashboard'>
          <div className="app_container">
            <Dashboard />
          </div>
        </Route>
        <Route path='/register'>
            <Register />
        </Route>
        <Route path='/login'>
            <Login />
        </Route>
        <Route path='/homepage'>
            <HomePage />
        </Route>
        <Route path='/addNewClassroom'>
            <AddNewClassroom />
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
