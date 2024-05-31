export default function VistaLogin() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <h1 className="text-center mt-3 mb-5">Iniciar Sesión</h1>
                <div className="card">
                    <div className="card-body">
                    <form action="">
                        <div className="mb-3">
                        <label for="InputEmail1" className="form-label">Email:</label>
                        <input id="email" type="text" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                        <label for="InputPassword1" className="form-label">Contraseña: </label>
                        <input id="contra" type="text" className="form-control"/>
                        </div>
                        <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="Check1"/>
                        <label className="form-check-label" for="Check1">Recordar Contraseña</label>                 
                        </div>
                        <div className="text-end mb-3">
                        <a href="#" >¿Has olvidado la contraseña?</a>
                        </div>
                        <a href=""><button id="butLogin" type="" className="btn btn-primary w-100">Iniciar Sesión</button></a>
                    </form>
                    </div>
                </div>
                <div className="mt-5">
                    <a id="butRegistro" href="registro.html" className="btn btn-secondary w-100">¿Eres nuevo? Regístrate</a>
                </div>
                </div>
            </div>
        </div>
    )
}