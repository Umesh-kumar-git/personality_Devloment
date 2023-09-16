import { useEffect, useState } from "react";
import React from 'react';
import { useUserAuth } from "../context/UserAuthCountext";
import { useNavigate} from "react-router-dom";

 const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Error,setError] = useState("")
  const [localStore,setlocalStore]=useState('')
  const { login} = useUserAuth();
  
  const navigate =useNavigate()
 
  
  const userEmail = (e) => {
    setemail(e.target.value);
    
  };
  const userPassword = (e) => {
    setpassword(e.target.value);
  };
  
  async function submitBtn(e) {
     
    setError('')
    e.preventDefault()
  
    try {
      await login(email,password) 
     
      
    navigate('/')
  } 
  catch (err) {
    setError(err.message)
    console.log(err);
  }
  
  
}


  
  

  return (

    <>
      <div className="login-wapper">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12  lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login your Account
            </h2>
           { Error && <div className="err ml-[1px] text-center p-2 bg-red-500">{Error}</div>}
          
          </div>

          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm  p-5  border-2  border-grey-200 ">
            <form className="space-y-6" onSubmit={submitBtn}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={userEmail}
                    autoComplete="email"
                    required
                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={userPassword}
                    autoComplete="current-password"
                    required
                    className="block w-full px-4  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              
                <button
                  type="submit"
                  onClick={submitBtn}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  LogIn 
                </button>
            </form>
          </div>
        </div>
      </div>

    </>

  );
};

export default Login;