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
        await api.post("produto", dados);
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarCliente(dados) {
    try {
        await api.post("cliente", dados);
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarCusto(dados) {
    try {
        await api.post("custo", dados);
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarServico(dados) {
    try {
        await api.post("servico", dados);
        return true;
    } catch(error) {
        return false;
    }
}

export async function cadastrarVenda(dados) {
    try {
        await api.post("venda", dados);
        return true;
    } catch(error) {
        return false;
    }
}

export async function getListaClientes() {
    try {
        const result = await api.get("cliente");
        return result.data;
    } catch(error) {
        return false;
    }
}

export async function getListaProdutos() {
    try {
        const result = await api.get("produto");
        return result.data;
    } catch(error) {
        return false;
    }
}

export async function getListaServicos() {
    try {
        const result = await api.get("servico");
        return result.data;
    } catch(error) {
        return false;
    }
}