import React from 'react';
import './Person.css';

const person = (props) => {
    if (Math.random() > 0.5) {
        throw new Error('stuff broke');
    }
    
    return (
        <div className="Person">
            <p onClick={props.click}>My name is {props.name}</p>
            <p>age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;