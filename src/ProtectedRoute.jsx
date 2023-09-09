import React from 'react'
import { Navigate} from 'react-router-dom';
import { useUserAuth } from './context/UserAuthCountext';
const ProtectedRoute = ({children}) => {
           const {user}= useUserAuth()
       if (user==null) {
       return <Navigate to={"/login"} replace={true}></Navigate>
       }
     return (  children  )
  
}

export default ProtectedRoute