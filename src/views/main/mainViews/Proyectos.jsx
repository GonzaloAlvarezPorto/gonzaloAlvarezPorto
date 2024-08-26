import React, { useContext, useState } from 'react';
import data from '../../../data/proyectos.json';
import { CartContext } from '../../../context/CartContext';

export const Proyectos = () => {
  const proyectos = data;

  const { onMouseEnPagina, onMouseEnter, abrirProyecto } = useContext(CartContext);

  // Estado para manejar el índice del proyecto visible actual
  const [indiceActivo, setIndiceActivo] = useState(0);

  // Funciones para manejar la navegación de la galería
  const siguienteProyecto = () => {
    setIndiceActivo((prevIndice) => (prevIndice + 1) % proyectos.length);
  };

  const anteriorProyecto = () => {
    setIndiceActivo((prevIndice) => (prevIndice - 1 + proyectos.length) % proyectos.length);
  };

  return (
    <div className="principal__proyectos" onMouseEnter={abrirProyecto} onMouseLeave={onMouseEnPagina}>
      <button className='contenedor__botones botonIzquierdo' onMouseEnter={()=>onMouseEnter('Anterior')} onMouseLeave={abrirProyecto} onClick={anteriorProyecto}>
        <img className='boton__imagen' src='./media/img/flechaIzquierda.png' />
      </button>
      {proyectos.length > 0 ? (
        <div className="proyectos__contenedor">
          <div className="contenedor__tituloProyecto">
            {proyectos[indiceActivo].tipoDeProyecto}. {proyectos[indiceActivo].nombreProyecto}
          </div>
          <div className="contenedor__descripcionProyecto">
            {proyectos[indiceActivo].descripcionProyecto}
          </div>
          <div className="contenedor__imagenesProyecto">
            <div className="contenedor__logoDeCadaProyecto">
              <a
                className="imagenesProyecto__logo"
                href={proyectos[indiceActivo].URLProyecto}
                target="_blank"
                title={proyectos[indiceActivo].nombreProyecto}
                onMouseEnter={() => onMouseEnter(`Abrir ${proyectos[indiceActivo].nombreProyecto}`)}
                onMouseLeave={abrirProyecto}
              >
                <img
                  className="imagenesProyecto__logoImagen"
                  src={proyectos[indiceActivo].logoProyecto}
                  alt={proyectos[indiceActivo].nombreProyecto}
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>Sin proyectos que mostrar</p>
      )}
      <button className='contenedor__botones botonDerecho' onMouseEnter={()=>onMouseEnter('Siguiente')} onMouseLeave={abrirProyecto} onClick={siguienteProyecto}>
        <img className='boton__imagen' src='./media/img/flechaDerecha.png' />
        </button>
    </div>
  );
};
