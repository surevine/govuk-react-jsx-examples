import React from 'react';
import { Button, Input, ErrorSummary, Checkboxes } from 'govuk-react-jsx';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

function ReactHookForm() {
  const FormValidationSchema = yup.object().shape({
    nino: yup.string().required(),
    'how-contacted': yup.string(),
    email: yup.string().when('how-contacted', {
      is: 'email',
      then: yup.string().required(),
    }),
  });

  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onSubmit',
    submitFocusError: false,
    validationSchema: FormValidationSchema,
  });

  const onSubmit = data => {
    console.log('data', data);
  };

  return (
    <>
      <h1 className="govuk-heading-xl">
        react-hook-form example
        <span className="govuk-caption-m">
          <a
            className="govuk-link"
            href="https://github.com/react-hook-form/react-hook-form"
          >
            (github/react-hook-form)
          </a>
        </span>
      </h1>

      {Object.keys(errors).length !== 0 && (
        <ErrorSummary
          errorList={Object.entries(errors).map(error => ({
            href: `#${error[0]}`,
            children: error[1].message,
          }))}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
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
          ref={register()}
          {...(errors.nino && {
            errorMessage: {
              children: errors.nino.message,
            },
          })}
        />

        <Checkboxes
          fieldset={{
            legend: {
              children: ['How do you want to be contacted?'],
            },
          }}
          idPrefix="how-contacted"
          items={[
            {
              ref: register(),
              children: ['Email'],
              conditional: {
                children: (
                  <Input
                    id="email"
                    label={{
                      children: 'Email',
                    }}
                    name="email"
                    type="text"
                    ref={register()}
                    {...(errors.email && {
                      errorMessage: {
                        children: errors.email.message,
                      },
                    })}
                  />
                ),
              },
              value: 'email',
            },
          ]}
          name="how-contacted"
        />

        <Button>Submit</Button>
      </form>
    </>
  );
}

export { ReactHookForm };
