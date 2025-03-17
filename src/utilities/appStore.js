
const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from '../slices/cartSlice'

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default appStore