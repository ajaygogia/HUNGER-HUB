import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"

function Cart() {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    function clearCart() {
        dispatch({ type: 'cart/clearCart' })
    }
    return (
        <div className="cart-items">
            <h1>Cart</h1>
            <button className="clear-cart" onClick={() => { clearCart() }}>Clear Cart</button>
            {cartItems.length == 0 && <h1>Your Cart Is Empty</h1>}
            <div>
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart