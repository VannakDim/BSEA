import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/axios"

const Register = () =>{
    const [inputs, setInputs] = useState({
        username: "",
        name: "",
        email: "",
        password: ""
    })

    const [err, setErr] = useState(null)
    const navigate = useNavigate()
    //const {login} = useContext(AuthContext)

    const handleChange = e =>{
        e.preventDefault()
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    // console.log(inputs)

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            await axiosInstance.post("/auth/register", inputs)
            navigate("/login")
        } catch (err) {
            console.log(err);
            setErr(err.response.data)
        }
    }
    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
                <input required type="text" placeholder="first name" name="name" onChange={handleChange}/>
                <input required type="email" placeholder="email" name="email" onChange={handleChange}/>
                <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <span>Don't you have any account? <Link to ="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register