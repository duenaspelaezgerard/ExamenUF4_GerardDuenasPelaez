import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function TablaPendientes() {
    const [ pendientes, setPendientes] = useState([])
    
    useEffect(() => {

        const obtenerTicketPendiente = async () => {
            try {
                const response = await fetch('https://json-server-examen-gdp.vercel.app/ticketsPendientes', { method: 'GET' }).then(res => res.json())
                const data = await Promise.all(response)
                console.log('pendientes', data);

                const ticketPendientes = data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    
                if (Array.isArray(ticketPendientes)) {
                    setPendientes(ticketPendientes);
                } else {
                    console.error('Data is not an array:', data);
                }
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        obtenerTicketPendiente()

    }, [])

    async function borrarTicket(id) {
        try {
            const response = await fetch(`https://json-server-examen-gdp.vercel.app/ticketsPendientes/${id}`, { method: 'DELETE' })

            if (!response.ok) {
                throw new Error('Error al borrar');
            }
                
            setPendientes(prevdades => prevdades.filter(dato => dato.id !== id));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    return (
        <>
            <h2 className="mt-5">Tickets pendientes</h2>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripción</th>
                        <th>Alumno</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pendientes.map((pendiente, index) => (
                        <tr key={index}>
                            <td>{pendiente.codigo}</td>
                            <td>{pendiente.fecha}</td>
                            <td>{pendiente.aula}</td>
                            <td>{pendiente.grupo}</td>
                            <td>{pendiente.ordenador}</td>
                            <td>{pendiente.descripcion}</td>
                            <td>{pendiente.alumno}</td>
                            <td>
                                <button className="btn btn-success" title="Resolver ticket">Resolver</button>
                                </td>
                            <td>
                                <button className="btn btn-warning" title="Añadir comentario">
                                    <i className="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-info" title="Ver comentarios">
                                    <i className="bi bi-chat-left-text"></i>
                                </button>
                            </td>
                            <td onClick={() => borrarTicket(pendiente.id)}>
                                <button className="btn btn-danger" title="Eliminar ticket">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}