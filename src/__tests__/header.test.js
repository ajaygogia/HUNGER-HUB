import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = { prototype: TextDecoder }

import { render } from "@testing-library/react"
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from '../store/appStore'
import '@testing-library/jest-dom'

test('It should load header component with login button and 0 items in cart', () => {
    render(
        // <BrowserRouter>
        //     <Provider store={appStore}>
        //     </Provider>
        // </BrowserRouter>

        <Header />
    )
})