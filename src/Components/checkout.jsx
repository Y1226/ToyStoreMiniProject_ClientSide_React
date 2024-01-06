import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setCart } from "../Redux/Actions/CartActions"
import { useNavigate } from "react-router-dom"
// import { useRef } from "react"

export const CartCheckout = () => {

    
    let navigate = useNavigate()
    let dispatcher = useDispatch()
    var user = JSON.parse(localStorage.getItem("user"))
    // var cart = JSON.parse(localStorage.getItem("cart"))
    let cart = useSelector(c => c.CartReducer.CartList)
    let amount = useSelector(a => a.CartReducer.amount)
    let sendCart = []

    const continueToCheckout = (u) => {
        alert("continueToCheckout")
        debugger
        for (let i = 0; i < cart.length; i++) {
            let newItem = {productId: cart[i].productId, productName: cart[i].productName, amountToBuy: amount[i], productPrice: cart[i].productPrice, finalPrice: cart[i].productPrice*amount[i]}
            sendCart.push(newItem)
        }

        axios.post(`https://localhost:44306/api/Checkout/Checkout/${u}`, sendCart).then(i => {
            debugger
            dispatcher(setCart(i.data))
        })
        // receipt.current.style.display = 'block'
        localStorage.clear()
        // dispatcher(setCart({}))
        navigate("/")
        

    }

    return <div>
        {/* <div className="row">
            <div className="col-75">
                <div className="container">
                    
                    <form action="/action_page.php">

                        <div className="row">
                            <div className="col-50">
                                <h3>Billing Address</h3>
                                <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                                <label htmlFor="email"><i className="fa fa-envelope"></i>Email</label>
                                <input type="text" id="email" name="email" placeholder="john@example.com"></input>
                                <label htmlFor="adr"><i className="fa fa-address-card-o"></i>  Address</label>
                                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
                                <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" placeholder="New York"></input>

                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="state">State</label>
                                        <input type="text" id="state" name="state" placeholder="NY"></input>
                                    </div>
                                    <div className="col-50">
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder="10001"></input>
                                    </div>
                                </div>
                            </div>

                            <div className="col-50">
                                <h3>Payment</h3>
                                <label htmlFor="fname">Accepted Cards</label>
                                <div className="icon-container">
                                    <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
                                    <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
                                    <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
                                    <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
                                </div>
                                <label htmlFor="cname">Name on Card</label>
                                <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                                <label htmlFor="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                                <label htmlFor="expmonth">Exp Month</label>
                                <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="expyear">Exp Year</label>
                                        <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                                    </div>
                                    <div className="col-50">
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="352"></input>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <label>
                            <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing</input>
                        </label> */}
                        {/* <button className="btn" onClick={()=>continueToCheckout()}>Continue to checkout</button>
                    </form>
                </div>
            </div>
            <div className="col-25">
                <div className="container">
                    <h4>Cart <span className="price" style={{color:"black"}}><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                    <p><a href="#">Product 1</a> <span className="price">$15</span></p>
                    <p><a href="#">Product 2</a> <span className="price">$5</span></p>
                    <p><a href="#">Product 3</a> <span className="price">$8</span></p>
                    <p><a href="#">Product 4</a> <span className="price">$2</span></p>
                    <hr></hr>
                    <p>Total <span className="price" style={{color:"black"}}><b>$30</b></span></p>
                </div>
            </div>
        </div> */} 
        <form>
            <input type={'text'}></input>
            <input type={'text'}></input>
            {/* user.userId */}
            <button onClick={()=>continueToCheckout(user.userId)}>Continue to checkout</button>
            {/* {
                sendCart.map(c => (
                    <div style={{display: 'none'}}>
                        <p>#{c.productId}</p>
                        <p>{c.productName}</p>
                        <p>Amount: {c.amountToBuy}</p>
                        <p>Single Price: {c.productPrice}</p>
                        <p>Final Price: {c.finalPrice}</p>
                    </div>
                ))
            } */}
        </form>
    </div>
}