import { useState, useEffect } from "react";
import { criaListaQ } from "@/engine/criaListaQ";

import styles from '../styles/utils.module.css';

import Celula from "@/components/celula/celula";

export default function Index() {
    const [col, setCol] = useState(0)
    const [linha, setLinha] = useState(0);
    const [cor, setCor] = useState('');
    const listaQ = criaListaQ(20);

    useEffect(() => {
        if(col && linha) {
            const teste = document.getElementById(`${linha},${col}`);
            teste.style.backgroundColor = cor.toString();       
        }
    })

    function click(col, linha) {
        setCol(col);
        setLinha(linha);
    }

    function corChange(e) {
        e.preventDefault();
        setCor(e.target.value)
    }

    return (
        <div id="teste" className={styles.container}>
            {listaQ.map((item, index) => {
                return (
                    <div key={index + 1} className={styles.container2}>
                        {item.map((casa, idx) => {
                            const linhaP = index + 1;
                            const colunaP = idx + 1;
                            const idFormat = `${linhaP},${colunaP}`
                            return (
                                <Celula idx={idx + 1} item={casa} id={idFormat} click={() => {click(idx + 1, index + 1)}}/>
                            )
                        })}
                    </div>
                )
            })}
            <div>
                <div>
                    <select name="cor" onChange={(e) => corChange(e)}>
                        <option value="White">Branco</option>
                        <option value="Black">Preto</option>
                        <option value="Blue">Azul</option>
                        <option value="Green">Verde</option>
                        <option value="Pink">Rosa</option>
                        <option value="Grey">Cinza</option>
                    </select>
                </div>

                {col && linha && (
                    <div>
                        <p>Coluna: {col}</p>
                        <p>Linha: {linha}</p>
                    </div>
                )}
            </div>
        </div>
    );
};