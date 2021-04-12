import React from "react";
import EmptyBag from '../components/emptybag';
import Bag from '../components/baglayout';
import { useCart } from '../hooks/useCart';

const SokoBag = () => {
    const {cart,setCart} = useCart();
    return (
        <div>
            {cart === 0  && <EmptyBag/>}
            {cart !== 0 && <Bag/>}
        </div>
    )
};

export default SokoBag;