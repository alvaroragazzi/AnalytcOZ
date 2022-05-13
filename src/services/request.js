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