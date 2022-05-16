import api from "./api";

export async function login(usuario, senha) {
    try {
        const response = await api.get("login", {
            auth: {
                username: usuario,
                password: senha
            }
        })

        localStorage.setItem("nome", response.nome);
        return true;
    } catch(error) {
        console.log(error);
    }
}

export async function checkAuth() {
    try {
        await api.get("checkAuth");
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarProduto(dados) {
    try {
        await api.post("cadastrarProduto", dados)
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarServico(dados) {
    try {
        await api.post("cadastrarServico", dados)
        return true;
    } catch(error) {
        return false;
    }
}