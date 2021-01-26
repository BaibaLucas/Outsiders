// == Package imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// == Local imports
// Components
import Header from '../../containers/Header';
import Home from '../Home';
import About from '../About';
import Sports from '../../containers/Sports';
import Sorties from '../Sorties';
import Tripdetails from '../../containers/Tripdetails';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';
import Profile from '../../containers/Profile';
import Admin from '../../containers/Admin';
import Footer from '../Footer';

const App = ({ loadSportsData, loadCategoriesData }) => {
  // loading sports and categories data from api
  useEffect(() => {
    loadSportsData();
    loadCategoriesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />

      {/* General routes */}
      <Route exact path='/' >
        <Home />
      </Route>
      <Route exact path='/about' >
        <About />
      </Route>

      {/* Sport routes */}
      <Route exact path='/sports' >
        <Sports />
      </Route>

      {/* Trip routes */}
      <Route exact path='/sorties' >
        <Sorties />
      </Route>
      <Route exact path='/sortie/:slug' >
        <Tripdetails />
      </Route>

      {/* User routes */}
      <Route exact path='/signup' >
        <Signup />
      </Route>
      <Route exact path='/login' >
        <Login />
      </Route>
      <Route exact path='/mon-compte' >
        <Profile />
      </Route>
      
      {/* Admin routes */}
      <Route exact path='/admin' >
        <Admin />
      </Route>
      
      <Footer />
    </div>
  );
}

App.propTypes = {
  loadSportsData: PropTypes.func.isRequired,
};

export default App;