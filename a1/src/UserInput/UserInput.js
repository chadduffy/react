import React from 'react';

const UserInput = props => {
    return (
        <input 
          className="UserInput"
          type="text" 
          onChange={props.changed} 
          value={props.name}
          style={props.style} />
    );
};

export default UserInput;