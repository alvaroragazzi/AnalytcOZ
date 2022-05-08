import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./styles.js";

export default () => {
    return (
        <div style={styles.container} className="Form">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome do Serviço</Form.Label>
                    <Form.Control type="text" placeholder="Ex: captação de voz, mixagem e etc." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="double" placeholder="Insira o valor do produto" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tempo de duração do serviço</Form.Label>
                    <Form.Control type="text" placeholder="Ex: 1 hora por captação, ou tempo gasto de mixagem em média" />
                </Form.Group>
            
                <Button variant="dark" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}