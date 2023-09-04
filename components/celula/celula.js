import styles from './celula.module.css';

export default function Celula({idx, item, id, click}) {
    return (
        <span key={idx} id={id} className={styles.celula} onClick={click}>
            {item}
        </span>
    )
}