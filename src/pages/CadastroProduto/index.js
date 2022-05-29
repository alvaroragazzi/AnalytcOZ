/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { TextField, Button, Paper, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { MdSell } from "react-icons/md";

import { Bounce } from "react-activity";
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";
import styles from "./styles.js";
import { cadastrarProduto } from "../../services/request";
import FormTheme from "../../components/FormTheme";

export default () => {
    const [loading, setLoading] = React.useState(false);

    const [inputInfo, setInputInfo] = React.useState({
        nome: "",
        valor: ""
    });

    const updateInputInfo = (key, value) => {
        setInputInfo(inputInfo => ({...inputInfo, [key]: encodeURI(value)}))
    }

    const sendInputInfo = async() => {
        if (!loading)
            setLoading(true);
            const response = await cadastrarProduto(inputInfo);
            setLoading(false);
            if (response) {
                NotificationManager.success("Produto cadastrado com sucesso", "Aviso");
            } else {
                NotificationManager.error("Falha ao cadastrar o produto", "Aviso");
            }
    }

    return (
        <>
            <form>
                    <Paper sx={{ padding: 4, flexDirection: "row", flex:1, display:"flex", flexGrow:1, justifyContent: "center", alignItems: "center"}}>
                        <MdSell style={{width: 25, height: 25, marginRight: 5}}/>
                        <h4>Cadastro de produto</h4>
                    </Paper>

                    <div style={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                        <Paper sx={{ padding: 4, margin: 2, width: 700}}>
                            <Stack spacing={2}>
                                <ThemeProvider theme={FormTheme}>
                                    <TextField onChange={a => updateInputInfo("nome", a.target.value)} required label="Nome do produto" />
                                    <TextField onChange={a => updateInputInfo("valor", a.target.value)} required label="Valor" />
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