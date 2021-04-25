import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Layout from "./layout";

import "./login.css";

import SocialButtons from "./social-buttons";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  /**
   *
   * @param {Object} data
   */
  const onSubmit = (data) => {
    const { email, password, remember } = data;
    console.log(email, password, remember);
  };

  return (
    <Layout>
      <React.Fragment>
        <div className="container">
          <div className="form_image">
            <img src="/images/slides/login-slide-1.jpg" alt="Algeria algeria" />
          </div>
          <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form_title">Welcome,</h2>
            <p className="form_subtitle">
              Sign in to access to Rebuilding Algeria Dashboard
            </p>
            <div className="form_group">
              <label className="form_label" htmlFor="username">
                Email Address
              </label>
              <input
                className={
                  errors.password ? "form_input has-error" : "form_input"
                }
                type="email"
                name="email"
                ref={register({ required: true, maxlength: 20 })}
                placeholder="Email Address"
                autoFocus
              />
            </div>
            <div className="form_group">
              <label className="form_label" htmlFor="password">
                Password
              </label>
              <input
                className={
                  errors.password ? "form_input has-error" : "form_input"
                }
                type="password"
                name="password"
                placeholder="Password"
                ref={register({ required: true, minlength: 6 })}
              />
            </div>

            <button className="form_submit" type="submit">
              Sign in
            </button>

            <Link className="forget-password" to="forget-password">
              Forgot your Password?
            </Link>

            <div className="devider">
              <span>or</span>
            </div>

            <SocialButtons />
          </form>
        </div>

        <Link className="switcher-text" to="register">
          Register a new account
        </Link>
      </React.Fragment>
    </Layout>
  );
};

export default Login;
