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

const Scrolling = () => {
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
      setProject(hasData[2].PROJECT);
      setClient(hasData[2].CLIENT);
      setSummary(hasData[2].SUMMARY);
      setSuccess(hasData[2].SUCCESS);
      setTimeline(hasData[2].TIMELINE);
      setBizgoal(hasData[2].GOAL);
      setProblem(hasData[2].PROBLEM);
      setApproach(hasData[2].APPROACH);

      setImage1(hasData[2].IMAGE1);
      setImage2(hasData[2].IMAGE2);
      setImage3(hasData[2].IMAGE3);
      setImage4(hasData[2].IMAGE4);
      setImage5(hasData[2].IMAGE5);
      setImage6(hasData[2].IMAGE6);
      setImage7(hasData[2].IMAGE7);
      setImage8(hasData[2].IMAGE8);
      setImage9(hasData[2].IMAGE9);
      setImage10(hasData[2].IMAGE10);
      setImage11(hasData[2].IMAGE11);
      setImage12(hasData[2].IMAGE12);


      setText1(hasData[2].COPY1);
      setText2(hasData[2].COPY2);
      setText3(hasData[2].COPY3);
      setText4(hasData[2].COPY4);
      setText5(hasData[2].COPY5);
      setText6(hasData[2].COPY6);
      setText4(hasData[2].COPY4);
      setText5(hasData[2].COPY5);
      setText6(hasData[2].COPY6);
      setText7(hasData[2].COPY7);
      setText8(hasData[2].COPY8);
      setText9(hasData[2].COPY9);
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

        {/* Approach */}
        <Block subhead="Approach" subtext={text1} />

        <InsightsBlock 
          insights1="1. Understand user workflow and behaviours"
          insights2="2. Audit scrolling technology used amongst users"
          insights3="3. Explore patterns that aleviate strain"
          insights4="4. Test on users to assess risk and feedback"
        />

        <Block subhead="Job shadow and technology audit" subtext={text2} />

        {/* IMAGE OLD CP */}
        <Image image={image2} />

        <Block subtext={text3}/>

        <Block subhead="Code a similar environment" subtext={text4} />
        <Image image={image3} />

        <Block subhead="Design Ideation" subtext={text5} />

        <div className="pt-6">
          <iframe src="https://player.vimeo.com/video/465964261" width="800px" height="450px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <div className="pt-6">
          <iframe src="https://player.vimeo.com/video/465962926" width="800px" height="450px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <div className="pt-6">
          <iframe src="https://player.vimeo.com/video/465963175" width="800px" height="450px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>

        <Block subhead="Gathering insights" subtext={text6} />

        <Block subhead="Unique ideas" subtext={text7} />
        <Image image={image4} />

        <NextBack backurl="/voiceux" nexturl="/rcm" />
      </div>
    </div>
  );

};

export default Scrolling;




