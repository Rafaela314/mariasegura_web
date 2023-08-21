import Home from './components/Home';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-3"> Bem-Vinda ao Maria Segura </h1>
                </div>
            </div>
            <div className="col text-end">
                <a href="#!"><span className="badge bg-success">Login</span></a>
            </div>
            <hr className="mb-3"></hr>
            <div className="row">
                <div className="col-md-2">
                    <nav>
                        <div className="list-group">
                            <a href="#!"className="list-group-item list-group-item-action">Home</a>
                            <a href="#!"className="list-group-item list-group-item-action">Recursos</a>
                            <a href="#!"className="list-group-item list-group-item-action">Agendamentos</a>
                            <a href="#!"className="list-group-item list-group-item-action">Relatos</a>
                            <a href="#!"className="list-group-item list-group-item-action">Adicionar Recurso</a>
                            <a href="#!"className="list-group-item list-group-item-action">Gerenciar Catálogo</a>
                        </div>
                    </nav>
                </div>
                <div className="col-md-10">
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default App;