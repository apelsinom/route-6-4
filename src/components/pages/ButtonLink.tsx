import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../Site.module.css";

type PropsType = {
    firm: string
    address: string
}
export const ButtonLink = (props: PropsType) => {
    return (
        <div>
            <NavLink to={props.address} className={({isActive}) => (isActive ? styles.activated : styles.navlink)}>
                {props.firm}
            </NavLink>
        </div>
    );
};

