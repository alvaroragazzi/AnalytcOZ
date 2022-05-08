/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./styles.js";
import Navbar from "../../components/Navbar";

export default () => {
    React.useEffect(() => {
        document.title = "AnalytcOZ";
    }, []);

    return (
        <div>
            <Navbar/>
            <div style={styles.container}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome do Produto</Form.Label>
                        <Form.Control type="text" placeholder="Ex: Artes(de album) beats produzidos e etc." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="double" placeholder="Insira o valor do produto" />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </div>
        </div>
    );
}