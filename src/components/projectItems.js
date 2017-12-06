import React, { Component } from 'react';

const ProjectItems = (props) => {
    return(
        <li>
            <strong>{props.item.model} </strong>: {props.item.category}
        </li>
        );
}

export default ProjectItems;