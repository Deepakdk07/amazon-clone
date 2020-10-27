import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className = "home">
        <div className = "home_container">
        <img
        className = "home_image"
        src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg" 
        alt =""
         />
         <div className ="home_row">
            <Product 
            id ="12345"
            title = "Iphone 11 128GB" 
            price = {69999.99}
            image = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132"
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
            title = "Legend of Suheldev: The King Who Saved India" 
            price = {429.99}
            image = "https://images-eu.ssl-images-amazon.com/images/I/51UNiQJBLEL._AC_SX184_.jpg"
            rating={5}
            /> 
            <Product 
            id ="45678"
            title = "Five Minute Tales Explorer Stories" 
            price = {29.99}
            image = "https://www.bookywooky.in/wp-content/uploads/2018/11/Five-Minute-Tales-Explorer-Stories-Igloo-Books-Front-Cover-9781786704856-1-247x300.jpg"
            rating={5}
            /> 
            <Product 
            id ="98765"
            title = "Katie Rowney Front Page News" 
            price = {399.99}
            image = "https://cdn2.penguin.com.au/covers/original/9781760142247.jpg"
            rating={5}
            />
         </div>
         <div className ="home_row">
            <Product 
            id ="45612"
            title = "SAMSUNG 108 inch Smart TV" 
            price = {299999.99}
            image = "https://images-na.ssl-images-amazon.com/images/I/91YWWOgObhL._SL1500_.jpg"
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
