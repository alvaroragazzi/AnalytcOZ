import api from "./api";

export async function login(usuario, senha) {
    let dados = [];

    await api.get("login", {
        auth: {
            username: usuario,
            password: senha
        }
    }).then(function(response) {
        dados = response.data;
    }).catch(function(error) {
        dados = error.response.data;
    })

    return dados;
}