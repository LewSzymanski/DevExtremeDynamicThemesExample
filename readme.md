# DevExtreme Themes example

This example is based on [DevExtreme documentation](https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Switch_Between_Themes_at_Runtime)

You can generate theme css files at https://devexpress.github.io/ThemeBuilder/

Theme switching is done by invoking following code:
```js
import themes from 'devextreme/ui/themes';

// (...)

themes.current("theme-name");
```

Instead of switching DevExtreme theme css files you can swap custom css files like example below:
```css
/* light.css */
@import "/css/dx.light.css"; /* DevExpress theme file */

/* You can declare color variables for custom controls and styling */
:root {
    --font-color: black;
    --background-color: white;
    --background-color-secondary: rgb(248, 248, 248);
    --font-color-rgb: 0, 0, 0;

    --accent-color: rgb(10, 0, 209);
    
    --green: green;
    --green-rgb: 0, 128, 0;
    --orange: orange;
    --orange-rgb: 255,165,0;
    --red: red;
    --red-rgb: 255, 0, 0;
    --gray: gray;
    --gray-rgb: 128, 128, 128;

    /* If you're using compact/normal themes simultaneously you can declare size variables */
    --ws-normal: 18px;
    --ws-large: 27px;
    --ws-small: 7px;
    --ws-normal-inverse: calc(var(--ws-normal) * -1);
}
```

For cool efect you can declare transition properties
```css
color: var(--font-color);
background-color: var(--background-color-secondary);

transition: color ease 1s, background-color ease 1s;
```