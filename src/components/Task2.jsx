import React, { useState } from 'react'

const Task2 = () => {

    const [boolean, setBoolean] = useState(false)

    const booleanValue = boolean === false ? "false" : "true";

    return (
        <>
            <h1>Question 3.</h1>
            <div className='container'>
                <div className='inner_container'>
                    <h1>Boolean Value is : {booleanValue}</h1>
                    <button onClick={() => setBoolean(!boolean)}>Change Value</button>
                </div>
                <button className={boolean === false ? "false" : "true"}>Add</button>
            </div>
        </>
    )
}

export default Task2