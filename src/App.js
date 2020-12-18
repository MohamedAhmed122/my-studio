import { Switch, Route } from 'react-router-dom'

import ContactPage from './app/pages/contactPage/ContactPage';
import Footer from './app/layouts/Footer/Footer';
import HomePage from './app/pages/homePage/HomePage';

import './App.css';
import AboutPage from './app/pages/AboutPage/AboutPage';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact  path='/about' component={AboutPage} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
