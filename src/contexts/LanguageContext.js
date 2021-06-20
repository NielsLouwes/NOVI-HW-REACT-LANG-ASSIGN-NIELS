import React, {createContext, useState} from 'react';

export const LanguageContext = createContext({});

export default function LanguageContextProvider(props) {
    console.log("PROPS IN LANG" , props);

    const [language, setLanguage] = useState("nl");


    return (
        <LanguageContext.Provider value={{
            language: language,
            setLanguage: setLanguage,
        }}>
            {props.children}
        </LanguageContext.Provider>
    )
}