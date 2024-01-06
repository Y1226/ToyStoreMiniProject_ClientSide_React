import { Link, Outlet } from "react-router-dom"

export const Nav = () => {
    return <div>
        <div className="MainNavbar">
            <img src="favicon.ico" alt="Logo"></img>
            <Link to="/" className="navbarText">HomePage</Link>
            {/* <Link to="ByCategory" className="navbarText">ShopByCategory</Link> */}
            <Link to="SignIn" className="signIn">SignIn</Link>
            <Link to="Cart" className="signIn">Cart</Link>
        </div>
        <Outlet></Outlet>
    </div>
}