import { useState } from "react";
import Input from "./form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";


const Login =() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtTokwn } = useOutletContext();
    const { setAlertClassName } = useOutletContext();
    const { setAlertMessage } = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "admin@axample.com") {
           setJwtTokwn("abc");
           setAlertClassName("d-none")
           setAlertMessage("");
           navigate("/");
        } else {
            setAlertClassName("alert-danger")
            setAlertMessage("combinação de email e senha inválida")
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