import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom"

function Signup() {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const onChanged = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    async function onSubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify content type
            },
            body: JSON.stringify({
                username: inputs.username,
                password: inputs.password,
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Data:', data);

        if (data.success) {
            navigate('/login');
        }
    }


    return (
        <>
        <h1>Signup</h1>

        <form onSubmit={onSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" value={inputs.username || ""} onChange={onChanged}/>
            <label htmlFor="password"></label>
            <input id="password" name="password" type="text" value={inputs.password || ""} onChange={onChanged}/>

            <input type="submit" value="Submit"/>
        </form>
        <Link to='/login'><button>Back to Login</button></Link>
        </>
    )
}

export default Signup;