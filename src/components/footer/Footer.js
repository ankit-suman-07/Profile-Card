import React, { useState } from 'react'

const Footer = ({ page, setPage }) => {
    // const [count, setCount] = useState(1);

    return (

        <div>
            <button onClick={() => setPage(prev => prev + 1)} >+</button>
            <button onClick={() => setPage(prev => prev - 1)} >-</button>
            {
                page
            }
        </div>
    )
}

export default Footer