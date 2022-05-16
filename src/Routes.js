/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import CadastroServico from "./pages/CadastroServico";
import CadastroProduto from "./pages/CadastroProduto";
import Login from "./pages/Login";
import CadastroCliente from "./pages/CadastroCliente";
import RegistroVenda from "./pages/RegistroVenda";
import Inicio from "./pages/Inicio";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

export default () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/inicio" replace />} />
                <Route exact path="/login" element={ <Login/>  }/>
                <Route element={(<> <PrivateRoute/> <Navbar/> <Outlet/> </>)}>
                    <Route exact path="/inicio" element={ <Inicio/> }/>            
                    <Route exact path="/cadastroServico" element={ <CadastroServico/> }/>
                    <Route exact path="/cadastroProduto" element={ <CadastroProduto/> }/>
                    <Route exact path="/cadastroCliente" element={ <CadastroCliente/> }/>
                    <Route exact path="/registroVenda" element={ <RegistroVenda/> }/>
                </Route>
        </Routes>
    );
}