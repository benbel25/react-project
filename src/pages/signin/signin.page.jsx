import signInSchmea from "../../validation/signin";
import { useState, useEffect } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import useAfterLogin from "../../hooks/useAfterLogin";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const location = useLocation();

  const afterLogin = useAfterLogin();

  useEffect(() => {
    if (location.state && location.state.email && location.state.password) {
      setEmail(location.state.email);
      setPassword(location.state.password);
    }
  }, []);

  useEffect(() => {
    if (
      email != "" &&
      password != "" &&
      location.state &&
      location.state.email &&
      location.state.password
    ) {
      handleSubmit();
    }
  }, [email, password]);

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleSubmit = (ev) => {
    if (ev) ev.preventDefault();
    const validatedValue = Joi.validate({ email, password }, signInSchmea, {
      abortEarly: false,
    });
    const { error } = validatedValue;
    if (error) {
      toast.error("invalid email and/or password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      axios
        .post("/auth", {
          email,
          password,
        })
        .then(({ data }) => {
          console.log("data", data);
          afterLogin(data.token);
          history.push("/");
          toast("welcome!");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message === "invalid email or password") {
            toast.error("invalid email and/or password");
          }
        });
    }
  };
  return (
    <div className="container mt-3">
      <h1>Signin to my website!</h1>
      <p>you can sign in here with your account!</p>
      <form className="mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3 mt-5">
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
          {!email && (
            <div id="emailHelp" className="text-danger">
              Please provied your email
            </div>
          )}
        </div>
        <div className="mb-3 mt-5">
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
          {!password && (
            <div id="emailHelp" className="text-danger">
              Please provied your password
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Signin
        </button>
      </form>
    </div>
  );
};
export default SigninPage;
