import { LOGO_URL } from "../utilities/constants"
import { useState } from "react"
import { Link } from "react-router"
import useOnlineStatus from "../hooks/useOnlineStatus"


const Header = () => {
    let [btnText, setBtnText] = useState('Login')
    const onlineStatus = useOnlineStatus()
    return (
        <div className='header'>
            <img className='logo' src={LOGO_URL}></img>
            <div className='nav-container'>
                <ul className="nav-items">
                    <li>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
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