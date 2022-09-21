import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import "./singup.page.css";
import signUpSchema from "../../validation/signup";
import { useHistory } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const validatedValue = Joi.validate(
      { name, email, password },
      signUpSchema,
      {
        abortEarly: false,
      }
    );
    const { error } = validatedValue;

    if (error) {
      for (let item of error.details) {
        toast.error(item.message.replaceAll('"', ""));
      }
    } else {
      axios
        .post("/users", {
          name: name,
          email: email,
          password: password,
          biz: false,
        })
        .then((res) => {
          toast.success("You have successfully registered");
          console.log(res.data);
          history.push("/signin");
        })
        .catch((err) => {
          console.log("err from axios", err);
          if (err.response.data.message === `${email} already exists`) {
            toast.error("email already exist");
          }
        });
    }
  };
  return (
    <div className="container mt-3">
      <h1>Signup for my website!</h1>
      <p>you can open new account for free!</p>
      <form className="mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputName1" className="form-label">
            name:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            value={name}
            onChange={handleNameChange}
          />
          {name.length < 2 && (
            <div id="emailHelp" className="text-danger">
              "name" length must be at least 2 characters long
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            email:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmailChange}
          />
          {!email.match(regex) && (
            <div id="emailHelp" className="text-danger">
              "email" must be a valid email
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            password:
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePasswordChange}
          />
          {password.length < 8 && (
            <div id="emailHelp" className="text-danger">
              "password" length must be at least 8 characters long
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
};
export default SignupPage;
