import styles from './Heading.module.css';

// Definindo o tipo das props do componente Heading
type HeadingProps = { 
    children: React.ReactNode; // Permite que o componente receba qualquer conteúdo como filho
};

export function Heading(props: HeadingProps) {
    return (
        <h1 className={styles.heading}>{props.children}</h1>
    );
}