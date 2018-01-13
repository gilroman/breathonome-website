// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import '../css/normalize.css';
import '../css/style.css';

const App = () => (
  <BrowserRouter>
    <div className="breath~onome-site">
      <Route exact path="/" component={Landing} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={PrivacyPolicy} />
    </div>
  </BrowserRouter>
);

const renderApp = () => {
  const appElement = document.getElementById('app');

  if (document && appElement) {
    render(<App />, appElement);
  }
};

renderApp();
