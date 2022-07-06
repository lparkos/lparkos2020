import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import getContent from '../components/getContent.js';
import ProjectHero from "../components/ProjectHero.js";
import ProjectSetup from "../components/ProjectSetup.js";
import Block from "../components/Block.js";
import NextBack from "../components/NextBack.js";
import Image from "../components/Image.js";
import InsightsBlock from "../components/InsightsBlock.js";

const VoiceUX = () => {
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
      setProject(hasData[1].PROJECT);
      setClient(hasData[1].CLIENT);
      setSummary(hasData[1].SUMMARY);
      setSuccess(hasData[1].SUCCESS);
      setTimeline(hasData[1].TIMELINE);
      setBizgoal(hasData[1].GOAL);
      setProblem(hasData[1].PROBLEM);
      setApproach(hasData[1].APPROACH);

      setImage1(hasData[1].IMAGE1);
      setImage2(hasData[1].IMAGE2);
      setImage3(hasData[1].IMAGE3);
      setImage4(hasData[1].IMAGE4);
      setImage5(hasData[1].IMAGE5);
      setImage6(hasData[1].IMAGE6);
      setImage7(hasData[1].IMAGE7);
      setImage8(hasData[1].IMAGE8);
      setImage9(hasData[1].IMAGE9);
      setImage10(hasData[1].IMAGE10);
      setImage11(hasData[1].IMAGE11);
      setImage12(hasData[1].IMAGE12);

      setText1(hasData[1].COPY1);
      setText2(hasData[1].COPY2);
      setText3(hasData[1].COPY3);
      setText4(hasData[1].COPY4);
      setText5(hasData[1].COPY5);
      setText6(hasData[1].COPY6);
      setText4(hasData[1].COPY4);
      setText5(hasData[1].COPY5);
      setText6(hasData[1].COPY6);
      setText7(hasData[1].COPY7);
      setText8(hasData[1].COPY8);
      setText9(hasData[1].COPY9);
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

        <Block subhead="Approach" subtext={text1} />

        <Image image={image3} />

        <Block subhead="Identifying opportunites" subtext={text2} />

        <Image image={image4} />

        <Block subhead="Finding value" subtext={text3} />

        <Image image={image5} />

        <Block subhead="Desiging a common utterance" subtext={text6} />
        <Image image={image6} />

        <Block subhead="Designing a response" subtext={text7}/>
        <Image image={image7} />

        <Block subhead="Light & Sound" subtext={text8}/>
        <Image image={image8} />

        <Block subhead="Prototyping with Amazon" subtext={text9}/>
        <Image image={image9} />

        <NextBack backurl="/cardio" nexturl="/scrolling" />
      </div>
    </div>
  );

};

export default VoiceUX;
