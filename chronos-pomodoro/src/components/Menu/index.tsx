import {HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'light' | 'dark';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const savedTheme = localStorage.getItem('theme') as AvailableThemes | 'dark';
        return savedTheme;
    });

    function handleThemeClick( event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        return () => {
            console.log('Cleaning up theme effect');
        }
    }, [theme]);

    const nextThemeIcon = {
        light: <MoonIcon/>,
        dark: <SunIcon/>
    }

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href="#" aria-label="Ir para Home" title="Ir para Home">
                <HouseIcon/>
            </a>
            <a className={styles.menuLink} href="#" aria-label="Ver History" title="Ver History">
                <HistoryIcon/>
            </a>
            <a className={styles.menuLink} href="#" aria-label="Settings" title="Settings">
                <SettingsIcon/>
            </a>
            <a className={styles.menuLink} href="#" aria-label="Mudar Theme" title="Mudar Theme" onClick={handleThemeClick}>
                {nextThemeIcon[theme]}              
            </a>
        </nav>
    );
}