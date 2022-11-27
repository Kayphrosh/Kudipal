import React from 'react';
import './sign-in.css';

import SignInSide from './SignInSide';
import SignInForm from './SignInForm';

const SignInContainer = () => {
  return (
    <section className="sign-up-page">
      <SignInSide />
      <SignInForm />
    </section>
  );
};

export default SignInContainer;
