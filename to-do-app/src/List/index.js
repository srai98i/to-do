import React from 'react'
import Button from '../Button'


function List({listItem}) {
    return (
        <ul>
            {listItem.map((list)=>(
             <div>
             <input type="checkbox"/>
            <li>{list}</li>
             </div>   
            ))}
        </ul>
    )
}

export default List