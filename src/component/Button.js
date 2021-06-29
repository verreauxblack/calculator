import React from 'react'

function Button(props) {
    return (
        <button className=" focus:outline-none text-black bg-bray-300" name={props.name} onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default Button
