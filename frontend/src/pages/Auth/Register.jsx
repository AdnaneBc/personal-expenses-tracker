import { Link } from "react-router-dom";
import img1 from "../../assets/img1.webp";
import Input from "../../components/Input";
import ProfilePhotoSelector from "../../components/ProfilePhotoSelector";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";

const Register = () => {
  const [profilePic, setProfilePic] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    let profileImageUrl = "";
    if (!fullName) {
      setError("Please enter your full name");
      return;
    }
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setError("");
    //Signup API call
  };
  return (
    <>
      <div className="flex h-screen w-full justify-center items-center">
        <div className="w-full p-10">
          <h1 className="fixed top-10 text-xl font-semibold">
            Expense Tracker
          </h1>
          <h2 className="font-semibold text-2xl">Create an Account</h2>
          <p className="text-sm text-gray-800">
            Join us today by entering your details below
          </p>
          <form
            className="flex flex-col w-full py-8 gap-2"
            onSubmit={handleSignup}
          >
            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
            <div className="flex gap-4">
              <Input
                type="text"
                label="Full Name"
                placeHolder="John"
                id="fullname"
              />
              <Input
                type="email"
                label="Email Address"
                placeHolder="john@example.com"
                id="email"
              />
            </div>
            <div className="">
              <Input
                type="password"
                label="Password"
                placeHolder="Min 8 characters"
                id="password"
              />
            </div>
            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
            <button
              type="submit"
              className="bg-purple-700 text-white p-2 rounded text-sm  mb-5"
            >
              SIGNUP
            </button>
            <span className="text-sm">
              Already have an account ?{" "}
              <Link to="/login" className="underline text-blue-700">
                Login
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

export default Register;
