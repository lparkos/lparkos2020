import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import getContent from '../components/getContent.js';
import ProblemContainer from "../components/ProblemContainer.js";
import ProjectHero from "../components/ProjectHero.js";
import ProjectSetup from "../components/ProjectSetup.js";
import Block from "../components/Block.js";
import NextBack from "../components/NextBack.js";
import Image from "../components/Image.js";
import InsightsBlock from "../components/InsightsBlock.js";


const MotionLib = () => {
  const [project, setProject] = useState("");
  const [client, setClient] = useState("");
  const [summary, setSummary] = useState("");
  const [goal, setBizgoal] = useState("");
  const [success, setSuccess] = useState("");
  const [timeline, setTimeline] = useState("");
  const [problem, setProblem] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [image9, setImage9] = useState("");
  const [image10, setImage10] = useState("");
  const [image11, setImage11] = useState("");
  const [image12, setImage12] = useState("");

  const [approach, setApproach] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");

  const projectData = async () => {
    const hasData = await getContent();
      setProject(hasData[4].PROJECT);
      setClient(hasData[4].CLIENT);
      setSummary(hasData[4].SUMMARY);
      setSuccess(hasData[4].SUCCESS);
      setTimeline(hasData[4].TIMELINE);
      setBizgoal(hasData[4].GOAL);
      setProblem(hasData[4].PROBLEM);
      setApproach(hasData[4].APPROACH);

      setImage1(hasData[4].IMAGE1);
      setImage2(hasData[4].IMAGE2);
      setImage3(hasData[4].IMAGE3);
      setImage4(hasData[4].IMAGE4);
      setImage5(hasData[4].IMAGE5);
      setImage6(hasData[4].IMAGE6);
      setImage7(hasData[4].IMAGE7);
      setImage8(hasData[4].IMAGE8);
      setImage9(hasData[4].IMAGE9);
      setImage10(hasData[4].IMAGE10);
      setImage11(hasData[4].IMAGE11);
      setImage12(hasData[4].IMAGE12);

      setText1(hasData[4].COPY1);
      setText2(hasData[4].COPY2);
      setText3(hasData[4].COPY3);
      setText4(hasData[4].COPY4);
      setText5(hasData[4].COPY5);
      setText6(hasData[4].COPY6);
      setText4(hasData[4].COPY4);
      setText5(hasData[4].COPY5);
      setText6(hasData[4].COPY6);
      setText7(hasData[4].COPY7);
      setText8(hasData[4].COPY8);
      setText9(hasData[4].COPY9);
  };

  useEffect(() => {
    projectData();
  }, []);

  return (
    <div>

       <div className="body-container">
       <ProjectHero
        project={project} 
        summary={summary} 
        image={image1} 
        />

        <ProjectSetup
        goal={goal} 
        success={success} 
        timeline={timeline} 
        problem={problem} 
        />

        <Image image={image2} />
        <Block subhead="Approach" subtext={text1}  />
        <Image image={image3} />

        <Block subhead="Building the basics" subtext={text2}/>
        {/* Easings */}
        <div className="columns pt-3 is-centered">
            <div className="column is-four-fifths">
                <div class="container pt-6 columns is-variable is-5 is-vcentered is-multiline">
                    <div class="column">
                        <div class="has-text-centered p-5">
                            <img className="ten" src={image6}/>
                        </div>
                    </div>
                    <div class="column">
                        <div class="has-text-centered p-5">
                            <img className="ten" src={image7}/>
                        </div>
                    </div>
                    <div class="column">
                        <div class="has-text-centered p-5">
                            <img className="ten" src={image8}/>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
        <Image image={image4} />
        <Image image={image5} />

        <Block subhead="Design Collaboration" subtext={text3} />
        <Image image={image9} />
        
        <Block subhead="Animations as mixins" subtext={text4}/>
        <Image image={image10} />
        <Block subhead="Inline orchestration" subtext={text5}/>
        <Image image={image11} />

        <NextBack backurl="/rcm" nexturl="/search" />

        </div>
    </div>
  );

};

export default MotionLib;
