import './style.css';
import { Link } from "react-router-dom"

function CrudForm() {


  return (
    <div className="App">
        <div className="datos">
      <Link  class="Link  " to="/ " ><i className="fa-solid fa-circle-left"></i>Regresar  </Link>
          <div className="form-group">
            <label htmlFor="nombre"><b>Nombre Completo*</b></label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre"/>
          </div>
          <div className="form-group">
            <label htmlFor="email"><b>Correo Electrónico*</b></label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
          </div>
          <label><b>Sexo*</b></label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="sexo" id="masculino" value="masculino" checked/>
            <label className="form-check-label" htmlFor="masculino">Masculino</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="sexo" id="femenino" value="femenino"/>
            <label className="form-check-label" htmlFor="femenino">Femenino</label>
          </div>
          <div className="form-group">
            <label htmlFor="area" ><b>Área*</b></label>
            <select className="form-control" id="area">
              <option>Administración</option>
              <option>Cliente</option>
              <option>Operador</option>
              <option>Auxiliar</option>
              <option>Recepcionistas</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="descripcion"><b>Descripción*</b></label>
            <textarea className="form-control" id="descripcion" placeholder="Descripción de la experiencia del empleado" rows="3"></textarea>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 ">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="boletin"/>
                <label className="form-check-label" htmlFor="boletin">Deseo recibir boletín informativo</label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2"><b>Roles*</b></div>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="profecionalProyecto"/>
                <label className="form-check-label" htmlFor="profecionalProyecto">Profesional de proyecto - Desarrollador</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gerente"/>
                <label className="form-check-label" htmlFor="gerente">Gerente estratégico</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="auxiliarAdministrativo"/>
                <label className="form-check-label" htmlFor="auxiliarAdministrativo">Auxiliar administrativo</label>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">Guardar</button>
        </div>
      </div>
    );
  }
  
  export default CrudForm