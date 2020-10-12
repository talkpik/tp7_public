import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './pages/Header';
import Services from './pages/Services';
import Seeker from './pages/Seeker';
import Speaker from './pages/Speaker';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
	render(){
		return (
			<BrowserRouter>
			<div className="App">
  	  			<Navbar/>
					<div>
        				<Switch>
          					<Route exact path="/"><Header /></Route>
          					<Route path="/services"><Services /></Route>
							<Route path="/seeker"><Seeker /></Route>
							<Route path="/speaker"><Speaker /></Route>
							<Route path="/events"><Events /></Route>
							<Route path="/team"><Team /></Route>
							<Route path="/contact"><Contact /></Route>
        				</Switch>
      				</div>
				<Footer />
  			</div>
		</BrowserRouter>
	    );
	}
}
export default App;

      
    
  