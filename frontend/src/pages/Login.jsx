import React, {useState} from "react"


function Login() {

    const [inputs, setInputs] = useState({});

    const onChanged = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
    }


    return (
        <>
        <h1>Login</h1>

        <form onSubmit={onSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" value={inputs.username || ""} onChange={onChanged}/>
            <label htmlFor="password"></label>
            <input id="password" name="password" type="text" value={inputs.password || ""} onChange={onChanged}/>

            <input type="submit" value="Submit"/>
        </form>
        
        </>
    )
}

export default Login;