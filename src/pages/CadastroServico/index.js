/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bounce } from "react-activity";
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Form, Button } from "react-bootstrap";
import styles from "./styles.js";
import { cadastrarServico } from "../../services/request";

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
            <div style={styles.container} className="Form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome do Serviço</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("descricao", a.target.value)} type="text" placeholder="Insira aqui a descricao do serviço." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("valor", a.target.value)} type="double" placeholder="Insira o valor do produto" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tempo de duração do serviço(Horas)</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("tempo_gasto", a.target.value)} type="text" placeholder="Insira o tempo médio(em horas) que leva para executar o serviço" />
                    </Form.Group>
                
                    <Button onClick={sendInputInfo} variant="dark">
                        Cadastrar
                    </Button>
                    {loading && <Bounce style={{marginLeft: 10}} />}
                </Form>
            </div>
            <NotificationContainer/>
        </>
    );
}