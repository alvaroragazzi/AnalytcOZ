/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Spinner } from "react-activity";

import { DataGrid } from "@mui/x-data-grid";
import { Autocomplete, TextField, Button, Paper, Stack, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import {NotificationContainer, NotificationManager} from "react-notifications";

import { Bounce } from "react-activity";
import { ThemeProvider } from "@mui/material/styles";
import FormTheme from "../../components/FormTheme";
import { MdSell } from "react-icons/md";
import { getListaClientes, getListaProdutos, getListaServicos, cadastrarVenda } from "../../services/request";

import styles from "./styles";

export default () => {
    const [loadingData, setloadingData] = React.useState(true);

    const [clientList, setClientList] = React.useState([]);
    const [produtoList, setProdutoList] = React.useState([]);
    const [servicoList, setServicoList] = React.useState([]);
    const [dataGridRows, setdataGridRows] = React.useState([]);

    const [loading, setLoading] = React.useState(false);

    const [clienteSelecionado, setclienteSelecionado] = React.useState();

    function verifyErrors() {
        var pass = true;

        if (dataGridRows.length == 0) {
            NotificationManager.error("É necessário ter pelo menos 1 item para registrar uma venda", "Aviso");
            return false;
        }
        
        for (var i = 0; i < dataGridRows.length; i ++) {
            const item = dataGridRows[i];

            if (item.qtd <= 0) {
                NotificationManager.error(`A quantidade do item ${item.nome} precisa ser maior que 0`, "Aviso");
                pass = false;
                break;
            }
        }

        return pass;
    }

    async function sendRequest() {
        if (verifyErrors()) {
            if (!loading)
                setLoading(true);
                const response = await cadastrarVenda({
                    cliente_venda: clienteSelecionado,
                    itens: dataGridRows
                });

                setLoading(false);

                if (response) {
                    NotificationManager.success("Cliente cadastrado com sucesso", "Aviso");
                } else {
                    NotificationManager.error("Falha ao cadastrar o cliente", "Aviso");
                }
        }
    }

    function insertDataGridData(id, nome, categoria, qtd) {
        setdataGridRows([...dataGridRows, {id, nome, categoria, qtd}])
    }

    function removeDataGridData(item) {
        setdataGridRows(dataGridRows.filter((data) => data.id !== item.id));
    }

    function updateDataGridRow(id, newvalue) {
        const backupData = [...dataGridRows];

        for (var i = 0; i < backupData.length; i++) {
            const item = backupData[i];

            if (item.id == id) {
                backupData[i].qtd = newvalue;
                setdataGridRows(backupData);
                break;
            }
        }
    }

    React.useEffect(() => {
        async function request() {
            const clientes = await getListaClientes();
            const produtos = await getListaProdutos();
            const servicos = await getListaServicos();

            setClientList(clientes);
            setProdutoList(produtos);
            setServicoList(servicos);

            setloadingData(false);
        }

        request();
    }, [])

    const columns = [
        { field: "nome", headerName: "Nome", width: 200, editable: false },
        { field: "categoria", headerName: "Categoria", width: 80, editable: false },
        { field: "qtd", headerName: "Quantidade", width: 100, type: "number", editable: true },
        {
            field: "action",
            headerName: "",
            width: 50,
    
            renderCell: (item) => (
                <>
                    <IconButton onClick={() => {removeDataGridData(item)}}>
                        <DeleteOutlineIcon/>
                    </IconButton>
                </>
            )
        }
    ];

    return (
        <>
            <Paper sx={{ padding: 4, flexDirection: "row", flex:1, display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <MdSell style={{width: 26, height: 26, marginRight: 5}}/>
                    <h4>Registro de venda</h4>
            </Paper>
            
            {loadingData ? 
                <div style={{display: "flex",  justifyContent: "center", alignItems: "center", height: "20vh"}}>
                    <Spinner style={{width: 50, height: 50}}/> 
                </div> 
            :
                <form>
                    <div style={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                        <Paper sx={{ padding: 4, margin: 2, width: 700}}>
                            <Stack spacing={2}>
                                <ThemeProvider theme={FormTheme}>
                                    <Autocomplete
                                        options={clientList}
                                        onChange={(event, value) => setclienteSelecionado(value.id)}
                                        getOptionLabel={option => option.nome}
                                        renderInput={(params) => <TextField {...params} label="Cliente" />}
                                        renderOption={(props, option) => {
                                            return (
                                              <li {...props} key={option.id}>
                                                {option.nome}
                                              </li>
                                            );
                                        }}
                                    />

                                    <Autocomplete
                                        options={produtoList}
                                        getOptionLabel={option => option.nome}
                                        onChange={(event, value) => value && insertDataGridData(value.id, value.nome, "Produto", 0)}
                                        renderInput={(params) => <TextField {...params} label="Produto" />}
                                        renderOption={(props, option) => {
                                            return (
                                              <li {...props} key={option.id}>
                                                {option.nome}
                                              </li>
                                            );
                                        }}
                                    />

                                    <Autocomplete
                                        options={servicoList}
                                        getOptionLabel={option => option.descricao}
                                        onChange={(event, value) => value && insertDataGridData(value.id ,value.descricao, "Serviço", 0)}
                                        renderInput={(params) => <TextField {...params} label="Serviço" />}
                                        renderOption={(props, option) => {
                                            return (
                                              <li {...props} key={option.id}>
                                                {option.descricao}
                                              </li>
                                            );
                                        }}
                                    />
                                    <div style={{ height: 400, maxWidth: 450 }}>
                                        <DataGrid
                                            rows={dataGridRows}
                                            columns={columns}
                                            onCellEditCommit={(item) => updateDataGridRow(item.id, item.value)}
                                            rowsPerPageOptions={[]}
                                        />
                                    </div>
                                    <Button sx={{width: 200}} onClick={sendRequest} variant="contained">Cadastrar</Button>
                                </ThemeProvider>
                                {loading && <Bounce style={{marginLeft: 10}} />}
                            </Stack>
                        </Paper>
                    </div>
                </form>
            }
            <NotificationContainer/>
        </>
    );
}