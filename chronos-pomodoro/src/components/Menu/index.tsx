import {HouseIcon, HistoryIcon, SettingsIcon, SunIcon} from 'lucide-react';
import styles from './styles.module.css';

type AvailableThemes = 'light' | 'dark';

export function Menu() {
    const [theme, setTheme] = React.useState<AvailableThemes>('dark');

    function handleThemeClick() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    }

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href="#" aria-label="Ir para Home" title="Ir para Home">
                <HouseIcon className={styles.icon} />
            </a>
            <a className={styles.menuLink} href="#" aria-label="Ver History" title="Ver History">
                <HistoryIcon className={styles.icon} />
            </a>
            <a className={styles.menuLink} href="#" aria-label="Settings" title="Settings">
                <SettingsIcon className={styles.icon} />
            </a>
            <a className={styles.menuLink} href="#" aria-label="Mudar Theme" title="Mudar Theme" onClick={handleThemeClick}}>
                <SunIcon className={styles.icon} />               
            </a>
        </nav>
    );
}