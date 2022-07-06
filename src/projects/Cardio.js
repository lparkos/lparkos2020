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

const Cardio = () => {
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
      setProject(hasData[0].PROJECT);
      setClient(hasData[0].CLIENT);
      setSummary(hasData[0].SUMMARY);
      setSuccess(hasData[0].SUCCESS);
      setTimeline(hasData[0].TIMELINE);
      setBizgoal(hasData[0].GOAL);
      setProblem(hasData[0].PROBLEM);
      setApproach(hasData[0].APPROACH);

      setImage1(hasData[0].IMAGE1);
      setImage2(hasData[0].IMAGE2);
      setImage3(hasData[0].IMAGE3);
      setImage4(hasData[0].IMAGE4);
      setImage5(hasData[0].IMAGE5);
      setImage6(hasData[0].IMAGE6);
      setImage7(hasData[0].IMAGE7);
      setImage8(hasData[0].IMAGE8);
      setImage9(hasData[0].IMAGE9);
      setImage10(hasData[0].IMAGE10);
      setImage11(hasData[0].IMAGE11);
      setImage12(hasData[0].IMAGE12);


      setText1(hasData[0].COPY1);
      setText2(hasData[0].COPY2);
      setText3(hasData[0].COPY3);
      setText4(hasData[0].COPY4);
      setText5(hasData[0].COPY5);
      setText6(hasData[0].COPY6);
      setText4(hasData[0].COPY4);
      setText5(hasData[0].COPY5);
      setText6(hasData[0].COPY6);
      setText7(hasData[0].COPY7);
      setText8(hasData[0].COPY8);
      setText9(hasData[0].COPY9);
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

        <Block subhead="Gathering Requirements" subtext={text1}  />

        <InsightsBlock 
          insights1="1. What is technically possible, realistic and can adapt?"
          insights2="2. Clinicians want to easily switch between multiple charts"
          insights3="3. Clinicians want to see connection with patient events"
          insights4="4. Are we on track? Are clinicians responding to the design?"
        />

        <Block subhead="1. Design & Technology Research" subtext={text2}  />
        <Image image={image2} />

        <Block subhead="2. Data Analysis" subtext={text3}  />
        <Image image={image3} />

        <Block subhead="2.1 Building the Primary Disease Stage Chart" subtext={text4}/>
        <Image image={image4} />

        <Block subhead="3. Connecting Event Data" subtext={text5}/>
        <Image image={image5} />

        <Block subhead="4. Design Iteration" subtext={text6}/>
        <Image image={image6} />

        <Block subhead="4.1 Final Layout" subtext={text7}/>
        <Image image={image7} />

        {/* Approach */}
        <Block subhead="4.2 Before & After" subtext={text8}/>

        <BeforeAfterReact
        firstImgSrc={image10}  
        secondImgSrc={image9} 
        containerClass="before-after-container"
        />

        <NextBack backurl="/goldman" nexturl="/voiceux" />
        
      </div>

    </div>
  );

};

export default Cardio;



