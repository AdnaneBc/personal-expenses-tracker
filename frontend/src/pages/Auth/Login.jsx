import { Link } from "react-router-dom";
import img1 from "../../assets/img1.webp";
import { useState } from "react";
import Input from "../../components/Input";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setError("");
    //Login API call
  };
  return (
    <>
      <div className="flex h-screen w-full justify-center items-center">
        <div className="w-full p-10">
          <h1 className="fixed top-10 text-xl font-semibold">
            Expense Tracker
          </h1>
          <h2 className="font-semibold text-2xl">Welcome Back</h2>
          <p className="text-sm text-gray-800">
            Please enter your details to log in
          </p>
          <form
            className="flex flex-col w-3/4 py-8 gap-2"
            onSubmit={handleLogin}
          >
            <Input
              type="email"
              placeHolder="john@example.com"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeHolder="Password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
            <button
              type="submit"
              className="bg-purple-700 text-white p-2 rounded text-sm  mb-5"
            >
              LOGIN
            </button>

            <span className="text-sm">
              Don't have an account ?{" "}
              <Link to="/register" className="underline text-blue-700">
                SignUp
              </Link>
            </span>
          </form>
        </div>
        <div className="w-full bg-amber-300 h-full">
          <img src={img1} alt="login img" />
        </div>
      </div>
    </>
  );
};

export default Login;
