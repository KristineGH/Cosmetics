import InvalidData from "./Invalid";
import "../../styles/LoginStyles.css";
import Main from "../section/Main";
import Nav from "./Nav";
import Footer from "../section/Footer";
import { Link } from "react-router-dom";


function Form(props) {
  const {
    email,
    signUpEmail,
    password,
    signUpPassword,
    status,
    handleEmail,
    handlePassword,
    handleLogin,
    onSignupBtnClick,
    handleSignUpEmail,
    handleSignUpPassword,
    openSignup,
    signUpForm,
    loggedInUser
  } = props;

  if (signUpForm) {
    return (
      <div className="input">
        <form onSubmit={onSignupBtnClick}>
          <h1 className="Lib">Sign up</h1>
          <input
            className="inputs"
            value={signUpEmail}
            onChange={handleSignUpEmail}
            placeholder="Enter email"
          />
          <input
            className="inputs"
            value={signUpPassword}
            onChange={handleSignUpPassword}
            placeholder="Enter Password"
            type="password"
          />
          <button id="btn">Sign up</button>
        </form>
      </div>
    );
  }
  return (
    <>
      {status === "succeeded" ? (
        <Link to="/" id="logo"></Link>
      ) : (
        <div className="input">
          <form onSubmit={handleLogin}>
            <h1 className="Lib">Log in</h1>
            <input
              className="inputs"
              value={email}
              onChange={handleEmail}
              placeholder="Enter email"
            />
            <input
              className="inputs"
              value={password}
              onChange={handlePassword}
              placeholder="Enter Password"
              type="password"
            />
            {status === "failed" ? <InvalidData /> : ""}

            <button id="btn">Log in</button>
            <button id="btn" onClick={openSignup}>
              Create Account
            </button>
          </form>
        </div>
      )}
    </>
  );
}


export default Form;