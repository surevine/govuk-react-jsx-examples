import React from 'react';
import { Template } from 'govuk-react-jsx';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { HelloWorld } from './HelloWorld';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Template>
        <Route exact path="/">
          <HelloWorld />
        </Route>
      </Template>
    </Router>
  );
}

export default App;
