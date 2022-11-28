import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const coinURL = import.meta.env.VITE_API_COIN;
const searchURL = import.meta.env.VITE_API_SEARCH;

const Coin = () => {

    const [topCoins, setTopCoins] = useState([])

    const getTopCoins = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopCoins(data)
    }

    const verifyColor = (porcentage) => {

        let value = porcentage.toFixed(1)

        if (value < 0) {
            return <span className="priceNegative">{value}%</span>
        }
        else {
            return <span className="pricePositive">{value}%</span>
        }
    }

    useEffect(() => {
        const topCoinsUrl = `${coinURL}`
        getTopCoins(topCoinsUrl);
    }, [])

    const coinLines = topCoins.map((coin) =>
        <tr key={coin.id}>
            <td><b>{coin.market_cap_rank}</b></td>
            <td>
                <img src={coin.image} className="imgIcon"></img>
                &nbsp;&nbsp;
                <b>{coin.symbol.toUpperCase()}</b>
                &nbsp;&nbsp;
                <span className="small-text">{coin.name}</span>
            </td>
            <td>{coin.current_price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
            <td>
                {verifyColor(coin.price_change_percentage_24h)}
            </td>
            <td>{coin.total_volume.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
            <td>{coin.market_cap.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
        </tr>
    );


    return (
        <>
            <div className="container element">
                <h4>Preços das criptomoedas por capitalização de mercado</h4>
                <br />
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Moeda</th>
                            <th>Preço</th>
                            <th>24 h</th>
                            <th>Volume em 24 h</th>
                            <th>Capitalização de Mercado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinLines}
                    </tbody>
                </Table>
            </div>

            <div className="container element">
                <hr/>
                <div className="element">
                    <h6 className="navbarElement">Que tal criar sua própria Criptomoeda?</h6>
                    <div className="textCard" style={{ width: '900px', textAlign: 'justify' }}>
                        <span>
                            Já imaginou ter uma criptomoeda com o seu próprio nome? Próprio rosto? A CriptoCoin criou um jeitinho para isso!<br/>
                            Criamos uma API que consiga inserir a sua nova moeda em um mundo digital! 
                        </span>
                    </div>
                </div>
                <a href="/CRUDCoin"><button type="button" class="btn btn-primary">Crie sua criptomoeda</button></a>
            </div>
        </>
    );



}


export default Coin