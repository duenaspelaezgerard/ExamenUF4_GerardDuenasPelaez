import { useNavigate } from "react-router-dom"

export default function VistaNouTicket() {

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                        <form action="">
                            <div className="mb-3">
                                <label for="codigoTicket" className="form-label">Código: </label>
                                <input type="text" className="form-control mb-3" id="codigo" />

                                <label for="fecha" className="form-label">Fecha: </label>
                                <input type="date" className="form-control mb-3" id="fecha" />

                                <label for="aula" className="form-label">Aula: </label>
                                <input type="text" className="form-control mb-3" id="aula" />

                                <label for="ordenador" className="form-label">Ordenador: </label>
                                <input type="text" className="form-control mb-3" id="ordenador" />

                                <label for="descripcion" className="form-label">Descripción: </label>
                                <textarea className="form-control mb-3" id="descripcion" rows="3"></textarea>

                                <label for="alumno" className="form-label">Alumno: </label>
                                <input type="text" className="form-control mb-3" id="alumno" />

                                <label for="grupo" className="form-label">Grupo: </label>
                                <input type="text" className="form-control mb-3" id="grupo" />

                                <div className="d-flex align-items-center">
                                    <button id="btnAñadirTicket" className="btn btn-success me-2">Añadir</button>
                                    <div className="ms-2"></div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}