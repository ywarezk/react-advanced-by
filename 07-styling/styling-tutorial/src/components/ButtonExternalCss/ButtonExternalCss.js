import React from 'react';
import styles from './ButtonExternalCss.scss';
import H1 from '../../styled-components/typography/H1';

// styles => { 'button-external-css': 'dfsdfA' }
export default () => {
    return (
        <div className={styles.buttonExternalCss}>
            <H1>Hello styled h1</H1>
            <button className={styles.btnDanger + " " + styles.alert}>hello designed button in js</button>
        </div>
    )
}