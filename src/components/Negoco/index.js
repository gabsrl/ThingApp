import React from 'react';

import { ContainerItem } from './style'
const Negoco = (props) => (   
    <ContainerItem>
        <p>{props.text}</p>
        <button onClick={props.onDelete}>-</button>
    </ContainerItem>
)

export default Negoco;