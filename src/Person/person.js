import React from 'react'

const person = (props) => {
    return (
        <div>
            <h2>My name is {props.name}</h2>
            <h3>I am {props.age} years old</h3>
            <h3>My Hobbies are: </h3> 
            {props.children}
        </div>
    )
}

export default person