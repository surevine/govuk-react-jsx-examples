import React from 'react';
import { Template } from 'govuk-react-jsx';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Home } from './Home';
import { ReactHookForm } from './forms/ReactHookForm';
import { Formik } from './forms/Formik';

const headerProps = {
  serviceName: 'govuk-react-jsx examples',
  navigation: [
    {
      children: 'Formik',
      to: '/forms/formik',
    },
    {
      children: 'React hook form',
      to: '/forms/react-hook-form',
    },
  ],
};

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Template header={headerProps}>
        <Helmet>
          <title>govuk-react-jsx examples</title>
        </Helmet>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/forms/react-hook-form">
          <ReactHookForm />
        </Route>

        <Route path="/forms/formik">
          <Formik />
        </Route>
      </Template>
    </Router>
  );
}

export default App;
