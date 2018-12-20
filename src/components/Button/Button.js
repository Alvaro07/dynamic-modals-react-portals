import React from 'react';

// Button component

const Button = (props) => {
    return <button className="c-button" onClick={ props.onClick } >{props.children}</button>
}

export default Button;