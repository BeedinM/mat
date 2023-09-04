import styles from './celula.module.css';

export default function Celula({idx, item, click}) {
    return (
        <div key={idx} className={styles.celula} onClick={click}>
            {item}
        </div>
    )
}