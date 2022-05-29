/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Bounce } from "react-activity";
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { IoIosPaper } from "react-icons/io";

import { TextField, Button, Paper, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import styles from "./styles.js";
import { cadastrarServico } from "../../services/request";
import FormTheme from "../../components/FormTheme";

export default () => {
    const [loading, setLoading] = React.useState(false);

    const [inputInfo, setInputInfo] = React.useState({
        descricao: "",
        valor: "",
        tempo_gasto: ""
    });

    const updateInputInfo = (key, value) => {
        setInputInfo(inputInfo => ({...inputInfo, [key]: encodeURI(value)}))
    }

    const sendInputInfo = async() => {
        if (!loading)
            setLoading(true);
            const response = await cadastrarServico(inputInfo);
            setLoading(false);
            if (response) {
                NotificationManager.success("Serviço cadastrado com sucesso", "Aviso");
            } else {
                NotificationManager.error("Falha ao cadastrar o serviço", "Aviso");
            }
    }

    return (
        <>
            <form>
                <Paper sx={{ padding: 4, flexDirection: "row", flex:1, display:"flex", flexGrow:1, justifyContent: "center", alignItems: "center"}}>
                    <IoIosPaper style={{width: 26, height: 26, marginRight: 5}}/>
                    <h4>Cadastro de serviço</h4>
                </Paper>

                <div style={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                    <Paper sx={{ padding: 4, margin: 2, width: 700}}>
                        <Stack spacing={2}>
                            <ThemeProvider theme={FormTheme}>
                                <TextField onChange={a => updateInputInfo("nome", a.target.value)} label="Nome do serviço" />
                                <TextField onChange={a => updateInputInfo("valor", a.target.value)} label="Valor do serviço" />
                                <TextField onChange={a => updateInputInfo("tempo_gasto", a.target.value)} label="Tempo médio(em horas) que leva para executar o serviço" />
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