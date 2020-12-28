import React, {useState} from "react";
import {IntlProvider} from "react-intl";
import Dutch from "../../languages/nl.json"
import English from "../../languages/en-US.json"

export const Context = React.createContext();
const local = navigator.language;

let lang;
if(local === "en-US") {
  lang = English;
} else {
  lang = Dutch;
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "nl") {
            setMessages(Dutch);
        }
        if (newLocale === "en-US") {
            setMessages(English);
        }
    }
    return (
        <Context.Provider value={{locale, selectLang}}>
            <IntlProvider messages={messages} locale={locale}>{props.children}</IntlProvider>
        </Context.Provider>
        
    )
}

export default Wrapper;