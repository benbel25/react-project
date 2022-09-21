import { ToastContainer } from "react-toastify";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer.component";
import Navbar from "./components/navbar/navbar.component";
import AboutPage from "./pages/about/about.page";
import BusinessPage from "./pages/business/business.page";
import HomePage from "./pages/homepage/homepage";
import SigninPage from "./pages/signin/signin.page";
import SignupPage from "./pages/signup/signup.page";
import LogoutPage from "./pages/logout/logout.page";
import AuthGuardRoute from "./components/AuthGuardRoute";
import DisplayCards from "./pages/displayCards/displayCards.page";
import CreateBizCardPage from "./pages/createBizCard/createBizCard";

function App() {
  return (
    <Fragment>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/signin">
          <SigninPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/business">
          <BusinessPage />
        </Route>
        <Route path="/createbizcard">
          <CreateBizCardPage />
        </Route>
        <AuthGuardRoute
          path="/mycards"
          component={DisplayCards}
        ></AuthGuardRoute>
        <Route path="/logout">
          <LogoutPage />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
