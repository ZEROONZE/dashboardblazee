import React from "react";
import {Routes, Route, } from 'react-router-dom'

import Dashboard from "../components/pages/Dashboard";
import SignIn from "../components/pages/Signin";


const AuthRoutes: React.FC = () => { 
    return ( 
<Routes>
<Route path="/" element={<SignIn />}/>
</Routes>
    )

    }

export default AuthRoutes;
