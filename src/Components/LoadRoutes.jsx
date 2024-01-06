import { CreateAccount } from "./signIn/CreateAccount"
import { ManagerNavbar } from "./NavBars/managerNav"
import { Route, Routes } from "react-router-dom"
import { UserNavbar } from "./NavBars/userNav"
import { Login } from "./signIn/LogIn"
import { HomePage } from "./HomePage"
import { SignIn } from "./SignIn"
import { Nav } from "./NavBar"
import { ProductDetails } from "./ProductDetails"
import { Cart } from "./Cart"
// import { ShopByCategory } from "./ShopByCategory"
import { ManagerHomePage } from "./Manager/ManagerHomePage"
import { ManagerCategorys } from "./Manager/ManagerCategory"
// import { ShopProductByCategory } from "./ShopProductByCategory"
import { CartCheckout } from "./checkout"
// import { Checkout } from "./checkout"

export const LoadRoutes = () => {
    return <Routes>
        <Route path='/' element={<Nav></Nav>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="ProductDetails" element={<ProductDetails></ProductDetails>}></Route>
            {/* <Route path="ByCategory" element={<ShopByCategory></ShopByCategory>}></Route> */}
            <Route path="SignIn" element={<SignIn></SignIn>}>
                <Route path="Login" element={<Login></Login>}></Route>
                <Route path="CreateAccount" element={<CreateAccount></CreateAccount>}></Route>
            </Route>
            <Route path="Cart" element={<Cart></Cart>}></Route>
        </Route>
        <Route path="ManagerNav" element={<ManagerNavbar></ManagerNavbar>}>
            <Route path="ManagerHomePage" element={<ManagerHomePage></ManagerHomePage>}></Route>
            <Route path="ManagerByCategory" element={<ManagerCategorys></ManagerCategorys>}></Route>
        </Route>
        <Route path="UserNav" element={<UserNavbar></UserNavbar>}>
            <Route path="HomePage" element={<HomePage></HomePage>}></Route>
            <Route path="ProductDetails" element={<ProductDetails></ProductDetails>}></Route>
            {/* <Route path="ByCategory" element={<ShopByCategory></ShopByCategory>}></Route> */}
            {/* <Route path="ShopByCategory" element={<ShopProductByCategory></ShopProductByCategory>}></Route> */}
            <Route path="Cart" element={<Cart></Cart>}></Route>
            <Route path="Checkout" element={<CartCheckout></CartCheckout>}></Route>
        </Route>
    </Routes>
}