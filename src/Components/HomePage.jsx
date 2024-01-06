import axios from "axios"
// import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ShowProducts } from "../Redux/Actions/ProductActions"
// import { setProductId, setProductName, setPrice } from "../Redux/Actions/CartActions"
import { useNavigate } from "react-router-dom"
// import { setAmount, setAmountPlus } from "../Redux/Actions/CartActions"

export const HomePage = () => {

    // const [cart, setCart] = useState([])
    let products = useSelector(x => x.ProductReducer.ProductList)
    let cartSelector = useSelector(c => c.CartReducer.CartList)
    let d = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://localhost:44306/api/Product/GetAllProductsInStore').then(p => {
            debugger
            d(ShowProducts(p.data))
        })
    }, [d])

    // let count = 1
    
    const AddToCart = (i) => {
        debugger
        // setCart(i)
        // let c = cart
        // d(setCart(i))
        let added = false
        // let amount
        cartSelector.map(x=>(
            x.productId===i.productId && (added = true)//,amount=x.amount+1,i = {...i, amount:x.amount})
        ))
        if(added) {
            alert('Already added to cart!')
            // d(setAmountPlus(i))
            // i.amount = amount
            // d(setAmount(i))
        }
        else {
            // i = {...i, amount:1}
            d({type: 'setCart', payload: i})
            d({type: 'setAmount', payload: 1})
        }
       
        // d({type: 'setAmount', payload: count})
        // setCart(cart.concat(i))
        // localStorage.setItem("cart", JSON.stringify(cart))
        // console.log(cartSelector)
    }

    const fullDetails = (i) => {
        localStorage.setItem("itemDetails", JSON.stringify(i))
        debugger
        if(localStorage.getItem("user")!=="")
            navigate("../ProductDetails")
        else
            navigate("/ProductDetails")
    }

    return <div>
        {
            products.map(x => (
                    <div key={x.productId} className="homePageProductDivs">
                        <p onClick={()=>fullDetails(x)}>Name: {x.productName}</p>
                        <p>Price: {x.productPrice}</p>
                        <button onClick={()=>AddToCart(x)}>AddToCart</button>
                    </div>
                )
            )
        }
    </div>
}