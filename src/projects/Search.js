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

import BeforeAfterReact from 'before-after-react';

const Search = () => {
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
      setProject(hasData[5].PROJECT);
      setClient(hasData[5].CLIENT);
      setSummary(hasData[5].SUMMARY);
      setSuccess(hasData[5].SUCCESS);
      setTimeline(hasData[5].TIMELINE);
      setBizgoal(hasData[5].GOAL);
      setProblem(hasData[5].PROBLEM);
      setApproach(hasData[5].APPROACH);

      setImage1(hasData[5].IMAGE1);
      setImage2(hasData[5].IMAGE2);
      setImage3(hasData[5].IMAGE3);
      setImage4(hasData[5].IMAGE4);
      setImage5(hasData[5].IMAGE5);
      setImage6(hasData[5].IMAGE6);
      setImage7(hasData[5].IMAGE7);
      setImage8(hasData[5].IMAGE8);
      setImage9(hasData[5].IMAGE9);
      setImage10(hasData[5].IMAGE10);
      setImage11(hasData[5].IMAGE11);
      setImage12(hasData[5].IMAGE12);


      setText1(hasData[5].COPY1);
      setText2(hasData[5].COPY2);
      setText3(hasData[5].COPY3);
      setText4(hasData[5].COPY4);
      setText5(hasData[5].COPY5);
      setText6(hasData[5].COPY6);
      setText4(hasData[5].COPY4);
      setText5(hasData[5].COPY5);
      setText6(hasData[5].COPY6);
      setText7(hasData[5].COPY7);
      setText8(hasData[5].COPY8);
      setText9(hasData[5].COPY9);
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

        <InsightsBlock 
          insights1="1. Understand user need and create journey maps"
          insights2="2. Account for users to both save and compose queries"
          insights3="3. Design flexible rule blocks that accomodate data types"
          insights4="4. Provide detailed screens to handoff to developers"
        />

        <Block subhead="Stateful component design" subtext={text1}  />
        <Image image={image2} />
        
        <Block subhead="Building user journeys" subtext={text2}  />
        <Image image={image3} />

        <Block subhead="Designing rule blocks to fit data types" subtext={text3}/>
        <Image image={image4} />

        {/* Approach */}
        <Block subhead="Design Iteration" subtext={text4}/>
        <Image image={image5} />

        <Block subhead="Before and After" subtext={text5}/>
        <BeforeAfterReact
        firstImgSrc={image7}  
        secondImgSrc={image6} 
        containerClass="before-after-container"
        />

        <NextBack backurl="/motionlib" nexturl="/mcd" />
        
      </div>

    </div>
  );

};

export default Search;



