import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Layout from "./layout";

import "./login.css";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();

  /**
   *
   * @param {Object} data
   */
  const onSubmit = (data) => {
    const { email, password, password_confirmation, fullname } = data;
    console.log(email, password, password_confirmation, fullname);
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
              Create an account to access Rebuilding Algeria Platform
            </p>

            <div className="form_group">
              <label className="form_label" htmlFor="username">
                Fullname
              </label>
              <input
                className={
                  errors.fullname ? "form_input has-error" : "form_input"
                }
                type="fullname"
                name="fullname"
                ref={register({ required: true, maxlength: 20 })}
                placeholder="Fullname"
                autoFocus
              />
            </div>

            <div className="form_group">
              <label className="form_label" htmlFor="username">
                Email Address
              </label>
              <input
                className={errors.email ? "form_input has-error" : "form_input"}
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

            <div className="form_group">
              <label className="form_label" htmlFor="password_confirmation">
                Password Confirmation
              </label>
              <input
                className={
                  errors.password_confirmation
                    ? "form_input has-error"
                    : "form_input"
                }
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                ref={register({ required: true, minlength: 6 })}
              />
            </div>

            <button className="form_submit" type="submit">
              Register
            </button>
          </form>
        </div>

        <Link className="switcher-text" to="login">
          Already have an account ? sign in
        </Link>
      </React.Fragment>
    </Layout>
  );
};

export default Register;
