import React, { useState } from "react";
import supabase from "../../Config/Config";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate()
  //   const [formData, setFromData] = useState({
  //       fullName: '',
  //       email: '',
  //       passwords: ''
  //   })

  //   const handleChange = (e)=>{
  //       // e.preventDefault();
  //       setFromData(prev=>{
  //           return{...prev, [e.target.name]:e.target.value}
  //       })
  //   }

  //   console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.urname.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: name,
        },
      },
    });
    // Tanvir@123 Tanvir@123$
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      navigate('/login')
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen border ">
      <h2 className="text-center text-2xl font-bold">Sign Up</h2>
      <form className=" w-1/2  py-10" onSubmit={handleSubmit}>
        <div className="">
          <label className="text-lg font-medium" htmlFor="">
            Name:
          </label>
          <input
            // onChange={handleChange}
            placeholder="Enter the name"
            className="w-full border-2 focus:outline-none focus:border-[#07B5D5] py-1"
            type="text"
            name="urname"
          />
        </div>

        <div className="py-4">
          <label className="text-lg font-medium" htmlFor="">
            Email:
          </label>
          <input
            // onChange={handleChange}
            placeholder="Enter the email"
            className="w-full border-2 focus:outline-none focus:border-[#07B5D5] py-1"
            type="email"
            name="email"
          />
        </div>

        <div className="">
          <label className="text-lg font-medium" htmlFor="">
            Password:
          </label>
          <input
            // onChange={handleChange}
            placeholder="Enter the password"
            className="w-full border-2 focus:outline-none focus:border-[#07B5D5] py-1"
            type="password"
            name="password"
          />
        </div>

        <div className="flex justify-center py-4 text-white">
          <button className="px-4 py-2 bg-[#07B5D5] rounded">Signup</button>
        </div>
      </form>

      <p>Already signup? 
      <Link to={"/login"}>
        <span>Login</span>
        
      </Link>
        </p>
    </div>
  );
};

export default Signup;
