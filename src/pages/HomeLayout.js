import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'

// Components
import Home from '../components/Greeting';
import getContent from '../components/getContent.js';
import Loading from '../components/Loading';
import Block from '../components/Block.js';
import Scrolltop from '../components/Scrolltop';
import rightArrow from '../assets/arrow-right.svg';


function HomeLayout({match}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [projectName, setProjectName] = useState("");

    useEffect(async () => {
        try {
            // set loading to true before calling API
            setLoading(true);
            const data = await getContent();
            setData(data);

            // assigning content to vars
            setProjectName(getTitles);

            // switch loading to false after fetch is complete
            setLoading(false);
        } 
        
        catch (error) {
            // add error handling here
            setLoading(false);
            console.log(error);
        }
    }, []);

    // return a Spinner when loading is true
    if(loading) return (
        <Loading />
    );

    // data will be null when fetch call fails
    if (!data) return (
        <span className="error">Oh, bummer. Try refreshing a couple of times, if this still keeps happening email me to let me know this is janky and you want to see my work!</span>
    );

    const getTitles = data.map(element => element.PROJECT);

    return (
        <div class="columns is-centered">
            <div class="column is-three-fifths">
                <div class="container pt-6 pb-6">
                    <Switch>
                        <Route
                            exact path={`${match.path}`}
                            render={(props) => <Home {...props} /> }
                        />
=                    </Switch>
                </div>

                <div className="container pt-6">
                    <p className="has-text-weight-bold">Engineering & UX</p>
                    <ul>
                        <li className="main-link is-size-4"><Link to="/cardio">{getTitles[0]}</Link><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><Link to="/voiceux">{getTitles[1]}</Link><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><Link to="/scrolling">{getTitles[2]}</Link><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><Link to="/rcm">{getTitles[3]}</Link><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><Link to="/motionlib">{getTitles[4]}</Link><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><Link to="/search">{getTitles[5]}</Link><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><Link to="/mcd">{getTitles[6]}</Link><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><Link to="/comcast">{getTitles[7]}</Link><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><Link to="/goldman">{getTitles[8]}</Link><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                    </ul>
                </div>

                <div className="container pt-6 pb-6">
                    <p className="has-text-weight-bold">Experiments</p>
                    <ul className="pb-6">
                        <li className="main-link is-size-4"><a href="http://laurenparkos.com/2017/rescueme.php">{getTitles[9]}</a><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><a href="http://laurenparkos.com/2017/chatbot.php">{getTitles[10]}</a><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><a href="http://laurenparkos.com/2017/huxley.php">{getTitles[11]}</a><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                        <li className="main-link is-size-4"><a href="http://laurenparkos.com/2017/cardboard.php">{getTitles[12]}</a><img className="pl-3 image is-32x32" src={rightArrow}/></li>
                    </ul>
                </div>   
            </div>   
        </div>
    );
  }

 HomeLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default HomeLayout
