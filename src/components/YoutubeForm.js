import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useFormik,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
const initialValues = {
  name: "Mohini",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Invalid email format";
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Invalid Email Format").required("Required"),
  channel: Yup.string().required("Required"),
  // comments:Yup.string().required('Required')
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};
const YoutubeForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {
          formik=>{
            console.log('Formik props',formik)
            return(
              <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" placeholder="Name" />
                <br />
                <br />
                <ErrorMessage name="name" component={TextError} />
              </div>
    
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="Name" />
                <br />
                <br />
                <ErrorMessage name="email">
                  {(errorMsg) => <div className="error">{errorMsg}</div>}
                </ErrorMessage>
              </div>
    
              <div>
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  id="channel"
                  name="channel"
                  placeholder="Channel"
                />
                <br />
                <br />
                <ErrorMessage name="channel" />
              </div>
    
              <div className="form-control">
                <label htmlFor="comments">Comments</label>
    
                <Field
                  component="textarea"
                  id="comments"
                  name="comments"
                  validate={validateComments}
                ></Field>
                <ErrorMessage name="comments" component={TextError} />
              </div>
    
              <div className="form-control">
                <label htmlFor="address">Address</label>
                <FastField name="address">
                  {(props) => {
                    const { field, meta } = props;
                    console.log("Field render ", props);
                    return (
                      <div>
                        <input type="address" {...field} />
                        {/* {...field} this the take care of handleChange and handleBlur */}
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </FastField>
              </div>
    
              <div className="form-control">
                <label htmlFor="facebook">Facebook profile</label>
                <Field type="text" id="facebook" name="social.facebook" />
              </div>
    
              <div className="form-control">
                <label htmlFor="twitter">Twitter profile</label>
                <Field type="text" id="twitter" name="social.twitter" />
              </div>
    
              <div className="form-control">
                <label htmlFor="primaryPh">Primary phone number</label>
                <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
              </div>
    
              <div className="form-control">
                <label htmlFor="secondaryPh">Secondary phone number</label>
                <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
              </div>
    
              <div className="form-control">
                <label htmlFor="">List of phone numbers</label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    console.log("Form errors", form.errors);
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button type="button" onClick={() => remove(index)}>
                                {" "}
                                -{" "}
                              </button>
                            )}
                            <button type="button" onClick={() => push("")}>
                              {" "}
                              +{" "}
                            </button>{" "}
                            It add new emp
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
    
          <button type="button" onClick={()=>formik.validateField('comments')}>Validate Comment</button>
          <button type="button" onClick={()=>formik.validateForm()}>Validate All</button>
          <button type="button" onClick={()=>formik.setFieldTouched('comments')}>Visit Comments</button>
          <button type="button" onClick={()=>formik.setTouched({
            name:true,
            email:true,
            channel:true,
            comments:true
          })}>Visit Fields</button>

              <button type="submit">Submit</button>
            </Form>
            )
          }
        }
       
      </Formik>
    </>
  );
};

export default YoutubeForm;
