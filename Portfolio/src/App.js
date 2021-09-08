import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();
  return (
    
      <div className="App">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3">
              <Sidebar />
            </div>

            
            <div className="col-lg-9 app_main-content">
              {/* navbar */}
              <Navbar />
              <AnimatePresence>
                <Switch location={location} key={location.key}>
                  <Route exact path="/">
                    <About />
                  </Route>
                  <Route exact path="/resume">
                    <Resume />
                  </Route>
                  <Route exact path="/projects" component={Projects} />
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
