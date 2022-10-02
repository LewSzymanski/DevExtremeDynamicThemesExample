import { Button } from "devextreme-react/button";
import { switchToTheme, Theme } from "./switchToTheme";

import styles from './ThemeSwitcher.module.css';

export function ThemeSwitcher() {
    return (
        <div className={styles.themeButtons}>
            <Button text="light" onClick={switchToLight} />
            <Button text="dark" onClick={switchToDark} />
            <Button text="solarized" onClick={switchToSolarized} />
            <Button text="compact" onClick={switchToCompact} />
        </div>
    )
}

function switchToLight() {
    switchToTheme(Theme.light);
};

function switchToDark() {
    switchToTheme(Theme.dark);
};

function switchToSolarized() {
    switchToTheme(Theme.solarized);
};

function switchToCompact() {
    switchToTheme(Theme.compact);
};