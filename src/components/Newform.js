import React from 'react';
import {Formik,Form} from'formik';
import TextField from './TextField';
import * as Yup from 'yup';

import "./Newform.css"

function Newform() {
    const validate=Yup.object({
        firstName:Yup.string()
        .max(15,'Must be 15 characters or less')
        .required('Required'),
        lastName:Yup.string()
        .max(20,'Must be 20 characters or less')
        .required('Required'),
        email:Yup.string()
        .email('Email is invalid')
        .required('Email is Required'),
        password:Yup.string()
        .min(6,'Password must be at least 6 characters')
        .required('Password is required'),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password'),null],'Password must match')
        .required('Confirm password is required'),
        Profession:Yup.string()
        .max(15,'Must be 15 characters or less')
        .required('Required'),
    })
  return (
    <>
 <Formik

 initialValues={{
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    Profession:''
 }}
 

 validationSchema={validate}

 onSubmit={values=>{
    console.log("nsnsnsn",values)
 }}
 
 >
{formik=>(
    <div>
        <h1 className='my-4 font-weight-bold .display-4'>Sign</h1>
        <Form>
            <TextField label="First Name" name="firstName" type="text"></TextField>
            <TextField label="last Name" name="lastName" type="text"></TextField>
            <TextField label="Email" name="email" type="email"></TextField>
            <TextField label="password" name="password" type="password"></TextField>
            <TextField label="Confirm password" name="confirmPassword" type="password"></TextField>
            <TextField label="Profession" name="Profession" type="text"></TextField>

            <button className='btn btn-dark mt-3' type="submit">Register</button>
            <button className='btn btn-danger mt-3 ml-3'>Clear</button>
           
        </Form>
    </div>
)}


 </Formik>
 </>
  )
}

export default Newform