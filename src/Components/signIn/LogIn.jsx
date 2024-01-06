import { AddUser } from "../../Redux/Actions/UserActions"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useRef } from "react"
import axios from "axios"
// import { useState } from "react"

export const Login = () => {

    let email = useRef()
    let password = useRef()
    let error = useRef()

    // const [data, setData] = useState([])
    let dispatcher = useDispatch()
    const navigate = useNavigate()
    var ans = false

    //If the user exists - go to account, otherwise show error.
    const login = (e,p) => {
        debugger
        if(email.current.value === '' || password.current.value === '')
            error.current.style.display = 'block'
        else {
            axios.get(`https://localhost:44306/api/User/GetUserByEmailAndPass/${e.current.value}/${p.current.value}`).then(f => {
                ans = f.data
                if(ans === "")
                    error.current.style.display = 'block'
                else {
                    error.current.style.display = 'none'
                    if(f.data.userId === '123456789') {
                        debugger
                        localStorage.setItem('user', JSON.stringify(f.data))
                        navigate("/ManagerNav")
                    }
                    else {
                        debugger
                        localStorage.setItem('user', JSON.stringify(f.data))
                        navigate("/UserNav")
                    }
                }  
                debugger
                dispatcher(AddUser(f.data))
            })
        }
    }

    return <div className="LogInComponent">
        <p>Email</p>
        <input type={'text'} ref={email}></input>
        <p>Password</p>
        <input type={'password'} ref={password}></input>
        <p style={{color: 'red',display:'none'}} ref={error}>email or password incorrect.</p>
        <button className="LoginButton" onClick={()=>login(email, password)}>Login</button>
    </div>
}