import './App.css';
import Footer from './app/layouts/Footer/Footer';
import HomePage from './app/pages/homePage/HomePage';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
