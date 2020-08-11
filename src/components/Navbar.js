import React from 'react'

const Navbar = ({ setpage }) => {
    return (
        <nav>
            <button onClick={() => setpage('planets')}>Planets</button>
            <button onClick={() => setpage('people')}>People</button>

        </nav>
    )
}

export default Navbar
