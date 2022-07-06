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

const Comcast = () => {
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
      setProject(hasData[7].PROJECT);
      setClient(hasData[7].CLIENT);
      setSummary(hasData[7].SUMMARY);
      setSuccess(hasData[7].SUCCESS);
      setTimeline(hasData[7].TIMELINE);
      setBizgoal(hasData[7].GOAL);
      setProblem(hasData[7].PROBLEM);
      setApproach(hasData[7].APPROACH);

      setImage1(hasData[7].IMAGE1);
      setImage2(hasData[7].IMAGE2);
      setImage3(hasData[7].IMAGE3);
      setImage4(hasData[7].IMAGE4);
      setImage5(hasData[7].IMAGE5);
      setImage6(hasData[7].IMAGE6);
      setImage7(hasData[7].IMAGE7);
      setImage8(hasData[7].IMAGE8);
      setImage9(hasData[7].IMAGE9);
      setImage10(hasData[7].IMAGE10);
      setImage11(hasData[7].IMAGE11);
      setImage12(hasData[7].IMAGE12);

      setText1(hasData[7].COPY1);
      setText2(hasData[7].COPY2);
      setText3(hasData[7].COPY3);
      setText4(hasData[7].COPY4);
      setText5(hasData[7].COPY5);
      setText6(hasData[7].COPY6);
      setText4(hasData[7].COPY4);
      setText5(hasData[7].COPY5);
      setText6(hasData[7].COPY6);
      setText7(hasData[7].COPY7);
      setText8(hasData[7].COPY8);
      setText9(hasData[7].COPY9);
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

        <Image image={image2} />
        <Image image={image3} />
        
        <NextBack backurl="/mcd" nexturl="/goldman" />
      </div>
    </div>
  );

};

export default Comcast;


  