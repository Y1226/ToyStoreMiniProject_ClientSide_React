import { Link, Outlet } from "react-router-dom"

export const ManagerNavbar = () => {

    var user = JSON.parse(localStorage.getItem("user"))

    return <div>
    <div className="MainNavbar">
        <img src="favicon.ico" alt="Logo"></img>
        <Link to="ManagerHomePage" className="navbarText">HomePage</Link>
        <Link to="ManagerByCategory" className="navbarText">ShopByCategory</Link>
        <p to="Cart" className="signIn">{user.userFirstName}</p>
    </div>
    <Outlet></Outlet>
</div>
}