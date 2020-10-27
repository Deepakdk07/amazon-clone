import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className = "home">
        <div className = "home_container">
        <img
        className = "home_image"
        src = "https://cdn.shopify.com/s/files/1/0046/7887/7256/files/vivo-banner.jpg?16803" 
        alt =""
         />
         <div className ="home_row">
            <Product 
            id ="12345"
            title = "OnePlus Nord 128GB" 
            price = {25999.99}
            image = "https://images-eu.ssl-images-amazon.com/images/I/41unZp1B15L._AC_US240_FMwebp_QL65_.jpg"
            rating={5}
            />
            <Product 
            id ="23456"
            title = "Samsung Note 20 ultra 256GB" 
            price = {104000.99}
            image = "https://www.gizmochina.com/wp-content/uploads/2020/05/Samsung-Galaxy-Note-20-Plus-5G.jpg"
            rating={5}
            />
          
             {/* {product}
             id ="" */}

         </div>
         <div className ="home_row">
            <Product 
            id ="34567"
            title = "Redmi 9A (Midnight Black, 3Gb Ram, 32Gb Storage)" 
            price = {7999.99}
            image = "https://images-eu.ssl-images-amazon.com/images/I/31vKQS4TCfL._AC_US240_FMwebp_QL65_.jpg"
            rating={3}
            /> 
            <Product 
            id ="45678"
            title = "OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)" 
            price = {1999.99}
            image = "https://images-eu.ssl-images-amazon.com/images/I/31peh6pTVKL._AC_US240_FMwebp_QL65_.jpg"
            rating={5}
            /> 
            <Product 
            id ="98765"
            title = "boAt Rugged v3 Extra Tough Unbreakable Braided Micro USB Cable 1.5 Meter (Black)" 
            price = {99.99}
            image = "https://images-eu.ssl-images-amazon.com/images/I/41SDfuK7L2L._AC_US240_FMwebp_QL65_.jpg"
            rating={5}
            />
         </div>
         <div className ="home_row">
            <Product 
            id ="34567"
            title = "OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)" 
            price = {37999.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SL1500_.jpg"
            rating={5}
            /> 
            <Product 
            id ="45678"
            title = "Samsung Galaxy S10 (Black, 8GB RAM, 128GB Storage)" 
            price = {39999.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/61-snTeMjoL._SY741_.jpg"
            rating={5}
            /> 
            <Product 
            id ="98765"
            title = "Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage)" 
            price = {18399.99}
            image = "https://images-eu.ssl-images-amazon.com/images/I/41cVLRT2gyL._AC_US240_FMwebp_QL65_.jpg"
            rating={5}
            />
         </div>
         <div className ="home_row">
            <Product 
            id ="45612"
            title = "SAMSUNG Galaxy M21" 
            price = {12499.99}
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase1/CatPage/FINAL/Horizontal/Horizontal_P.gif"
            rating={5}
            />

             {/* {product}
             id ="" */}  

         </div>


        </div>
            
        </div>
       
    )
}

export default Home
