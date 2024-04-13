import React from 'react'
import RestaurantLogo from '../Assets/RestaurantLogo.png'

function Header() {
    return (
        <>
            <img className='logo' src={RestaurantLogo} alt="Restaurant Logo" />
            <h1 className='test-Logo'>Restaurant Order Counter App</h1>
        </>
    )
}

export default Header