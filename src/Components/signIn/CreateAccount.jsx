import { AddUser } from "../../Redux/Actions/UserActions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const CreateAccount = () => {

    let id = useRef()
    let fname = useRef()
    let lname = useRef()
    let address = useRef()
    let email = useRef()
    let phone = useRef()
    let password = useRef()

    const [newUser, setNewUser] = useState({})
    // const [data, setData] = useState([])
    const navigate = useNavigate()
    let dispatcher = useDispatch()

    //Sets newUser according to input.
    const changeColor = (e) => {
        // debugger
        e.current.style.color = 'black'
        switch (e) {
            case id:
                setNewUser({ ...newUser, userId: e.current.value })
                break;
            case fname:
                setNewUser({ ...newUser, userFirstName: e.current.value })
                break;
            case lname:
                setNewUser({ ...newUser, userLastName: e.current.value })
                break;
            case address:
                setNewUser({ ...newUser, userAddress: e.current.value })
                break;
            case email:
                setNewUser({ ...newUser, userEmail: e.current.value })
                break;
            case phone:
                setNewUser({ ...newUser, userPhone: e.current.value })
                break;
            case password:
                setNewUser({ ...newUser, userPassword: e.current.value })
                break;
            default:
                break;
        }
    }
    //If the input is invalid, write invalid in red in the input box.
    const invalid = (e) => {
        e.current.value = 'invalid'
        e.current.style.color = 'red'
    }

    //Check if input is valid, if it is add the new user to the database.
    const CreateAccount = (e, p) => {
        debugger
        let check = checkFields()
        if (check) {
            axios.put('https://localhost:44306/api/User/AddUser', newUser).then(x => {
                debugger;
                dispatcher(AddUser(x.data))
                if (!x.data) {
                    id.current.value = 'user already exists'
                    id.current.style.color = 'red'
                }
                else {
                    axios.get(`https://localhost:44306/api/User/GetUserByEmailAndPass/${e.current.value}/${p.current.value}`).then(f => {
                        debugger
                        localStorage.setItem('user', JSON.stringify(f.data))
                        navigate("/UserNav")
                        dispatcher(AddUser(f.data))
                    })
                }
            })


        }
    }

    //Check if the fields are valid.
    const checkFields = () => {
        debugger
        let flag = true

        if (id.current.value.length !== 9 || id.current.value.length === '123456789' || !Number(id.current.value)) {
            flag = false
            invalid(id)
        }

        if ((fname.current.value === '' || fname.current.value === 'invalid') || fname.current.value.length > 50) {
            flag = false
            invalid(fname)
        }

        if ((lname.current.value === '' || lname.current.value === 'invalid') || lname.current.value.length > 50) {
            flag = false
            invalid(lname)
        }

        if ((address.current.value === '' || address.current.value === 'invalid') || address.current.value.length > 50) {
            flag = false
            invalid(address)
        }

        if (email.current.value === '' || email.current.value === 'invalid' || !(/\S+@\S+\.\S+/.test(email.current.value))) {
            flag = false
            invalid(email)
        }

        if (phone.current.value === '' || phone.current.value === 'invalid' || phone.current.value.length < 9 || phone.current.value.length > 10) {
            flag = false
            invalid(phone)
        }

        if (password.current.value === '' || password.current.value === 'invalid') {
            flag = false
            invalid(password)
        }

        return flag
    }

    return <div className="LogInComponent">
        <p>ID</p>
        <input type={'text'} ref={id} onChange={() => changeColor(id)}></input>
        <p>First Name</p>
        <input type={'text'} ref={fname} onChange={() => changeColor(fname)}></input>
        <p>Last Name</p>
        <input type={'text'} ref={lname} onChange={() => changeColor(lname)}></input>
        <p>Address</p>
        <input type={'text'} ref={address} onChange={() => changeColor(address)}></input>
        <p>Email</p>
        <input type={'email'} ref={email} onChange={() => changeColor(email)}></input>
        <p>Phone</p>
        <input type={'text'} ref={phone} onChange={() => changeColor(phone)}></input>
        <p>Password</p>
        <input type={'password'} ref={password} onChange={() => changeColor(password)}></input>

        <button className="LoginButton" onClick={() => CreateAccount(email, password)}>Create Account</button>
    </div>
}