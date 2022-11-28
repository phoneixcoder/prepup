import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("*Kindly Fill all the fields");
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setSubmitButtonDisabled(false);
      });
  };

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errorMgs, setErrorMsg] = useState("");

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  return (
    <>
      <div className="min-h-screen py-40">
        <div className="container mx-auto">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg shadow-slate-200 overflow-hidden">
            <div
              className="w-1/2 flex flex-col pt-4 pl-4"
              style={{
                background: `url()`,
                backgroundPosition: "center",
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="text-3xl mb-3 font-semibold">Welcome Captain</h1>
            </div>
            <div className="w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 font-semibold">Login</h2>
              <p className="mb-4 font-medium">
                You can login you account hustlefree.
              </p>
              <form action="#">
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="Email"
                    className="w-full border border-gray-400 py-2 px-2"
                    required
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    placeholder="Password"
                    name="Password"
                    className="w-full border border-gray-400 py-2 px-2"
                    required
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        pass: event.target.value,
                      }))
                    }
                  />
                </div>
              </form>
              <p className="mt-4 text-red-600 text-lg tracking-wider font-semibold text-center">
                {errorMgs}
              </p>
              <div className="mt-4 flex flex-col items-center">
                <button
                  className="w-full py-3 mb-3 text-center genbutton rounded-lg"
                  style={{ color: "#F2D059" }}
                  onClick={login}
                  disabled={submitButtonDisabled}
                >
                  Login
                </button>
                <span className="text-base font-semibold">
                  Don't have an account? Don't worry!
                </span>
                <a href="/signup" className="w-full">
                  {" "}
                  <button
                    className="w-full py-3 mt-3 text-center genbutton rounded-lg"
                    style={{ color: "#F2D059" }}
                    disabled={submitButtonDisabled}
                  >
                    Register Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
