import { useState } from "react";
import Input from "./form/Input";
import { useOutletContext } from "react-router-dom";


const Login =() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtTokwn } = useOutletContext();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "admin@axample.com") {
           setJwtTokwn("abc");

        }
    }

    return (
        <div> className="col-md-6 offset-md-3"
            <form onSubmit={handleSubmit}>
                <Input 
                    title="email"
                    type="text"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    title="senha"
                    type="text"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <hr />
                <input 
                    type="submit"
                    className="btn btn-primary"
                    value="Login">
                </input>
            
            </form>
           
        </div>
    )
}


export default Login;