import React from 'react';

const validationComponent = (prop) => {
    let text = "Text too short";

    if (prop.len > 4) {
        text = "Text long enough";
    }

    return (
        <p>{text}</p>
    );

}

export default validationComponent;