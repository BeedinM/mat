import { useState } from "react";
import { criaListaQ } from "@/engine/criaListaQ";

import styles from '../styles/utils.module.css';

import Celula from "@/components/celula/celula";

export default function Index() {
    const [celula, setCelula] = useState()
    const listaQ = criaListaQ(50);

    function click(idx) {
        setCelula(idx);
        console.log(celula);
    }
    return (
        <div className={styles.container}>
            {listaQ.map((item, index) => {
                return (
                    <div key={index} className={styles.container2}>
                        {item.map((casa, idx) => {
                            return (
                                <Celula idx={idx} item={casa} click={() => {click(idx)}}/>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
};