import { LOGO_URL } from "../utilities/constants"
import { useState } from "react"


const Header = () => {
    let [btnText, setBtnText] = useState('Login')
    return (
        <div className='header'>
            <img className='logo' src={LOGO_URL}></img>
            <div className='nav-container'>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button className='login' onClick={changeName}>{btnText}</button>
            </div>
        </div>
    )

    function changeName() {
        btnText == 'Login' ? setBtnText('Logout') : setBtnText('Login')
        
    }
}

export default Header