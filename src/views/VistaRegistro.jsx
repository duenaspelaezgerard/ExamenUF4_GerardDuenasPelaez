export default function VistaRegistro() {

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center mt-3 mb-5">Registro</h1>
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="InputNombre1" className="form-label">Nombre:</label>
                                <input id="nombre" type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="InputEmail1" className="form-label">Apellidos:</label>
                                <input  id="apellido" type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="InputEmail1" className="form-label">Email:</label>
                                <input id="email" type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="InputPassword1" className="form-label">Contraseña: </label>
                                <input id="contra" type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="rol" className="form-label">Rol:</label><br/>
                                <select className="form-select" id="rol" name="rol">
                                    <option value="0" selected>Alumno</option>
                                    <option value="1">Profesor</option>
                                    <option value="2">Administrador</option>
                                </select>
                            </div>
                            <button id="butRegistro" type="" className="btn btn-primary w-100">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}