import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const createURL = import.meta.env.VITE_API_CREATE;

function getCEP(){
    const urlAPICEP = 'https://viacep.com.br/ws/'+cep+'/json/';
 
   fetch(urlAPICEP)
   .then((response) => response.json())
   .then((json) => {
     setCEP(json)
 
     console.log(json)
   })
 }

function formatterJSON() {

    let validate = true;
    let name = document.getElementById("criptoName").value;
    let symbol = document.getElementById("nickCrypto").value;
    let current_Price = document.getElementById("priceCrypto").value;
    let market_Cap = document.getElementById("marketCapCrypto").value;
    let imageLink = document.getElementById("logoCrypto").value;

    if (name == "") {
        alert("O campo Nome Criptomoeda é obrigatorio!")
        validate = false;
    }
    else if(imageLink == "")
    {
        alert("O campo URL da Logo é obrigatorio!")
        validate = false;
    }
    else if(symbol == "")
    {
        alert("O campo Símbolo Criptomoeda é obrigatorio!")
        validate = false;
    }
    else if(current_Price == "")
    {
        alert("O campo Preço é obrigatorio!")
        validate = false;
    }
    else if(market_Cap == "")
    {
        alert("O campo Capitalização de Mercado é obrigatorio!");
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

        console.log(parameters);

        window.open("/PeopleCoin", "_self");
    }

}

const CRUDCoin = () => {

    return (
        <>
            <div className="container">
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