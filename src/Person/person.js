import React from 'react'
import './person.css'

const person = (props) => {
    const style = {
        backgroundColor: 'blue'
    }
    return (
        <div>
            <h2 style={style} onClick={props.click}>My name is {props.name}</h2>
            <input type="text" onChange={props.change} value={props.name} />
            <h3>I am {props.age} years old</h3>
            <h3 className="activePerson">My Hobbies are: </h3> 
            {props.children}
        </div>
    )
}

export default person