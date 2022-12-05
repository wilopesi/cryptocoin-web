import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDelete } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";

const urlBase = import.meta.env.VITE_API_URL_BASE;

const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

const PeopleCoin = () => {

    const [coinsCreated, setCoinsCreated] = useState([]);

    async function deleteCoin(parameter) {
        const urlDel = urlBase + `?id=${parameter}`;
        fetch(urlDel, {
            method: 'DELETE',
        })
            .then((data) => {
                console.log(data.status)
                if (data.status == 200) {
                    notifySuccess("Moeda excluida com sucesso!");
                    getCoinsCreated(urlBase);
                }
                else {
                    notifyError("Erro ao excluir a moeda selecionada!");
                }
            });
    }

    async function updateCoin(parameters) {
        const urlDel = urlBase + `?id=${parameters.id}`;

        var config = {
            method: 'put',
            url: urlDel,
            headers: {
                'Content-Type': 'application/json'
            },
            data: parameters
        };

        axios(config)
            .then(function (response) {
                if (response.status == 200) {
                    getCoinsCreated(urlBase);
                    document.getElementById('dvHidden').setAttribute('hidden', true);
                }
            })
            .catch(function (error) {
                console.log(error);
                notifyError("Erro ao atualizar a moeda selecionada!");
            });
    }

    function formatterJSON() {

        let validate = true;
        let id = document.getElementById('idHidden').value;
        let name = document.getElementById("criptoName").value;
        let symbol = document.getElementById("nickCrypto").value;
        let current_Price = document.getElementById("priceCrypto").value;
        let market_Cap = document.getElementById("marketCapCrypto").value;
        let imageLink = document.getElementById("logoCrypto").value;

        if (name == "") {
            notifyError("O campo Nome Criptomoeda é obrigatorio!")
            validate = false;
        }
        else if (imageLink == "") {
            notifyError("O campo URL da Logo é obrigatorio!")
            validate = false;
        }
        else if (symbol == "") {
            notifyError("O campo Símbolo Criptomoeda é obrigatorio!")
            validate = false;
        }
        else if (current_Price == "") {
            notifyError("O campo Preço é obrigatorio!")
            validate = false;
        }
        else if (market_Cap == "") {
            notifyError("O campo Capitalização de Mercado é obrigatorio!");
            validate = false;
        }

        if (validate) {
            var parameters =
            {
                id: id,
                name: name,
                symbol: symbol,
                current_Price: current_Price,
                market_Cap: market_Cap,
                imageLink: imageLink
            }
            updateCoin(parameters);
        }
    }

    function getSelectedCoin(parameter) {
        var selectedCoin = coinsCreated.filter(x => x.id == parameter);

        let element = selectedCoin[0];

        document.getElementById("idHidden").value = element.id;
        document.getElementById("criptoName").value = element.name;
        document.getElementById("nickCrypto").value = element.symbol;
        document.getElementById("priceCrypto").value = element.current_Price;
        document.getElementById("marketCapCrypto").value = element.market_Cap;
        document.getElementById("logoCrypto").value = element.imageLink;
        document.getElementById('dvHidden').removeAttribute('hidden');


    }

    const getCoinsCreated = async (urlBase) => {
        const res = await fetch(urlBase)
        const data = await res.json()

        setCoinsCreated(data);
    }

    useEffect(() => {
        getCoinsCreated(urlBase);
    }, [])

    const formatBRL = (value) => {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    return (
        <>
            <div id="dvHidden" hidden>
                <div className="container">
                    <ToastContainer />
                    <h5>Editar</h5>
                    <div className="col-md-12 formcrud">
                        <div className="row">
                            <input type="hidden" id="idHidden"></input>
                            <div className="col-md-4">
                                <div className="form-floating mb-3">
                                    <input name="nameCrypto" type="text" className="form-control" id="criptoName" placeholder="CriptoCoin" />
                                    <label>Nome Criptomoeda</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-floating mb-3">
                                    <input name="nickCrypto" type="text" className="form-control" id="nickCrypto" placeholder="CriptoCoin" />
                                    <label >Símbolo Criptomoeda</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-floating mb-3">
                                    <input name="logoCrypto" type="url" className="form-control" id="logoCrypto" placeholder="https://imgur.com/gallery/crypto" />
                                    <label >URL da logo</label>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <label className="form-label">Preço</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">R$</span>
                                    <input name="priceCrypto" type="number" className="form-control" id="priceCrypto" aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Por favor, informe um valor válido.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Capitalização de Mercado</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">R$</span>
                                    <input name="marketCapCrypto" type="number" className="form-control" id="marketCapCrypto" aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Por favor, informe um valor de capitalização válido.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <button className="btn btn-success" onClick={formatterJSON}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container element">
                <h4>Moedas da Comunidade</h4>
                <br />
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Moeda</th>
                            <th>Preço</th>
                            <th>Capitalização</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinsCreated.map((coin, index) => {
                            return <>
                                <tr key={coin?.id}>
                                    <td><b>{index + 1}</b></td>
                                    <td>
                                        <img src={coin?.imageLink} className="imgIcon"></img>
                                        &nbsp;&nbsp;
                                        <b>{coin?.symbol.toUpperCase()}</b>
                                        &nbsp;&nbsp;
                                        <span className="small-text">{coin?.name}</span>
                                    </td>

                                    <td>
                                        {formatBRL(coin?.current_Price)}
                                    </td>

                                    <td>
                                        {formatBRL(coin?.market_Cap)}
                                    </td>

                                    <td>
                                        <button type="button" className="btn btn-success" onClick={() => { getSelectedCoin(coin?.id); }}> <MdOutlineEditNote /> </button>
                                    </td>

                                    <td>
                                        <button id={coin?.id} type="button" className="btn btn-danger" onClick={() => { if (window.confirm('Deseja mesmo deletar essa moeda?')) { deleteCoin(coin?.id) }; }}> <MdDelete /></button>
                                    </td>
                                </tr>
                            </>
                        })}
                    </tbody>
                </Table>
            </div >
        </>
    );



}


export default PeopleCoin