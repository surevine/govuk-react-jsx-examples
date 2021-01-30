/*

OLD AND BROKEN - DO NOT USE

The code in this example does not work since React Hook Form was updated.
I will fix it at some point, probably the next time someone asks for it...

.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.

*/

// import React from 'react';
// import {
//   Button,
//   Input,
//   ErrorSummary,
//   Checkboxes,
//   Radios,
//   Select,
//   Textarea,
//   Fieldset,
// } from 'govuk-react-jsx';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { Helmet } from 'react-helmet';

// function ReactHookForm() {
//   const FormValidationSchema = yup.object().shape({
//     nino: yup.string().required('Custom validation message example'),
//     'favourite-colour': yup.string().required(),
//     'yes-no': yup.string().required(),
//     'select-1': yup.string().required(),
//     'more-detail': yup.string().required(),
//     'how-contacted': yup.string(),
//     email: yup.string().when('how-contacted', {
//       is: 'email',
//       then: yup.string().required(),
//     }),
//   });

//   const { register, handleSubmit, errors, getValues } = useForm({
//     reValidateMode: 'onSubmit',
//     submitFocusError: false,
//     validationSchema: FormValidationSchema,
//   });

//   const onSubmit = (data) => {
//     console.log('data', data);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>React hook form example</title>
//       </Helmet>

//       <h1 className="govuk-heading-xl">
//         react-hook-form example
//         <span className="govuk-caption-m">
//           <a
//             className="govuk-link"
//             href="https://github.com/react-hook-form/react-hook-form"
//           >
//             (github/react-hook-form)
//           </a>
//         </span>
//       </h1>

//       <p className="govuk-body">
//         Also using <a href="https://github.com/jquense/yup">yup</a> for
//         validation. Base library will work without yup, but conditional
//         validation on the email field was not possible without it.
//       </p>

//       <hr className="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />

//       <div className="govuk-grid-row">
//         <div className="govuk-grid-column-two-thirds">
//           {Object.keys(errors).length !== 0 && (
//             <ErrorSummary
//               errorList={Object.entries(errors).map((error) => ({
//                 href: `#${error[0]}`,
//                 children: error[1].message,
//               }))}
//             />
//           )}

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <Fieldset
//               legend={{
//                 children: 'Form elements',
//                 className: 'govuk-fieldset__legend--l',
//               }}
//             >
//               <Input
//                 hint={{
//                   children:
//                     'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
//                 }}
//                 id="nino"
//                 label={{
//                   children: 'National insurance number',
//                 }}
//                 name="nino"
//                 type="text"
//                 ref={register()}
//                 {...(errors.nino && {
//                   errorMessage: {
//                     children: errors.nino.message,
//                   },
//                 })}
//               />

//               <Checkboxes
//                 fieldset={{
//                   legend: {
//                     children: 'How do you want to be contacted?',
//                   },
//                 }}
//                 idPrefix="how-contacted"
//                 name="how-contacted"
//                 items={[
//                   {
//                     ref: register(),
//                     children: 'Email',
//                     conditional: {
//                       children: (
//                         <Input
//                           id="email"
//                           label={{
//                             children: 'Email',
//                           }}
//                           name="email"
//                           type="text"
//                           ref={register()}
//                           {...(errors.email && {
//                             errorMessage: {
//                               children: errors.email.message,
//                             },
//                           })}
//                         />
//                       ),
//                     },
//                     value: 'email',
//                   },
//                 ]}
//               />

//               <Radios
//                 fieldset={{
//                   legend: {
//                     children: 'Which is your favourite colour?',
//                   },
//                 }}
//                 idPrefix="favourite-colour"
//                 name="favourite-colour"
//                 {...(errors['favourite-colour'] && {
//                   errorMessage: {
//                     children: errors['favourite-colour'].message,
//                   },
//                 })}
//                 items={[
//                   {
//                     ref: register(),
//                     children: 'Red',
//                     value: 'red',
//                   },
//                   {
//                     ref: register(),
//                     children: 'Green',
//                     value: 'green',
//                   },
//                   {
//                     ref: register(),
//                     children: 'Yellow',
//                     value: 'yellow',
//                   },
//                 ]}
//               />

//               <Radios
//                 fieldset={{
//                   legend: {
//                     children: 'Radios with a default value',
//                   },
//                 }}
//                 idPrefix="yes-no"
//                 name="yes-no"
//                 defaultValue="yes"
//                 {...(errors['yes-no'] && {
//                   errorMessage: {
//                     children: errors['yes-no'].message,
//                   },
//                 })}
//                 items={[
//                   {
//                     ref: register(),
//                     children: 'Yes',
//                     value: 'yes',
//                   },
//                   {
//                     ref: register(),
//                     children: 'No',
//                     value: 'no',
//                   },
//                 ]}
//               />

//               <Select
//                 id="select-1"
//                 items={[
//                   {
//                     children: 'GOV.UK frontend option 1',
//                     value: 1,
//                   },
//                   {
//                     children: 'GOV.UK frontend option 2',
//                     value: 2,
//                   },
//                   {
//                     children: 'GOV.UK frontend option 3',
//                     disabled: true,
//                     value: 3,
//                   },
//                 ]}
//                 label={{
//                   children: 'Label text goes here',
//                 }}
//                 name="select-1"
//                 defaultValue={2}
//                 ref={register()}
//                 {...(errors['select-1'] && {
//                   errorMessage: {
//                     children: errors['select-1'].message,
//                   },
//                 })}
//               />

//               <Textarea
//                 hint={{
//                   children:
//                     'Don’t include personal or financial information, eg your National Insurance number or credit card details.',
//                 }}
//                 id="more-detail"
//                 label={{
//                   children: 'Can you provide more detail?',
//                 }}
//                 name="more-detail"
//                 ref={register()}
//                 {...(errors['more-detail'] && {
//                   errorMessage: {
//                     children: errors['more-detail'].message,
//                   },
//                 })}
//               />

//               <Button>Submit</Button>
//             </Fieldset>
//           </form>
//         </div>
//         <div className="govuk-grid-column-one-third">
//           <h2 className="govuk-heading-l">Form data</h2>
//           <p className="govuk-body">
//             With react-hook-form, this won't show values until the form is
//             submitted
//           </p>
//           <code>
//             <pre>{JSON.stringify(getValues(), null, 2)}</pre>
//           </code>
//         </div>
//       </div>
//     </>
//   );
// }

// export { ReactHookForm };
