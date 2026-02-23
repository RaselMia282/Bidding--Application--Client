import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { NavItem } from "../NavItem/NavItem";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user,logOut } = use(AuthContext);
  const navigate=useNavigate();
  const handleLogOut=()=>{
     logOut()
     .then(()=>{

      alert("logout success")
      navigate("/login")

     })
     .catch((err)=>{
      console.log(err.massage);
      
      alert("logout unsuccess")
     })
  }

  const links = (
    <>
      <li>
        <NavItem to="/">Home</NavItem>
      </li>
      <li>
        <NavItem to="/allProducts">All Products</NavItem>
      </li>
      {!user && (
        <>
          <li>
            <NavItem to="/register">Register</NavItem>
          </li>
          <li>
            <NavItem to="/login">Login</NavItem>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-purple-600">
          SmartDeals
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-4">
        <div className="flex items-center gap-3">
          {/* tooltip */}

          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName || "UserName"}
              >
                <div className="avatar cursor-pointer ">
                  <div className="w-12 rounded-full ring ring-purple-500  ring-offset-cyan-200">
                    <img src={user?.photoURL} alt="profile" />
                  </div>
                </div>
              </div>
              <button onClick={handleLogOut} className="px-4 py-2 bg-purple-700 text-white rounded-xl cursor-pointer hover:bg-red-600">
                SignOut
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="btn bg-purple-600 text-white border-none"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
