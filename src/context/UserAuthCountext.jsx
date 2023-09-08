import { createContext, useContext, useEffect,useState } from "react";
import{
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged
      
      } from "firebase/auth";
import { auth } from "../Firebase";


const UserAuth = createContext(null)

 export const  UserAuthContextProvider =({children})=>{

   const [user,setuser] =  useState();

    function signup(email,password ) {
        
        createUserWithEmailAndPassword(auth,email,password)
    }

    function login(email,password ) {
        
        signInWithEmailAndPassword (auth,email,password)
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
        <UserAuth.Provider value={{signup,user}}>
        {children}
        </UserAuth.Provider>
    )

}
  

export function useUserAuth(params) {
    return(
        useContext(UserAuth)
    )
}

