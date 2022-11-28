import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const updateURL = import.meta.env.VITE_API_UPDATE;
const deleteURL = import.meta.env.VITE_API_DELETE;
const getAllURL = import.meta.env.VITE_API_GET_ALL;

const PeopleCoin = () => {
    return (
        <>
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
                        <tr>
                            <td>
                                1
                            </td>

                            <td>
                                Nibiro
                            </td>

                            <td>
                                10$
                            </td>

                            <td>
                                0$
                            </td>

                            <td>
                                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                            </td>

                            <td>
                                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </>
    );



}


export default PeopleCoin