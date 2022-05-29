/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Bounce } from "react-activity";
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";

import styles from "./styles.js";
import { cadastrarCusto } from "../../services/request";

import { TextField, Button, Paper, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import FormTheme from "../../components/FormTheme";
import { MdSell } from "react-icons/md";

export default () => {
    const [loading, setLoading] = React.useState(false);

    const [inputInfo, setInputInfo] = React.useState({
        data_lancamento: undefined,
        descricao: undefined,
        valor: undefined,
        fornecedor: undefined
    });

    const updateInputInfo = (key, value) => {
        setInputInfo(inputInfo => ({...inputInfo, [key]: encodeURI(value)}))
    }

    const sendInputInfo = async() => {
        if (!loading)
            setLoading(true);
            const response = await cadastrarCusto(inputInfo);
            setLoading(false);
            if (response) 
                NotificationManager.success("Custo cadastrado com sucesso", "Aviso");
            else 
                NotificationManager.error("Falha ao cadastrar o custo", "Aviso");
    }

    return (
        <>
            <form>
                <Paper sx={{ padding: 4, flexDirection: "row", flex:1, display:"flex", flexGrow:1, justifyContent: "center", alignItems: "center"}}>
                    <MdSell style={{width: 26, height: 26, marginRight: 5}}/>
                    <h4>Lançamento de custo</h4>
                </Paper>

                <div style={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                    <Paper sx={{ padding: 4, margin: 2, width: 700}}>
                        <Stack spacing={2}>
                            <ThemeProvider theme={FormTheme}>
                                <TextField onChange={a => updateInputInfo("data_lancamento", a.target.value)} label="Data de lançamento" />
                                <TextField onChange={a => updateInputInfo("descricao", a.target.value)} label="Descrição" />
                                <TextField onChange={a => updateInputInfo("valor", a.target.value)} label="Valor" />
                                <TextField onChange={a => updateInputInfo("fornecedor", a.target.value)} label="Fornecedor" />
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