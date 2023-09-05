import styles from './celula.module.css';

export default function Celula({ item, id, click}) {
    return (
        <span  id={id} className={styles.celula} onClick={click}>
            {item}
        </span>
    )
}