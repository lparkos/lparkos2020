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

const MCD = () => {
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
      setProject(hasData[6].PROJECT);
      setClient(hasData[6].CLIENT);
      setSummary(hasData[6].SUMMARY);
      setSuccess(hasData[6].SUCCESS);
      setTimeline(hasData[6].TIMELINE);
      setBizgoal(hasData[6].GOAL);
      setProblem(hasData[6].PROBLEM);
      setApproach(hasData[6].APPROACH);

      setImage1(hasData[6].IMAGE1);
      setImage2(hasData[6].IMAGE2);
      setImage3(hasData[6].IMAGE3);
      setImage4(hasData[6].IMAGE4);
      setImage5(hasData[6].IMAGE5);
      setImage6(hasData[6].IMAGE6);
      setImage7(hasData[6].IMAGE7);
      setImage8(hasData[6].IMAGE8);
      setImage9(hasData[6].IMAGE9);
      setImage10(hasData[6].IMAGE10);
      setImage11(hasData[6].IMAGE11);
      setImage12(hasData[6].IMAGE12);

      setText1(hasData[6].COPY1);
      setText2(hasData[6].COPY2);
      setText3(hasData[6].COPY3);
      setText4(hasData[6].COPY4);
      setText5(hasData[6].COPY5);
      setText6(hasData[6].COPY6);
      setText4(hasData[6].COPY4);
      setText5(hasData[6].COPY5);
      setText6(hasData[6].COPY6);
      setText7(hasData[6].COPY7);
      setText8(hasData[6].COPY8);
      setText9(hasData[6].COPY9);
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

        <Block subhead="Main projects" subtext={text1} />

        <InsightsBlock 
          insights1="Rapid prototyping user flows"
          insights2="Localization of different markets"
          insights3="Create reusable animations"
          insights4="Facilitate kiosk testing sessions"
        />

        <div className="columns pt-3 is-centered">
            <div className="column is-four-fifths">
                <div class="container pt-6 columns is-variable is-5 is-vcentered is-multiline">
                    <div class="column">
                        <div class="has-text-centered p-5">
                            <img className="ten" src={image2}/>
                        </div>
                    </div>
                    <div class="column">
                        <div class="has-text-centered p-5">
                            <img className="ten" src={image3}/>
                        </div>
                    </div>             
                </div>
            </div>
        </div>

        <Block subhead="Prototyping" subtext={text2} />
        <Block subhead="Localization" subtext={text3} />
        <Block subhead="Facilitating user testing" subtext={text4} />
        <Block subhead="Creating reusable animations" subtext={text5} />
        <Image image={image4} />

        <Block subhead="Ordering flow" subtext={text6} />
        <div className="pt-6 pb-6">
          <iframe src="https://player.vimeo.com/video/241453313" width="800px" height="450px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>

        <NextBack backurl="/search" nexturl="/comcast" />


      </div>
    </div>
  );

};

export default MCD;


