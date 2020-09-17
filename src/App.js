import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavLinks from './components/ui/nav-links/nav-links';
import Header from './components/ui/header/header';

import DashboardPage from './components/pages/dashboard/dashboard';
import SeeAll from './components/sections/all-books/all-books';


import './App.css';


function App() {

  return (
    <div className="App">
      <Router>
        <NavLinks />
          <main className="main">
            <Header />
            <Switch>
              <Route path='/dashboard' exact>
                <DashboardPage />
              </Route>
              <Route path='/dashboard/more-books' component={SeeAll} />
            </Switch>
          </main>
          
      </Router>
      
    </div>
  );
}

export default App;
