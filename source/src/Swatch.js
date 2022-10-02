import { Button } from "devextreme-react/button";
import { TextArea } from "devextreme-react/text-area";

import styles from "./Swatch.module.css";

export function Swatch() {
    return (
        <div className="dx-swatch-swatch">
            <div className={`${styles.appSwatch} dx-card dx-theme-text-color`}>
                <h3>Swatch example</h3>
                <TextArea label="label" text="lorem ipsum dos loret" />
                <Button text="button" />
            </div>
        </div>
    )
}