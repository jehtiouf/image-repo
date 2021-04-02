import React from 'react';
import SignUp from './comps/Authentication/SignUp'
import {AuthProvider} from './comps/Authentication/AuthContext';
import Home from './comps/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './comps/Authentication/Login';
import Logout from './comps/Authentication/Logout'
import PrivateRoute from './comps/Authentication/PrivateRoute'
import ForgotPassword from './comps/Authentication/ForgotPassword'
import Header from "./comps/Header/Header"
import Footer from './comps/footer/Footer';

function App() {
  return (
    <Router>
    <AuthProvider>
      <div className="App">
        <Header/>
        <Switch>
        <PrivateRoute exact path='/' component = {Home} />
        <Route exact path='/signup' component = {SignUp}/>
        <Route exact path= '/login' component ={Login}/>
        <Route exact path='/logout' component= {Logout}/>
        <Route exact path='/forgotPassword' component={ForgotPassword}/>
        </Switch>
        <Footer/>
      </div>
    </AuthProvider>
    </Router>
   
  );
}

export default App;
