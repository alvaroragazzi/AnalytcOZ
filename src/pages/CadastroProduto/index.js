/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Bounce } from "react-activity";
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";
import styles from "./styles.js";
import { cadastrarProduto } from "../../services/request";

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
            <div style={styles.container}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome do Produto</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("nome", a.target.value)} type="text" placeholder="Ex: Artes(de album) beats produzidos e etc." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("valor", a.target.value)} type="double" placeholder="Insira o valor do produto" />
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