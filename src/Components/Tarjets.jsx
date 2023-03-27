import React, { useState } from 'react';
import '../Stylesheets/Tarjets.css'

function Tarjets(props) {

  const [titulo, setTitulo] = useState("");
  const [software, setSoftware] = useState("")
  const [curso, setCurso] = useState("")
  const [fondo, setFondo] = useState("");

  const actualizarTitulo = () => {
    const cambioTitulo = document.getElementById('textinput').value;
    setTitulo(cambioTitulo);
  }
  
  const actualizarSoftware = () => {
    const cambioSoftware = document.getElementById('textsoft').value;
    setSoftware(cambioSoftware);
  }

  const actualizarCurso = () => {
    const cambioCurso = document.getElementById('textcurso').value;
    setCurso(cambioCurso);
  }

  const cambiarFondo = (url) => {
    setFondo(`url(${url})`);
  }

  return (
    <section className='container-fluid'>
      <div className="row d-flex">
        <div style={{backgroundImage: fondo}} className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start box1">
          <h1>{titulo}</h1>
          <h3>{software}</h3>
          <h5>{curso}</h5>
          <button className="btn d-flex justify-content-start aa" type="button">¡inscribete!</button>
        </div>

        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center box2">
          <div className="box2_1">
            <input className="form-control m-2" id='textinput' type="text" placeholder='Nombre del curso' />
            <button className="btn d-flex justify-content-start a m-2" type="button" onClick={actualizarTitulo}>Actualizar</button>
            <input className="form-control m-2" id='textsoft' type="text" placeholder='Software' />
            <button className="btn d-flex justify-content-start a m-2" type="button" onClick={actualizarSoftware}>Actualizar</button>
            <textarea className="form-control m-2" id='textcurso' placeholder="Descripción"></textarea>
            <button className="btn d-flex justify-content-start a m-2" type="button" onClick={actualizarCurso}>Actualizar</button>
            <h3>Nueva Imagen</h3>
            <div className="d-flex">
              <img style={{cursor: 'pointer'}} className='img-fluid ima' src='src\assets\car.jpg' alt="" onClick={() => cambiarFondo('src/assets/car.jpg')} />
              <img style={{cursor: 'pointer'}} className='img-fluid ima' src='src\assets\K6Rz.gif' alt="" onClick={() => cambiarFondo('src/assets/K6Rz.gif')} />
              <img style={{cursor: 'pointer'}} className='img-fluid ima' src='src\assets\film.jpg' alt="" onClick={() => cambiarFondo('src/assets/film.jpg')} />
              <img style={{cursor: 'pointer'}} className='img-fluid ima' src='src\assets\3d.jpg' alt="" onClick={() => cambiarFondo('src/assets/3d.jpg')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tarjets
