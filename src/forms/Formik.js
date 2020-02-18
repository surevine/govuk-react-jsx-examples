import React from 'react';
import { Button, Input, ErrorSummary } from 'govuk-react-jsx';
import { useFormik } from 'formik';

function Formik() {
  const validate = values => {
    const errors = {};

    if (!values.nino) {
      errors.nino = 'National Insurance Number is Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      nino: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <span className="govuk-caption-xl">govuk-react-jsx</span>
      <h1 className="govuk-heading-xl">Formik Example</h1>

      {Object.keys(formik.errors).length !== 0 && (
        <ErrorSummary
          errorList={Object.entries(formik.errors).map(error => ({
            href: `#${error[0]}`,
            children: error[1],
          }))}
        />
      )}

      <form onSubmit={formik.handleSubmit}>
        <Input
          hint={{
            children:
              'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
          }}
          id="nino"
          label={{
            children: 'National insurance number',
          }}
          name="nino"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nino}
          {...(formik.errors.nino && {
            errorMessage: {
              children: formik.errors.nino,
            },
          })}
        />
        <Button className="govuk-!-margin-right-3">Continue</Button>
      </form>
    </>
  );
}

export { Formik };
