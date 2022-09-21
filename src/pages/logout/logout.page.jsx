/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/auth";

const LogoutPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(authActions.logout()); 
    localStorage.clear(); 
    history.push("/");
  }, []);
  return <Fragment></Fragment>;
};

export default LogoutPage;
