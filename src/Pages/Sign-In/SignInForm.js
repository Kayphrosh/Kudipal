import React from 'react';
import { Link } from 'react-router-dom';
const SignInForm = () => {
  return (
    <main className="sign-up-form-container">
      <header>
        <h2>Welcome Back!</h2>
        <p>Let’s get you started. Create an account to begin</p>
      </header>

      <form action="">
        <span>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="Enter your email address" />
        </span>

        <span>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </span>

        <p className="forgot-password">Forgot Password?</p>
      </form>

      <div className="form-cta sign-in-form-cta">
        <button>Login</button>

        <p>Don't have an account?</p>
      </div>
    </main>
  );
};

export default SignInForm;
