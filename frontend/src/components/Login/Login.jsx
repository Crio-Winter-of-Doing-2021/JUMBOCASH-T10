import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as axios from "axios";
import { login } from "../../actions/index";
import "./Login.css";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    // console.log(result);
    // google success result

    try {
      const user = await axios.post("http://localhost:8000/auth/login", {
        email: result.email,
        username: result.name,
        imageUrl: result.imageUrl,
      });

      console.log(user.data.token);
      localStorage.setItem("token", user.data.token);
      console.log(user.data.id);
      localStorage.setItem("logged_in_id", user.data.id);
      dispatch(login(user.data.id));
      alert("Login successful");
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {
    alert("Google Sign In was unsuccessful. Try again later");
  };

  const responseFacebook = async (res) => {
    // console.log(res);

    // const token = res?.accessToken;

    // console.log(token);
    // console.log(res?.picture.data.url);

    try {
      const user = await axios.post("http://localhost:8000/auth/login", {
        email: res.email,
        username: res.name,
        imageUrl: res?.picture.data.url,
      });

      console.log(user.data.token);
      localStorage.setItem("token", user.data.token);
      console.log(user.data.id);
      localStorage.setItem("logged_in_id", user.data.id);
      dispatch(login(user.data.id));
      alert("Login successful");
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-template">
        <h3>Sign in To go to Dashboard</h3>

        <GoogleLogin
          clientId="795096196898-6dvubjtf1ankpbgullclnmhv695ibnnv.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="btn btn-danger button-items"
              onClick={renderProps.onClick}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </span>
              <span>Sign In with Google</span>
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy="single_host_origin"
        />

        <FacebookLogin
          appId="192298908937797"
          autoLoad={false}
          callback={responseFacebook}
          fields="name,email,picture"
          render={(renderProps) => (
            <button
              className="btn btn-primary button-items"
              onClick={renderProps.onClick}
            >
              <span>
                <FacebookIcon />
              </span>
              <span>Sign In with Facebook</span>
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default Form;
