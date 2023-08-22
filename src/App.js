import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-3"> Bem-Vinda </h1>
                </div>
            </div>
            <div className="col text-end">
                <Link to="/login"><span className="badge bg-success">Login</span></Link>
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
                            <Link to="/admin/resource/0"className="list-group-item list-group-item-action">Adicionar Recurso</Link>
                            <Link to="/admin"className="list-group-item list-group-item-action">Gerenciar Catálogo</Link>
                        </div>
                    </nav>
                </div>
                <div className="col-md-10">
                
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default App;