import { ShowProducts } from "../../Redux/Actions/ProductActions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { AddProduct } from "./AddProduct"
import { useState } from "react"

export const ManagerHomePage = () => {

    let products = useSelector(p => p.ProductReducer.ProductList)
    let dispatcher = useDispatch()
    const [show, setShow] = useState(false)
    const [theProduct, setTheProduct] = useState({})
    
    useEffect(() => {
        axios.get('https://localhost:44306/api/Product/GetAllProductsInStore').then(x => {
            dispatcher(ShowProducts(x.data))
        })
    })

    const deleteProduct = (id) => {
        axios.delete(`https://localhost:44306/api/Product/DeleteByProdID/${id}`).then(x => {
            dispatcher(ShowProducts(x.data))
        })
    }

    const updateProduct = (p) => {
        setShow(!show)
        setTheProduct(p)
    }

    return <div className="tableDiv">
        <table className="table">
            <thead>
                <tr>
                    <th>productId</th>
                    <th>productName</th>
                    <th>productPicture</th>
                    <th>productPrice</th>
                    <th>amountInStock</th>
                    <th>categoryId</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(p => (
                        <tr>
                            <td>{p.productId}</td>
                            <td>{p.productName}</td>
                            <td>{p.productPicture}</td>
                            <td>{p.productPrice}</td>
                            <td>{p.amountInStock}</td>
                            <td>{p.categoryId}</td>
                            <td>
                                <button className="managerButton" onClick={()=>updateProduct(p)}>Update</button>
                                <button className="managerButton" onClick={()=>deleteProduct(p.productId)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <button className="LoginButton" onClick={()=>{debugger; setShow(!show)}}>Add Product</button>
        {show && <AddProduct productToUpdate={theProduct}></AddProduct>}
    </div>
}