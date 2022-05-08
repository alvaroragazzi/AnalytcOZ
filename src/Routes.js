/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CadastroServico from "./pages/CadastroServico";
import CadastroProduto from "./pages/CadastroProduto";
import Login from "./pages/Login";
import CadastroCliente from "./pages/CadastroCliente";
import Inicio from "./pages/Inicio";
import ProtectedRoute from "./components/ProtectedRoute";
import Authenticated from "./components/Authenticated";

export default () => {
    
    // todas as rotas que precisarem de login, colocar o elemento dentro do componente <ProtectedRoute>, exemplo: element={ <ProtectedRoute> <CadastroServico/> </ProtectedRoute> }

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/login" replace />} />
                <Route exact path="/login" element={ <Authenticated> <Login/> </Authenticated> }/>
                <Route exact path="/inicio" element={ <ProtectedRoute> <Inicio/> </ProtectedRoute> }/>            
                <Route exact path="/cadastroServico" element={ <ProtectedRoute> <CadastroServico/> </ProtectedRoute> }/>
                <Route exact path="/cadastroProduto" element={ <ProtectedRoute> <CadastroProduto/> </ProtectedRoute> }/>
                <Route exact path="/cadastroCliente" element={ <ProtectedRoute> <CadastroCliente/> </ProtectedRoute> }/>
        </Routes>
    );
}