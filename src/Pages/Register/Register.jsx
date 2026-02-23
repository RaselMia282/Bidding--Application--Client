import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const { createUser, userProfile, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    console.log(password, email, name, photo);

    // emailRegx
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegx.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }
    //  pswd Regx
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegx.test(password)) {
      alert(
        "Password must have at least one uppercase, one lowercase, and one number.",
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        // userProfile
        userProfile(name, photo)
          .then(() => {
            console.log("profile updating and navigate");
            e.target.reset();
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message);
          });
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // google login
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        alert("google login success! ");
        navigate("/");
      })
      .catch(() => {
        alert("google login unsuccessful");
      });
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
          {/* photo */}
          <div className="form-control">
            <input
              className="input input-bordered w-full focus:border-purple-500"
              type="text"
              name="photo"
              placeholder="Your Photo"
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
          <h2 className="text-center font-bold">OR</h2>
          {/* Google Button */}
          <button
            onClick={handleGoogle}
            type="button"
            className="btn bg-white text-black w-full border-[#e5e5e5] flex items-center justify-center gap-2"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg"
              alt="Google"
              className="w-5"
            />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
