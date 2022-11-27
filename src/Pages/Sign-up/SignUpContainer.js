import React from 'react';
import './sign-up.css';
import SignUpSide from './SignUpSide';
import SignUpForm from './SignUpForm';
const SignUpContainer = () => {
  return (
    <section className="sign-up-page">
      <SignUpSide />

      <SignUpForm />
    </section>
  );
};

export default SignUpContainer;
