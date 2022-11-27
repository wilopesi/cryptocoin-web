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
        
        if(value < 0)
        {
            return <span className="priceNegative">{value}%</span>
        }
        else
        {
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
            <td>{coin.current_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
            <td>
                {verifyColor(coin.price_change_percentage_24h)}
             </td>
            <td>{coin.total_volume.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
            <td>{coin.market_cap.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
        </tr>
    );


    return (
        <div className="container element">
            <h4>Preços das criptomoedas por capitalização de mercado</h4>
            <br/>
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
    );



}


export default Coin