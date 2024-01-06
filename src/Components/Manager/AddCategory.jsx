import { ShowCategorys } from "../../Redux/Actions/CategoryActions"
import { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"

export const AddCategory = (props) => {

    let categoryName = useRef()
    let dispatcher = useDispatch()

    const [newCategory, setNewCategory] = useState({})

    const addCategory = (id) => {
        //if you want to add a category (the category does not exist)
        if(props.categoryToUpdate.categoryName === undefined) {
            axios.put('https://localhost:44306/api/Category/AddCategory', newCategory).then(x => {
                dispatcher(ShowCategorys(x.data))
            })
        }
        //if you want to update the category.
        else {
            axios.post(`https://localhost:44306/api/Category/UpdateCategoryById/${id}`, newCategory).then(x => {
                dispatcher(ShowCategorys(x.data))
            })
        }
    }

    useEffect(() => {
        debugger
        if(props.categoryToUpdate.categoryName !== undefined) {
            setNewCategory(props.categoryToUpdate)
            categoryName.current.value = props.categoryToUpdate.categoryName
        }
    },[props.categoryToUpdate])

    return <div className="container">
        <br></br>
        <form>
            <div className="row">
                <div className="col-2">
                    <p>categoryName</p>
                </div>
                <div className="col-10">
                    <input type={'text'} ref={categoryName} className="form-control" onChange={(e) => setNewCategory({ ...newCategory, categoryName: e.target.value })}></input>
                    <button className="LoginButton" onClick={() => addCategory(props.categoryToUpdate.categoryId)}>Add Category</button>
                </div>
            </div>
        </form>
    </div>
}