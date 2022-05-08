/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Logo from "../../assets/logo.png";
import styles from "./styles.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#000000',
      darker: '#000000',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default () => {

    return ( 
        <div>
            <img style={styles.img} src={Logo}/>
            <div style={styles.container}>
                <Box
                    component="form"
                    sx={{"& > :not(style)": { minWidth: "33.5ch" },}}
                    noValidate
                    autoComplete="off"
                >
                <ThemeProvider theme={theme}>
                    <TextField color="primary" style={{marginBottom: 9}} id="outlined-basic" label="Usuário" variant="outlined" />
                    <TextField color="primary" style={{marginBottom: 11}} id="outlined-basic" label="Senha" variant="outlined" />  
                </ThemeProvider>
                </Box>
                <ThemeProvider theme={theme}>
                    <Button color="primary" variant="contained">Entrar</Button>
                </ThemeProvider>
            </div>
            <div style={{minHeight: 400, backgroundColor: "black"}}/>
        </div>
    );
}