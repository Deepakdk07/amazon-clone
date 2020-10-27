import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className = "checkout">
        <div className ="checkout_left">
           
            <img 
            className ="checkout_ad" 
            src = "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg" 
            alt=""
             />

       

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 classname ="checkout_title">Your Shopping Basket</h2>
                {basket.map(item => (
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                     />

                ))}

            </div>
            </div>
            <div className ="checkout_right">
                <Subtotal />
                
            </div>
        </div>
    )
}

export default Checkout
