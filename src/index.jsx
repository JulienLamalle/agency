import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import fr from './translations/fr';
import en from './translations/en';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'

// SCSS 
import './index.scss' 

const messages = {
  fr: fr,
  en: en,
};

const App = () => {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    if (localStorage.getItem('language')) {
      setLanguage(localStorage.getItem("language"));
    }
  }, []);

  const switchLanguage = () => {
    console.log(language)
    if (language === 'fr') {
      setLanguage('en');
      localStorage.setItem('language', 'en');
    } else {
      setLanguage('fr');
      localStorage.setItem('language', 'fr');
    }
  }

  return(
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <Header language={language} switchLanguage={switchLanguage} />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        </Switch>
      </Router>
    </IntlProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))