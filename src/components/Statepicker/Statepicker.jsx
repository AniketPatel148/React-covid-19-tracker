import React, { useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './Statepicker.module.css';
import {States} from '../../api';



const Statepicker = ({handleStateChange}) => {

    const [fetchedStates, setfetchedStates] = useState([]);

    useEffect(() => {
        const fetchStates = async () => {
            setfetchedStates(await States())
        }

        fetchStates();
    },[setfetchedStates]);
 
    return (
        <div className={styles.container}>
        <span>State :</span>
        <div className={styles.main}>
        <FormControl>
            <NativeSelect defaultValue="India" onChange={(e) => handleStateChange(e.target.value)}>
                {fetchedStates.map((state,i) => <option key={i}  value={state}>{state}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
        </div>
    )
}

export default Statepicker;