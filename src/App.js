import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom" 
import PropTypes from 'prop-types';

// Styling
import "./styles/fonts.css";
import "./styles/bulma.css";
import "./styles/App.module.css";

// Pages
import DetailLayout from './pages/DetailLayout';
import HomeLayout from './pages/HomeLayout';

// Components
import Logo from './components/Logo';
import Loading from './components/Loading';
import Footer from './components/Footer';
import NextBack from './components/NextBack';
import ProjectHero from './components/ProjectHero';
import ProblemContainer from './components/ProblemContainer';
import Block from './components/Block';
import Scrolltop from './components/Scrolltop';
import ScrollToTop from './components/ScrollToTop';



// Projects
import VoiceUX from "./projects/VoiceUX";
import Cardio from "./projects/Cardio";
import Scrolling from "./projects/Scrolling";
import RightClickMenu from "./projects/RightClickMenu";
import MotionLib from "./projects/MotionLib";
import Search from "./projects/Search";
import MCD from "./projects/MCD";
import Comcast from "./projects/Comcast";
import Goldman from "./projects/Goldman";
import AmazonLink from "./projects/AmazonLink";

// Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-54480811-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

    return (
      <div className="App container is-fullhd-mobile">

        {loading === false ? (
            <div className="columns is-full-mobile">
              <div className="column p-5">
                  <a href="/"><Logo /></a>
                  <Router>
                    <ScrollToTop />
                    <Switch>
                      <Route exact path="/" render={(props) => <HomeLayout {...props} /> } />
                      <Route path='/cardio' render={(props) => <Cardio {...props} /> } />
                      <Route path='/voiceux' render={(props) => <VoiceUX {...props} /> } />
                      <Route path='/scrolling' render={(props) => <Scrolling {...props} /> } />
                      <Route path='/rcm' render={(props) => <RightClickMenu {...props} /> } />
                      <Route path='/motionlib' render={(props) => <MotionLib {...props} /> } />
                      <Route path='/search' render={(props) => <Search {...props} /> } />
                      <Route path='/mcd' render={(props) => <MCD {...props} /> } />
                      <Route path='/comcast' render={(props) => <Comcast {...props} /> } />
                      <Route path='/goldman' render={(props) => <Goldman {...props} /> } />
                      <Route path='/amazonLink' render={(props) => <AmazonLink {...props} /> } />
                    </Switch>
                  </Router>
              </div> 
        </div>
        ) : (
          <Loading />
        )}
        <Footer />
      </div>
    );
}

export default App;
