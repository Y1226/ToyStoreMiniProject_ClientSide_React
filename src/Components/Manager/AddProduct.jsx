import axios from "axios"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { ShowProducts } from "../../Redux/Actions/ProductActions"

export const AddProduct = (props) => {

    let productName = useRef()
    let productPicture = useRef()
    let productPrice = useRef()
    let amountInStock = useRef()
    let categoryId = useRef()

    // let products = useSelector(p => p.ProductReducer.ProductList)
    let dispatcher = useDispatch()
    // const [productToUpdate, setProductToUpdate] = useState(props.productToUpdate)
    const [newProduct, setNewProduct] = useState({})

    useEffect(() => {
        debugger
        if(props.productToUpdate.productName !== undefined) {
            setNewProduct(props.productToUpdate)
            productName.current.value = props.productToUpdate.productName
            productPicture.current.value = props.productToUpdate.productPicture
            productPrice.current.value = props.productToUpdate.productPrice
            amountInStock.current.value = props.productToUpdate.amountInStock
            categoryId.current.value = props.productToUpdate.categoryId
        }
    },[props.productToUpdate,])

    const addProduct = (id) => {
        // let np = newProduct
        debugger
        if(props.productToUpdate.productName === undefined) {
            axios.put('https://localhost:44306/api/Product/AddProduct', newProduct).then(x => {
                dispatcher(ShowProducts(x.data))
            })
            debugger
        }
        else {
            axios.post(`https://localhost:44306/api/Product/UpdateProductById/${id}`, newProduct).then(x=>{
                debugger
                dispatcher(ShowProducts(x.data))
            })
            debugger
            // setProductToUpdate({})
        }
    }

    return <div className="container">
        <br></br>
        <form>
            <div className="row">
                <div className="col-2">
                    <p>productName</p><br></br>
                    <p>productPicture</p><br></br>
                    <p>productPrice</p><br></br>
                    <p>amountInStock</p><br></br>
                    <p>categoryId</p>
                </div>
                <div className="col-10">
                    {/* <input type={'text'} className="form-control" onChange={(e) => setNewProduct({ ...newProduct, productId: e.target.value })}></input><br></br> */}
                    <input type={'text'} ref={productName} className="form-control" onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}></input><br></br>
                    <input type={'text'} ref={productPicture} className="form-control" onChange={(e) => setNewProduct({ ...newProduct, productPicture: e.target.value })}></input><br></br>
                    <input type={'text'} ref={productPrice} className="form-control" onChange={(e) => setNewProduct({ ...newProduct, productPrice: e.target.value })}></input><br></br>
                    <input type={'text'} ref={amountInStock} className="form-control" onChange={(e) => setNewProduct({ ...newProduct, amountInStock: e.target.value })}></input><br></br>
                    <input type={'text'} ref={categoryId} className="form-control" onChange={(e) => setNewProduct({ ...newProduct, categoryId: e.target.value })}></input>
                    <button className="LoginButton" onClick={() => addProduct(props.productToUpdate.productId)}>Add Product</button>
                </div>
            </div>
        </form>
    </div>
}