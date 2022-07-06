import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types'

// Projects
import VoiceUX from '../projects/VoiceUX';
import Cardio from '../projects/Cardio';
import Scrolling from '../projects/Scrolling';
import RightClickMenu from '../projects/RightClickMenu';
import MotionLib from '../projects/MotionLib';
import Search from '../projects/Search';
import MCD from '../projects/MCD';
import Comcast from '../projects/Comcast';
import Goldman from '../projects/Goldman';
import AmazonLink from '../projects/AmazonLink';

// Components
import Loading from '../components/Loading';
import getContent from '../components/getContent.js';
import Block from '../components/Block.js';
import ProjectHero from '../components/ProjectHero.js';
import ProblemContainer from '../components/ProblemContainer.js';


// CSS
import styles from '../styles/DetailLayout.module.css';

function DetailLayout(props) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect with an empty dependency array works the same way as componentDidMount
  useEffect(async () => {
    try {
      // set loading to true before calling API
      setLoading(true);
      const data = await getContent();
      setData(data);
      // switch loading to false after fetch is complete
      setLoading(false);
    } catch (error) {
      // add error handling here
      setLoading(false);
    }
    
 }, []);

    // return a Spinner when loading is true
    if(loading) return (
      <Loading />
    );
  
    // data will be null when fetch call fails
    if (!data) return (
      <span>Data not available</span>
    );

  
    // when data is available, title is shown
    return (
      <div>
        {loading === false ? (
          <div className="container">
            <Route exact path="/cardio" render={(props) => <Cardio {...props} /> } />
            <Route exact path="/voiceUX" render={(props) => <VoiceUX {...props} /> } />
            <Route exact path="/scrolling" render={(props) => <Scrolling {...props} /> } />
            <Route exact path="/rcm" render={(props) => <RightClickMenu {...props} /> } />
            <Route exact path="/motionlib" render={(props) => <MotionLib {...props} /> } />
            <Route exact path="/search" render={(props) => <Search {...props} /> } />
            <Route exact path="/mcd" render={(props) => <MCD {...props} /> } />
            <Route exact path="/comcast" render={(props) => <Comcast {...props} /> } />
            <Route exact path="/goldman" render={(props) => <Goldman {...props} /> } />
            <Route exact path="/amazonLink" render={(props) => <AmazonLink {...props} /> } />
          </div>
          ) : (<Loading />)}
      </div>
    )};

DetailLayout.propTypes = {
    match: PropTypes.any.isRequired
}

export default DetailLayout;
