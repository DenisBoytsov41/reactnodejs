import React, { useState, useEffect } from 'react';
import CookieBanner from './components/CookieBanner';
import LoginForm from './components/LoginForm';
import './css/mainstyle.css';
import './css/cockie.css';
import RegistrationForm from './components/RegistrationForm';
import ThemeToggle from './components/ThemeToggle';
import MyButton from './components/MyButton';
import GlobalAssets from './components/GlobalAssets';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const addStylesAndScripts = () => {
      const linkBootstrap = document.createElement('link');
      linkBootstrap.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
      linkBootstrap.rel = 'stylesheet';
      document.head.appendChild(linkBootstrap);

      const linkMainstyle = document.createElement('link');
      linkMainstyle.href = 'mainstyle.css';
      linkMainstyle.rel = 'stylesheet';
      document.head.appendChild(linkMainstyle);

      const linkCockie = document.createElement('link');
      linkCockie.href = './css/cockie.css  ';
      linkCockie.rel = 'stylesheet';
      document.head.appendChild(linkCockie);

      const scriptRecaptcha = document.createElement('script');
      scriptRecaptcha.src = 'https://www.google.com/recaptcha/api.js';
      scriptRecaptcha.async = true;
      scriptRecaptcha.defer = true;
      document.body.appendChild(scriptRecaptcha);

      const scriptCookieConsent = document.createElement('script');
      scriptCookieConsent.src = 'https://cdn.osano.com/cookieconsent/OsanoCookieConsent.js';
      document.body.appendChild(scriptCookieConsent);

      const scriptJQuerySlim = document.createElement('script');
      scriptJQuerySlim.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
      document.body.appendChild(scriptJQuerySlim);

      const scriptPopper = document.createElement('script');
      scriptPopper.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js';
      document.body.appendChild(scriptPopper);

      const scriptBootstrap = document.createElement('script');
      scriptBootstrap.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
      document.body.appendChild(scriptBootstrap);

      const scriptJQuery = document.createElement('script');
      scriptJQuery.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
      document.body.appendChild(scriptJQuery);
    };

    addStylesAndScripts();

    return () => {
      const linksToRemove = document.querySelectorAll('link[href^="https://stackpath.bootstrapcdn.com"]');
      linksToRemove.forEach((link) => document.head.removeChild(link));

      const scriptsToRemove = document.querySelectorAll('script[src^="https://"]');
      scriptsToRemove.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  const handleLoginBtnClick = () => {
    setShowLoginForm(true);
    setShowRegistrationForm(false);
  };

  const handleRegisterBtnClick = () => {
    setShowRegistrationForm(true);
    setShowLoginForm(false);
  };

  const handleAcceptCookiesBtnClick = () => {
    setShowCookieBanner(false);
    localStorage.setItem('cookiesAccepted', true);
  };

  return (
    <div className="container">
      <GlobalAssets />
      <h2>Приветствуем на нашем сайте</h2>
      <MyButton id="loginButton" onClick={handleLoginBtnClick} className="btn">Авторизация</MyButton>
      <MyButton id="registerButton" onClick={handleRegisterBtnClick} className="btn">Регистрация</MyButton>
      <ThemeToggle />
      <div style={{ display: showLoginForm ? 'block' : 'none' }} className="form-container">
        <h3>Форма авторизации</h3>
        <LoginForm />
      </div>
      <div style={{ display: showRegistrationForm ? 'block' : 'none' }} className="form-container">
        <h3>Форма регистрации</h3>
        <RegistrationForm />
      </div>
      <CookieBanner show={showCookieBanner} onAccept={handleAcceptCookiesBtnClick} />
    </div>
  );
}

export default App;
