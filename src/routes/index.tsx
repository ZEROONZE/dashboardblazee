
import React from "react";
import AuthRoutes from "./aouth.routes";
import AppRoutes from "./app.routes";


import { useAuth } from "../components/hooks/auth";
import App from "./app.routes";
import { Routes } from "react-router-dom";


const RoutesPages: React.FC = () => {
const {logged}= useAuth();
    
    return(
    <>
   {logged ? <App/> : <AuthRoutes />}
   </>
    );
}

export default RoutesPages;
