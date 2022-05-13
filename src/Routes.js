/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import CadastroServico from "./pages/CadastroServico";
import CadastroProduto from "./pages/CadastroProduto";
import Login from "./pages/Login";
import CadastroCliente from "./pages/CadastroCliente";
import Inicio from "./pages/Inicio";
import ProtectedRoute from "./components/ProtectedRoute";
import Authenticated from "./components/Authenticated";
import Navbar from "./components/Navbar";

export default () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route exact path="/login" element={ <Authenticated> <Login/> </Authenticated> }/>

            {/* todas as rotas que precisarem de login e NAVBAR, colocar aqui dentro */}
            <Route element={(<> <ProtectedRoute/> <Navbar/> <Outlet/> </>)}>
                <Route exact path="/inicio" element={ <Inicio/> }/>            
                <Route exact path="/cadastroServico" element={ <CadastroServico/> }/>
                <Route exact path="/cadastroProduto" element={ <CadastroProduto/> }/>
                <Route exact path="/cadastroCliente" element={ <CadastroCliente/> }/>
                <Route exact path="/registroVenda" element={ <RegistrarVenda/> }/>
            </Route>
        </Routes>
    );
}