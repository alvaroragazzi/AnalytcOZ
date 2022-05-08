/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CadastroServico from "./pages/CadastroServico";
import CadastroProduto from "./pages/CadastroProduto";
import Login from "./pages/Login";
import CadastroCliente from "./pages/CadastroCliente";
import Inicio from "./pages/Inicio";

export default () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/login" replace />} />
                <Route exact path="/inicio" element={<Inicio/>}/>            
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/cadastroServico" element={<CadastroServico/>}/>
                <Route exact path="/cadastroProduto" element={<CadastroProduto/>}/>
                <Route exact path="/cadastroCliente" element={<CadastroCliente/>}/>
        </Routes>
    );
}