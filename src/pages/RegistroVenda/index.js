/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./styles";

export default () => {
    return (
        <div style={styles.container}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teste:</Form.Label>
                    <Form.Control type="text" placeholder="Ex: José Ribeiro da Silva Costa" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teste:</Form.Label>
                    <Form.Control type="text" placeholder="Insira o CPF/CNPJ do cliente" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teste:</Form.Label>
                    <Form.Control type="text" placeholder="Insira o email do cliente" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teste:</Form.Label>
                    <Form.Control type="text" placeholder="Insira a cidade do cliente"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teste:</Form.Label>
                    <Form.Control type="text" placeholder="Insira o Bairro do cliente" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teste:</Form.Label>
                    <Form.Control type="text" placeholder="Insira o CEP do cliente" />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Registrar Venda
                </Button>
            </Form>
        </div>
    );
}