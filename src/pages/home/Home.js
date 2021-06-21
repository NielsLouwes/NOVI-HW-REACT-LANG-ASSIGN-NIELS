import React, {useContext} from 'react';
import content from '../../data/content.json';
import {LanguageContext} from "../../contexts/LanguageContext";

function Home() {

    const {language, setLanguage} = useContext(LanguageContext)

  return (
    <div className="page-container">
      <h2>{content[language].home.title}</h2>
      <p>{content[language].home.introText}</p>
    </div>
  );
}

export default Home;
