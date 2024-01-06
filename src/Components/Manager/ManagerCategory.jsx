import { ShowCategorys } from "../../Redux/Actions/CategoryActions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { AddCategory } from "./AddCategory"
import { useState } from "react"

export const ManagerCategorys = () => {

    let categorys = useSelector(c => c.CategoryReducer.CategoryList)
    let dispatcher = useDispatch()
    const [show, setShow] = useState(false)
    const [theCategory, setTheCategory] = useState({})
    
    useEffect(() => {
        axios.get('https://localhost:44306/api/Category/GetAllCategorys').then(x => {
            dispatcher(ShowCategorys(x.data))
        })
    })

    const deleteCategory = (id) => {
        axios.delete(`https://localhost:44306/api/Category/DeleteByCategoryID/${id}`).then(x => {
            dispatcher(ShowCategorys(x.data))
        })
    }

    const updateCategory = (c) => {
        setShow(!show)
        setTheCategory(c)
    }

    // const addCategory = () => {
        
    // }

    return <div className="tableDiv">
        <table className="table">
            <thead>
                <tr>
                    <th>categoryId</th>
                    <th>categoryName</th>
                </tr>
            </thead>
            <tbody>
                {
                    categorys.map(c => (
                        <tr>
                            <td>{c.categoryId}</td>
                            <td>{c.categoryName}</td>
                            <td>
                                <button className="managerButton" onClick={()=>updateCategory(c)}>Update</button>
                                <button className="managerButton" onClick={()=>deleteCategory(c.categoryId)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <button className="LoginButton" onClick={()=>setShow(!show)}>Add Category</button>
        {show && <AddCategory categoryToUpdate={theCategory}></AddCategory>}
    </div>
}