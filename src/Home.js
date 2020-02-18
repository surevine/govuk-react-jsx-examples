import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1 className="govuk-heading-xl">govuk-react-jsx-examples</h1>
      <h2 className="govuk-heading-l">Typography</h2>
      <p className="govuk-body">
        govuk-react-jsx makes direct use of{' '}
        <a
          className="govuk-link"
          href="https://design-system.service.gov.uk/styles/typography/"
          target="_blank"
          rel="noopener noreferrer"
        >
          govuk-frontend
        </a>{' '}
        styles for things such as typography
      </p>
      <h2 className="govuk-heading-m">Medium Heading</h2>
      <h3 className="govuk-heading-s">Small Heading</h3>
      <p className="govuk-body-l">Large paragraph</p>
      <p className="govuk-body">Standard paragraph</p>
      <p className="govuk-body-s">Small paragraph</p>

      <h2 className="govuk-heading-l">Form demos</h2>
      <ul className="govuk-list govuk-list--bullet">
        <li>
          <Link className="govuk-link" to="/forms/react-hook-form">
            React hook form
          </Link>
        </li>
      </ul>
    </>
  );
}

export { Home };
