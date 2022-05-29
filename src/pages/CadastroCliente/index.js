/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { Bounce } from "react-activity";

import {NotificationContainer, NotificationManager} from "react-notifications";
import styles from "./styles";
import { cadastrarCliente } from "../../services/request";

import { IoMdPersonAdd } from "react-icons/io";
import { TextField, Button, Paper, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import FormTheme from "../../components/FormTheme";

export default () => {
    const [loading, setLoading] = React.useState(false);

    const [inputInfo, setInputInfo] = React.useState({
        nome: undefined,
        cpfcnpj: undefined,
        email: undefined,
        cidade: undefined,
        bairro: undefined,
        logradouro: undefined,
        cep: undefined
    });

    const updateInputInfo = (key, value) => {
        setInputInfo(inputInfo => ({...inputInfo, [key]: encodeURI(value)}))
    }

    const sendInputInfo = async() => {
        if (!loading)
            setLoading(true);
            const response = await cadastrarCliente(inputInfo);
            setLoading(false);
            if (response) {
                NotificationManager.success("Cliente cadastrado com sucesso", "Aviso");
            } else {
                NotificationManager.error("Falha ao cadastrar o cliente", "Aviso");
            }
    }

    return (
        <>
            <form>
                <Paper sx={{ padding: 4, flexDirection: "row", flex:1, display:"flex", flexGrow:1, justifyContent: "center", alignItems: "center"}}>
                    <IoMdPersonAdd style={{width: 26, height: 26, marginRight: 5}}/>
                    <h4>Cadastro de cliente</h4>
                </Paper>

                <div style={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                    <Paper sx={{ padding: 4, margin: 2, width: 700}}>
                        <Stack spacing={2}>
                            <ThemeProvider theme={FormTheme}>
                                <TextField onChange={a => updateInputInfo("nome", a.target.value)} required label="Nome do cliente" />
                                <TextField onChange={a => updateInputInfo("cpfcnpj", a.target.value)} required label="CPF/CNPJ" />
                                <TextField onChange={a => updateInputInfo("email", a.target.value)} required label="E-mail" />
                                <TextField onChange={a => updateInputInfo("cidade", a.target.value)} required label="Cidade" />
                                <TextField onChange={a => updateInputInfo("bairro", a.target.value)} required label="Bairro" />
                                <TextField onChange={a => updateInputInfo("logradouro", a.target.value)} required label="Logradouro" />
                                <TextField onChange={a => updateInputInfo("cep", a.target.value)} required label="CEP" />
                                <Button sx={{width: 200}} onClick={sendInputInfo} variant="contained">Cadastrar</Button>
                            </ThemeProvider>
                            {loading && <Bounce style={{marginLeft: 10}} />}
                        </Stack>
                    </Paper>
                </div>
            </form>
            <NotificationContainer/>
        </>
    );
}