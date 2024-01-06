import { useState } from "react"
// import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeFromCart, setAmountMinus, setAmountPlus } from "../Redux/Actions/CartActions"

export const Cart = () => {

    let navigate = useNavigate()
    let dispatcher = useDispatch()
    // const [amount, setAmount] = useState(1)
    // let id = useRef()

    const increaseValue = (c) => {
        // c.amount = c.amount+1
        // debugger
        // dispatcher(setAmount(c))
        debugger
        // if(id==c)
        // setAmount(c.amount+1)
        // setAmount(amount+1)
        // alert(c.amount)
        dispatcher(setAmountPlus(c))
    }

    const decreaseValue = (c) => {
        // setAmount(amount-1)
        dispatcher(setAmountMinus(c))
    }

    const remove = (c) => {
        debugger
        dispatcher(removeFromCart(c))
    }

    // let cart = JSON.parse(localStorage.getItem("cart"))
    let cart = useSelector(c => c.CartReducer.CartList)
    let amount = useSelector(a => a.CartReducer.amount)
    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
        if(cart.length !== 0) {
            setIsEmpty(false)
        }
        else {
            setIsEmpty(true)
        }
    },[setIsEmpty, cart.length])

    const checkout = () => {
        if(JSON.parse(localStorage.getItem("user"))!==null)
            navigate("../../UserNav/Checkout")
        else
            navigate("/SignIn")
    }

    return <div>
        {isEmpty && <h1>Your cart is empty.</h1>}
        {
            cart.map((c,i) => (
                <div className="cart">
                    <p>{c.productName}</p>
                    <p>{c.productPicture}</p>
                    <p>{c.productPrice}</p>
                    <p>{amount[i]}</p>
                    <button onClick={()=>remove(c)}>X</button>
                    <button onClick={()=>increaseValue(c)}>+</button>
                    <button onClick={()=>decreaseValue(c)}>-</button>
                </div>
            ))
        }
        {!isEmpty && <button onClick={()=>checkout()}>Checkout</button>}
    </div>
}