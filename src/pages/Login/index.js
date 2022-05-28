/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Logo from "../../assets/logo.png";
import styles from "./styles.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from "../../services/request"; 
import { useNavigate } from "react-router-dom";

// efeito de carregamento
import { Bounce } from "react-activity";
import "react-activity/dist/library.css";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#15171c',
      darker: '#000000',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default () => {
    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [mensagem, setMensagem] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();

    async function loginRequest() {
      if (usuario.match(/^ *$/) !== null || senha.match(/^ *$/) !== null ){
          setMensagem("Usuário ou senha não definido(s)");
          return;
      }

      setMensagem(false);
      setLoading(true);
      const response = await login(usuario, senha);
      setLoading(false);

      if (!response) {
        setMensagem("Usuário ou senha incorreto(s)");
        return;
      }

      navigate("/inicio");
    }

    return ( 
        <div>
            <img style={styles.img} src={Logo}/>
            <div style={styles.container}>
                {loading && <Bounce style={{marginBottom: 5}}/>}
                {mensagem && <h1 style={{color: "red", fontSize: 15}} >{mensagem}</h1>}
                  <Box
                      component="form"
                      sx={{"& > :not(style)": { minWidth: "33.5ch" }}}
                      noValidate
                      autoComplete="off"
                  >
                  
                  <ThemeProvider theme={theme}>
                      <TextField onChange={a => setUsuario(a.target.value)} color="primary" style={{marginBottom: 9, marginTop: 25}} id="outlined-basic" label="Usuário" variant="outlined" />
                      <TextField type="password" onChange={a => setSenha(a.target.value)} color="primary" style={{marginBottom: 11}} id="outlined-basic" label="Senha" variant="outlined" />  
                  </ThemeProvider>
                  </Box>
                  <ThemeProvider theme={theme}>
                      <Button onClick={loginRequest} color="primary" variant="contained">Entrar</Button>
                  </ThemeProvider>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", backgroundColor: "#15171c"}}/>
        </div>
    );
}