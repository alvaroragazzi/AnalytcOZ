import api from "./api";

export async function login(usuario, senha) {
    try {
        const response = await api.get("usuario/login", {
            auth: {
                username: usuario,
                password: senha
            }
        })

        localStorage.setItem("nome", response.data.nome);
        return true;
    } catch(error) {
        console.log(error);
    }
}

export async function logout() {
    try {
        await api.get("usuario/logout")
        return true;
    } catch(error) {
        return false;
    }
}

export async function checkAuth() {
    try {
        await api.get("usuario/checkAuth");
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarProduto(dados) {
    try {
        await api.post("produto", dados)
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarCliente(dados) {
    try {
        await api.post("cliente", dados)
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarCusto(dados) {
    try {
        await api.post("custo", dados)
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarServico(dados) {
    try {
        await api.post("servico", dados)
        return true;
    } catch(error) {
        return false;
    }
}