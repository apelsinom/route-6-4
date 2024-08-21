import React from 'react';
import {useParams} from "react-router-dom";
import styles from '../../components/Site.module.css'
import {sneakersArr} from "../../DateCatalog/Catalog";

type PropsType = {
    firm: string
}
export const Model = (props: PropsType) => {
    const params = useParams()
    const model = sneakersArr[props.firm].find(m => m.id === params.id)

    return ( model ?
        <div className={styles.model}>
            <h1>Model: {model.model}</h1>
            <h2>Collection: {model.collection}</h2>
            <img src={model.picture} alt={model.model}/>
            <h3>Price: {model.price}</h3>
        </div>
    : <h1>The model is not in the catalog</h1>
    );
};