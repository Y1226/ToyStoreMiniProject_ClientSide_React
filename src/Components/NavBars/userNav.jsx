import { Link, Outlet } from "react-router-dom"

export const UserNavbar = () => {

    var user = JSON.parse(localStorage.getItem("user"))

    return <div>
        <div className="MainNavbar">
            <img src="favicon.ico" alt="Logo"></img>
            <Link to="HomePage" className="navbarText">HomePage</Link>
            {/* <Link to="ByCategory" className="navbarText">ShopByCategory</Link> */}
            <Link to="Cart" className="signIn">{user.userFirstName} {user.userLastName}</Link>
        </div>
        <Outlet></Outlet>
    </div>
}