import themes from 'devextreme/ui/themes';

export class Theme {
    static dark = "dark";
    static light = "light";
    static solarized = "solarized";
    static compact = "compact";
}

export function switchToTheme(theme) {
    switch (theme) {
        default:
        case Theme.light:
            themes.current("light");
            break;

        case Theme.dark:
            themes.current("dark");
            break;

        case Theme.solarized:
            themes.current("solarized");
            break;

        case Theme.compact:
            themes.current("compact");
            break;
    }
}