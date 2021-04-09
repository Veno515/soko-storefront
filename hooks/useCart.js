import {useState,createContext,useEffect, useContext} from 'react'

const cartContex = createContext()


const useCartData = () => {
    const [cart,setCart] = useState(0)

    // useEffect(() => {
    //     setCart(cart + 1)
    // },[cart])

    return{cart,setCart}
}

export const CartProvider = ({children}) => {
    const data = useCartData()
    return (
        <cartContex.Provider value={data}>{children}</cartContex.Provider>
    )
}

export const useCart = () => {
    return useContext(cartContex);
}