import styles from './styles.module.css';

// Definindo o tipo das props do componente Heading
type HeadingProps = { 
    children: React.ReactNode; // Permite que o componente receba qualquer conteúdo como filho
};

export function Heading({ children }: HeadingProps) {
    return (
        <h1 className={styles.heading}>{children}</h1>
    );
}