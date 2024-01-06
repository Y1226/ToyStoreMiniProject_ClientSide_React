import { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { ShowCategorys } from "../Redux/Actions/CategoryActions"
import { useNavigate } from "react-router-dom"

export const ShopByCategory = () => {

    let navigate = useNavigate()
    let dispatcher = useDispatch()
    let categorys = useSelector(s => s.CategoryReducer.CategoryList)

    useEffect(() => {
        axios.get('https://localhost:44306/api/Category/GetAllCategorys').then(c => {
            debugger
            dispatcher(ShowCategorys(c.data))
        })
    },[dispatcher])

    // const getTheProductsByCategoryId = (id) => {
        
    // }

    return <div>
        {
            categorys.map(x => (
                // <div className="homePageProductDivs">
                    <p onClick={()=>navigate('../ShopProductByCategory')}>{x.categoryName}</p>
                // {/* </div>                     */}
            ))
        }
    </div>
}