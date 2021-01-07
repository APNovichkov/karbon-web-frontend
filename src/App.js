import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';

// Import Pages
import Home from "./pages/home";

// Import Components
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Router>
        <div className="body-wrapper">
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
