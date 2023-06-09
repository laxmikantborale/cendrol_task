import React, { useState } from 'react'


const Task1 = () => {

    const [counter, setCounter] = useState(1)


    return (
        <>
        <h1>Question 1. </h1>
            <div className='square'>
                <div className={counter === 1 ? "circle" : "circle color"} onClick={() => setCounter(counter + 1)}>
                    <h1>{counter}</h1>
                    <a href=''>Click to increase counter</a>
                </div>
            </div>
            <div className='btn_div'>
                <button onClick={() => setCounter(counter + 1)}>Change color</button>
            </div>
        </>
    )
}

export default Task1