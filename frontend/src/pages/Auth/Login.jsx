import { Link } from "react-router-dom";
import img1 from "../../assets/img1.webp";

const Login = () => {
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
          <form className="flex flex-col w-3/4 py-8 gap-2">
            <label htmlFor="email" className="text-sm text-gray-700">
              Email Address
            </label>
            <input
              className="bg-gray-100 py-3 px-5 rounded mb-5 text-sm text-gray-700"
              type="email"
              placeholder="john@example.com "
              id="email"
            />
            <label htmlFor="password" className="text-sm text-gray-800">
              Password
            </label>
            <input
              className="bg-gray-100 py-3 px-5 rounded mb-5 text-sm text-gray-700"
              type="password"
              placeholder="Min 8 characters"
              id="password"
            />
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
