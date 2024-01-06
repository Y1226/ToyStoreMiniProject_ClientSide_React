import { Link, Outlet } from "react-router-dom"

export const SignIn = () => {
    return <div className="LogIn_or_CreateAccount">
        <div className="LogIn_or_CreateAccount_header">
            <Link to="Login" className="Login">Login</Link>
            <Link to="CreateAccount" className="Login">Create Account</Link>
        </div>
        <Outlet></Outlet>
    </div>
}