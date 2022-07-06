import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import styles from '../styles/Main.module.css';
import getContent from '../components/getContent.js';

const Greeting = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");


  const projectData = async () => {
    const hasData = await getContent();
      setText1(hasData[15].COPY1);
      setText2(hasData[15].COPY2);
      setText3(hasData[15].COPY3);
      setText4(hasData[15].COPY4);
  };

  useEffect(() => {
    projectData();
  }, []);

  return (
 
    <div className="greeting-message is-size-4">
        <p className="pb-5">{text1}</p>
        <p className="pb-5">{text2}</p>
        <p>{text3}</p>
      </div>


  );

};

export default Greeting;

