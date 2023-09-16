import React,{useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthCountext";


const Navbar = () => {
   const {user,setIsOpen,IsOpen} = useUserAuth()
   const [scrolled, setScrolled] = useState(false);



 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    // const Toggleprofile =()=>{
    //   setToggle(!true)
    // }

  return (
    <>
    <div className= {`${
        scrolled ? 'bg-opacity-75 backdrop-blur-md bg-blue-100' : ''
      } py-4 header w-full  z-20  fixed top-0  border-b-[1px] border-grey-500`}>
      <div className=  "Navbar-section  w-full flex justify-evenly items-center font-sans   px-3 ">
        <div className="logo-section  ">
          <div className="logo  ">
            <a href="/brand-logo">
              <img className="w-10 h-10 rounded-full" src="/brand logo.jpg" alt="logo" />
            </a>
          </div>
        </div>
        <div className="Navbar p-1">
          <ul className="flex p-2 space-x-14 text-lg text-[#777474] tracking-wide  " >
            <li className=" hover:text-black ">
              <a href="/">Home</a>
            </li>
            <li className=" hover:text-black">
              <a href="/aboutus">About us</a>
            </li>
            <li className=" hover:text-black">
              <a href="/product">Product</a>
            </li>
            <li className=" hover:text-black">
              <a href="/dashbord">Dashbord</a>
            </li>
          </ul>
        </div>
        <div className="login-section">
          
          {user ? 
           <button onClick={()=>setIsOpen(!IsOpen)} className=" p-2 px-4 bg-blue-500 text-black rounded-sm text-center font-medium " >{user.email}</button>
          : <Link to="login">  
            <button className=" p-2 px-4 bg-blue-500 text-white rounded-sm text-center font-medium " >Login</button>
            </Link> }
           
            
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
