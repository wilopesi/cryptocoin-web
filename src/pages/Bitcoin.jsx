import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';



const coinURL = import.meta.env.VITE_API_LAST_BITCOIN;

const Bitcoin = () => {

    const [coinInfo, setCripto] = useState([])

    const getBitcoinData = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setCripto(data)
        }
        catch { }
    }

    useEffect(() => {
        const url = `${coinURL}`
        getBitcoinData(url)
    }, [])


    const formatType = (value, text) => {

        if (text == "buy")
            return <span className="pricePositive">{value}</span>;
        else
            return <span className="priceNegative">{value}</span>;;
    }

    const coinLines = coinInfo.map((trade, index) =>
        <tr key={index}>
            <td>{formatType(trade.price.toLocaleString('pt-br', { style: 'currency', currency: 'USD' }), trade.type)}</td>
            <td>US$ {trade.amount}</td>
        </tr>
    );

    return (
        <div className="container element">
            <h4>Trades de Mercado</h4>
            <br />
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Preço (BUSD)</th>
                        <th>Quantia (BTC) </th>
                    </tr>
                </thead>
                <tbody>
                    {coinLines}
                </tbody>
            </Table>
        </div>
    )
}


export default Bitcoin