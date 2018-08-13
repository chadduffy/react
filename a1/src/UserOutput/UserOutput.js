import React from 'react';
import './UserOutput.css';

const UserOutput = props => {
    return (
        <div className="UserOutput">
            <p>first graph name: {props.name} </p>
            <p>second graph</p>
        </div>
    );
};

export default UserOutput;