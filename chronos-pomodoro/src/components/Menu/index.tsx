import {HouseIcon, HistoryIcon, SettingsIcon, SunIcon} from 'lucide-react';
import styles from './styles.module.css';



export function Menu() {
    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href="#">
                <HouseIcon className={styles.icon} />
            </a>
            <a className={styles.menuLink} href="#">
                <HistoryIcon className={styles.icon} />
            </a>
            <a className={styles.menuLink} href="#">
                <SettingsIcon className={styles.icon} />
            </a>
            <a className={styles.menuLink} href="#">
                <SunIcon className={styles.icon} />               
            </a>
        </nav>
    );
}