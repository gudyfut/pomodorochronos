import styles from './styles.module.css';

// Definindo o tipo das props do componente Container
type ContainerProps = { 
    children: React.ReactNode; // Permite que o componente receba qualquer conteúdo como filho
};

export function Container({children}: ContainerProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>);
}