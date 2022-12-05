import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const urlBase = import.meta.env.VITE_API_URL_BASE;

const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

function createCoin(parameters) {

    var config = {
        method: 'post',
        url: urlBase,
        headers: {
            'Content-Type': 'application/json'
        },
        data: parameters
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            notifySuccess("Moeda cadastrada com sucesso!");

            setTimeout(function(){
                window.open("./PeopleCoin", "_self");
            }, 5000);
            
        })
        .catch(function (error) {
            console.log(error);
            notifyError("Erro ao cadastrar a moeda!");
        });
}

function formatterJSON() {

    let validate = true;
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
            name: name,
            symbol: symbol,
            current_Price: current_Price,
            market_Cap: market_Cap,
            imageLink: imageLink
        }
        createCoin(parameters);
    }
}

const CRUDCoin = () => {

    return (
        <>
            <div className="container">
                <ToastContainer />
                <h2 className="element">Chegou a sua hora de criar uma Criptomoeda!</h2>
                <div className="col-md-12 formcrud">
                    <div className="row">
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
                        <button className="btn btn-success" onClick={formatterJSON}>Criar</button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CRUDCoin;