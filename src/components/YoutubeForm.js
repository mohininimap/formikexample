import React from "react";
import { Formik,Form,Field,ErrorMessage,useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "Mohini",
  email: "",
  channel: "",
  commentst:"",
  address:''
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
});
const YoutubeForm = () => {
  return (
    <>
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
    <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <br />
          <br />
         <ErrorMessage name='name'/>

        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field
         
            type="email"
            id="email"
            name="email"
            placeholder="Name"
          />
          <br />
          <br />
          <ErrorMessage name='email'/>
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
          <ErrorMessage name='channel'/>
        </div>

        <div className="form-control">  
         <label htmlFor="">Comments</label>
         <Field as="textarea" id="comments" name="comments"></Field>
        </div>

<div className="form-control">
<label htmlFor="address">Address</label>
<Field  name="address">
  {
    ()=>{
      return <input type="address" />
    }
  }
</Field>
</div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
   
    </>
  );
};

export default YoutubeForm;
