import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import NavBar from './HeaderComponent/navBar.jsx';
import Footer from './FooterComponent/footer.jsx';

class App extends Component {
  render() {
    return (
        <Router>
      <div>
        <NavBar />
        <Route name="home" exact path="/" component={HomePage} />
        <Footer />
      </div>
    </Router>

  );
  }
}
export default App;
