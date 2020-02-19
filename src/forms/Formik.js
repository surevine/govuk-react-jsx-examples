import React from 'react';
import {
  Button,
  Input,
  ErrorSummary,
  Checkboxes,
  Radios,
  Select,
  Textarea,
  Fieldset,
} from 'govuk-react-jsx';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Helmet from 'react-helmet';

function Formik() {
  const FormValidationSchema = yup.object().shape({
    nino: yup.string().required('Custom validation message example'),
    'favourite-colour': yup.string().required(),
    'yes-no': yup.string().required(),
    'select-1': yup.string().required(),
    'more-detail': yup.string().required(),
    'how-contacted': yup.string(),
    email: yup.string().when('how-contacted', {
      is: 'email',
      then: yup.string().required(),
    }),
  });

  const formik = useFormik({
    initialValues: {
      nino: '',
      'favourite-colour': '',
      'yes-no': 'yes',
      'select-1': '1',
      'more-detail': '',
      'how-contacted': '',
      email: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: FormValidationSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Helmet>
        <title>Formik example</title>
      </Helmet>

      <h1 className="govuk-heading-xl">
        Formik example
        <span className="govuk-caption-m">
          <a
            className="govuk-link"
            href="https://github.com/jaredpalmer/formik"
          >
            (github/formik)
          </a>
        </span>
      </h1>

      <p className="govuk-body">
        Also using <a href="https://github.com/jquense/yup">yup</a> for
        validation. Base library will work without yup, and conditional
        validation is possible via the validate callback, but Yup has been used
        for consistency with the other form demos and because it's just cleaner
        in my opinion. But feel free to use something else, or just write a
        validate callback yourself.
      </p>

      <hr className="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          {Object.keys(formik.errors).length !== 0 && (
            <ErrorSummary
              errorList={Object.entries(formik.errors).map(error => ({
                href: `#${error[0]}`,
                children: error[1],
              }))}
            />
          )}

          <form onSubmit={formik.handleSubmit}>
            <Fieldset
              legend={{
                children: 'Form elements',
                className: 'govuk-fieldset__legend--l',
              }}
            >
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

              <Checkboxes
                fieldset={{
                  legend: {
                    children: 'How do you want to be contacted?',
                  },
                }}
                idPrefix="how-contacted"
                name="how-contacted"
                onChange={formik.handleChange}
                value={formik.values['how-contacted']}
                {...(formik.errors['how-contacted'] && {
                  errorMessage: {
                    children: formik.errors['how-contacted'],
                  },
                })}
                items={[
                  {
                    children: 'Email',
                    conditional: {
                      children: (
                        <Input
                          id="email"
                          label={{
                            children: 'Email',
                          }}
                          name="email"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          {...(formik.errors.email && {
                            errorMessage: {
                              children: formik.errors.email,
                            },
                          })}
                        />
                      ),
                    },
                    value: 'email',
                  },
                ]}
              />
              <Radios
                fieldset={{
                  legend: {
                    children: 'Which is your favourite colour?',
                  },
                }}
                idPrefix="favourite-colour"
                name="favourite-colour"
                onChange={formik.handleChange}
                value={formik.values['favourite-colour']}
                {...(formik.errors['favourite-colour'] && {
                  errorMessage: {
                    children: formik.errors['favourite-colour'],
                  },
                })}
                items={[
                  {
                    children: 'Red',
                    value: 'red',
                  },
                  {
                    children: 'Green',
                    value: 'green',
                  },
                  {
                    children: 'Yellow',
                    value: 'yellow',
                  },
                ]}
              />

              <Radios
                fieldset={{
                  legend: {
                    children: 'Radios with a default value',
                  },
                }}
                idPrefix="yes-no"
                name="yes-no"
                onChange={formik.handleChange}
                value={formik.values['yes-no']}
                {...(formik.errors['yes-no'] && {
                  errorMessage: {
                    children: formik.errors['yes-no'],
                  },
                })}
                items={[
                  {
                    children: 'Yes',
                    value: 'yes',
                  },
                  {
                    children: 'No',
                    value: 'no',
                  },
                ]}
              />

              <Select
                id="select-1"
                items={[
                  {
                    children: 'GOV.UK frontend option 1',
                    value: 1,
                  },
                  {
                    children: 'GOV.UK frontend option 2',
                    value: 2,
                  },
                  {
                    children: 'GOV.UK frontend option 3',
                    disabled: true,
                    value: 3,
                  },
                ]}
                label={{
                  children: 'Label text goes here',
                }}
                name="select-1"
                onChange={formik.handleChange}
                value={formik.values['select-1']}
                {...(formik.errors['select-1'] && {
                  errorMessage: {
                    children: formik.errors['select-1'],
                  },
                })}
              />

              <Textarea
                hint={{
                  children:
                    'Don’t include personal or financial information, eg your National Insurance number or credit card details.',
                }}
                id="more-detail"
                label={{
                  children: 'Can you provide more detail?',
                }}
                name="more-detail"
                onChange={formik.handleChange}
                value={formik.values['more-detail']}
                {...(formik.errors['more-detail'] && {
                  errorMessage: {
                    children: formik.errors['more-detail'],
                  },
                })}
              />

              <Button>Submit</Button>
            </Fieldset>
          </form>
        </div>

        <div className="govuk-grid-column-one-third">
          <h2 className="govuk-heading-l">Form data</h2>
          <code>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          </code>
        </div>
      </div>
    </>
  );
}

export { Formik };
