import { Button } from 'devextreme-react/button';
import { TextArea } from 'devextreme-react/text-area';

import styles from './Example.module.css';

export function Example() {
    return (
        <div className={`${styles.example} dx-card`}>
            <TextArea text='lorem ipsum dos loret' label='label' />
            <Button text='Ok' type='default' />
            <Button text='Accept' type='success' />
            <Button text='Decline' type='error' />
        </div>
    )
}