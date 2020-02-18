import React from 'react';
import { Template } from 'govuk-react-jsx';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './Home';
import { ReactHookForm } from './forms/ReactHookForm';

const headerProps = {
  serviceName: 'govuk-react-jsx examples',
  navigation: [
    {
      children: 'react-hook-form',
      to: '/forms/react-hook-form',
    },
  ],
};

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Template header={headerProps}>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/forms/react-hook-form">
          <ReactHookForm />
        </Route>
      </Template>
    </Router>
  );
}

export default App;
