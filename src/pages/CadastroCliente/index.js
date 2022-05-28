/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bounce } from "react-activity";
import { Form, Button } from "react-bootstrap";
import {NotificationContainer, NotificationManager} from "react-notifications";
import styles from "./styles";
import { cadastrarCliente } from "../../services/request";

export default () => {
    const [loading, setLoading] = React.useState(false);

    const [inputInfo, setInputInfo] = React.useState({
        nome: "",
        cpfcnpj: "",
        email: "",
        cidade: "",
        bairro: "",
        logradouro: "",
        cep: ""
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
            <div style={styles.container}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome do Cliente:</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("nome", a.target.value)} type="text" placeholder="Ex: José Ribeiro da Silva Costa" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CPF/CNPJ:</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("cpfcnpj", a.target.value)} type="text" placeholder="Insira o CPF/CNPJ do cliente" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("email", a.target.value)} type="text" placeholder="Insira o email do cliente" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cidade:</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("cidade", a.target.value)} type="text" placeholder="Insira a cidade do cliente"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("bairro", a.target.value)} type="text" placeholder="Insira o Bairro do cliente" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Logradouro:</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("logradouro", a.target.value)} type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CEP:</Form.Label>
                        <Form.Control onChange={a => updateInputInfo("cep", a.target.value)} type="text" placeholder="Insira o CEP do cliente" />
                    </Form.Group>

                    <Button variant="dark" onClick={sendInputInfo}>
                        Cadastrar
                    </Button>
                    {loading && <Bounce style={{marginLeft: 10}} />}
                </Form>
            </div>
            <NotificationContainer/>
        </>
    );
}