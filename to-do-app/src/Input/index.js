import React from 'react'

function Input({onChange}) {
    return (
        <input className="input" onChange={onChange} type="text"/>
    )
}

export default Input