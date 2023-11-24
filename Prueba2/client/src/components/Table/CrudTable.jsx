import { Link, Outlet } from "react-router-dom"
import './style.css'



function CrudTable() {

    return (
        <>
            <div>
                <h1>Empleados</h1>
                <Link class="Link" to="/agregar" >Crear  <i className="fa-solid fa-user-plus"></i> </Link>

                <table className="table table-bordered">
                    <thead >
                      <tr className="table-danger">
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Área</th>
                            <th scope="col">Boletín</th>
                            <th scope="col">Modificar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mariana henao</td>
                            <td>Mariana@gmail.com</td>
                            <td>Femenino</td>
                            <td>Administracion</td>
                            <td>Si</td>
                            <td><i className="fa-solid fa-pen-to-square"></i></td>
                            <td><i className="fa-solid fa-trash"></i></td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default CrudTable
