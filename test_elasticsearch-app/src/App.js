import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/dashboard/dashboard-page.js';
import LoginPage from './pages/login/login-page.js'
import NotFoundPage from './pages/notfound/notfound-page.js';

class App extends Component {
  render() {
    return (
	<div className="App">
	  <BrowserRouter >
        <Route path="/">            
			<Redirect to="/dashboard"/>
        </Route>
        <Route path="/login" component={LoginPage}/>
        <Route path="/dashboard" component={DashboardPage}/>
		<Route path="/">
            <Redirect to="/notfound"/>
        </Route>
        <Route path="notfound" component={NotFoundPage}/>
      </BrowserRouter>
	 </div>
    
    );
  }
}

export default App;
