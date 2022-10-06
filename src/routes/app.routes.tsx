import React from "react";
import { Routes, Route,  } from 'react-router-dom'
import Layout from "../components/Layout";
import Pagamentos from "../components/Pagamentos";
import Dashboard from "../components/pages/Dashboard";
import App from "../components/pages/Dashboard/Home";
import Mobile from "../components/pages/Dashboard/mobileAPI/mobile";
import Teste from "../components/Teste";






import Teste4 from "../components/Teste/teste3";
import Double from "../components/Grupos/Double";
import Estrategias from "../components/Estrategias";
import TelegranCrash from "../components/Grupos/Crash";
const AppRoutes: React.FC = () => {
 




  return (
    <Layout>
      <Routes>
       
        <Route path="/" element={<Dashboard />} />
        <Route path="/list/:type" element={<Teste match={{
          params: {
            type: ""
          }
        }} />} />
        <Route path="/list/relatorios" element={<App />} />
        <Route path="/list/relatorios2" element={<Mobile />} />
        <Route path="/Pagamentos" element={<Pagamentos />} />
       
        <Route path="/Crash" element={<TelegranCrash />} />
    <Route path="/Teste4" element={<Teste4 />} />
    <Route path="/Double" element={<Double />} />
    <Route path="/Estrategias" element={<Estrategias />} />
      </Routes>
    </Layout>
  );

}
export default AppRoutes;