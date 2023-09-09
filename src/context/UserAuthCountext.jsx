import { createContext, useContext, useEffect,useState } from "react";
import{
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged
      
      } from "firebase/auth";
import { auth } from "../Firebase";


const UserAuthContext = createContext()

 export const  UserAuthContextProvider =({children})=>{

   const [user,setuser] =  useState();
   const [IsOpen,setIsOpen] =useState(false);


 
    function signup(email,password ) {
    return  createUserWithEmailAndPassword(auth,email,password)  
     
       
  }
 
    function login(email,password ) {
        
      return  signInWithEmailAndPassword (auth,email,password)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
         
         setuser(currentUser)
        })

        return ()=>{
            unsubscribe();
        }
    })

     
    
    
    return(
        <UserAuthContext.Provider value={{signup,user,login,IsOpen,setIsOpen}}>
        {children}
        </UserAuthContext.Provider>
    )

}
  

export function useUserAuth() {
    return(
        useContext(UserAuthContext)
    )
}

