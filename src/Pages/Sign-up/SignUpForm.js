import React from 'react';
import { Link } from 'react-router-dom';
const SignUpForm = () => {
  return (
    <main className="sign-up-form-container">
      <header>
        <h2>Sign Up</h2>
        <p>Let’s get you started. Create an account to begin</p>
      </header>

      <form action="">
        <div className="form-full-name">
          <span>
            <label htmlFor="">FirstName</label>
            <input type="text" name="" placeholder="Enter Your first name" />
          </span>
          <span>
            <label htmlFor="">Last Name</label>
            <input type="text" name="" placeholder="Enter Your last name" />
          </span>
        </div>

        <span>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="Enter your email address" />
        </span>

        <span>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </span>
      </form>

      <div className="form-cta">
        <button>Sign Up</button>

        <p>Already have an account?

          <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpForm;
