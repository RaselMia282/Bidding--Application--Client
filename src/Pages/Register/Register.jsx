import React from "react";
import { Link } from "react-router";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    console.log("Form Submitted");
  };

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-md bg-base-100 p-8 shadow-lg border-b-4 border-purple-500 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-2">Register Now!</h1>
        <p className="text-center mb-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 hover:underline font-semibold"
          >
            Login Now
          </Link>
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <input
              className="input input-bordered w-full focus:border-purple-500"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-control">
            <input
              className="input input-bordered w-full focus:border-purple-500"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-control">
            <input
              className="input input-bordered w-full focus:border-purple-500"
              type="password"
              name="password"
              placeholder="Your Password"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-purple-600 hover:bg-purple-700 text-white w-full border-none"
            >
              Register
            </button>
          </div>
          <h2 className="text-center">OR</h2>
          {/* Google */}
          <button className="btn bg-white text-black w-full border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
