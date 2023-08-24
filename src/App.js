import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Alert from './components/Alert';

function App() {
    const [jwtToken, setJwtToken] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertClassName, setAlertClassName] = useState("d-none");

    const navigate = useNavigate();

    const logOut = () => {
        setJwtToken("");
        navigate("/login")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-3"> Bem-Vinda </h1>
                </div>
            </div>
            <div className="col text-end">
                {jwtToken === ""
                ? <Link to="/login"><span className="badge bg-success">Login</span></Link>
            : <a href="#!" onClick={logOut}><span className="badge bg-danger">Logout</span></a>}
                
            </div>
            <hr className="mb-3"></hr>
            <div className="row">
                <div className="col-md-2">
                    <nav>
                        <div className="list-group">
                            <Link to="/"className="list-group-item list-group-item-action">Home</Link>
                            <Link to="/resources"className="list-group-item list-group-item-action">Recursos</Link>
                            <Link to="/appointments"className="list-group-item list-group-item-action">Agendamentos</Link>
                            <Link to="/journal"className="list-group-item list-group-item-action">Relatos</Link>
                            {jwtToken !== ""  && 
                                <>
                                    <Link to="/admin/resource/0"className="list-group-item list-group-item-action">Adicionar Recurso</Link>
                                    <Link to="/manage-resources"className="list-group-item list-group-item-action">Gerenciar Catálogo</Link>
                                </>
                            }                 
                        </div>
                    </nav>
                </div>
                <div className="col-md-10">
                    <Alert 
                        message={alertMessage}
                        className={alertClassName}
                    />
                    <Outlet context={{
                        jwtToken, 
                        setJwtToken, 
                        setAlertClassName, 
                        setAlertMessage,
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default App;