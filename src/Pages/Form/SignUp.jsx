import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sign from "../../Resources/signip/signup.gif";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
const SignUp = () => {
  const navigate = useNavigate();
  const signup = () => {
    if (
      !values.firstn ||
      !values.email ||
      !values.lastn ||
      !values.pass ||
      !values.cpass
    ) {
      setErrorMsg("*Kindly Fill all the fields");
      return;
    }

    if (values.cpass != values.pass) {
      setErrorMsg("*Passwords do not match!");
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.firstn + " " +values.lastn
        })
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
    firstn: "",
    lastn: "",
    email: "",
    pass: "",
    cpass: "",
    check: "",
  });

  return (
    <>
      <div className="min-h-screen py-40">
        <div className="container mx-auto">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg shadow-slate-200 overflow-hidden">
            <div
              className="w-1/2 flex flex-col pt-4 pl-4"
              style={{
                background: `url(${sign})`,
                backgroundPosition: "center",
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="text-3xl mb-3 font-semibold">Welcome</h1>
            </div>
            <div className="w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 font-semibold">Register</h2>
              <p className="mb-4 font-medium">
                Create your account. It's free and only take a minute.
              </p>
              <form action="#">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Firstname"
                    name="Firstname"
                    className="border border-gray-400 py-2 px-2"
                    required
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        firstn: event.target.value,
                      }))
                    }
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    name="Surname"
                    className="border border-gray-400 py-1 px-2"
                    required
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        lastn: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    className="w-full border border-gray-400 py-2 px-2"
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
                <div className="mt-4">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="ConfirmPassword"
                    className="w-full border border-gray-400 py-2 px-2"
                    required
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        cpass: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mt-4 flex items-center">
                  <input
                    type="checkbox"
                    className="border border-gray-400"
                    required
                    name="checkbox"
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        check: event.target.value,
                      }))
                    }
                  />
                  <span className="ml-3">
                    I accept the{" "}
                    <a href="/" className="text-purple-500 font-semibold">
                      Terms of use
                    </a>{" "}
                    &{" "}
                    <a href="/" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>{" "}
                  </span>
                </div>
              </form>

              <p className="mt-4 text-red-600 text-lg tracking-wider font-semibold text-center">
                {errorMgs}
              </p>

              <div className="mt-4 flex flex-col items-center">
                <button
                  className={`w-full py-3 mb-3 text-center genbutton rounded-lg ${
                      !submitButtonDisabled ? "bg-[#000000]" : "bg-[#bbacaccc]"
                    }`}
                  style={{ color: "#F2D059" }}
                  onClick={signup}
                  disabled={submitButtonDisabled}
                >
                  Register Now
                </button>
                <span className="text-base font-semibold">
                  Already have an account?
                </span>
                <a href="/login" className="w-full">
                  {" "}
                  <button
                    className={`w-full py-3 mt-3 text-center genbutton rounded-lg ${
                      !submitButtonDisabled ? "bg-[#000000]" : "bg-[#bbacaccc]"
                    }`}
                    style={{ color: "#F2D059" }}
                    disabled = {submitButtonDisabled}
                  >
                    Login
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

export default SignUp;
