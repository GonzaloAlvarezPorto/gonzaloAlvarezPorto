import React, { useContext, useState } from 'react';
import data from '../../../data/servicios.json';
import { CartContext } from '../../../context/CartContext';

export const Servicios = () => {
  const { empujarBloque, onMouseEnPagina, onMouseEnter } = useContext(CartContext);

  const servicios = data;

  // Crear un estado para almacenar la visibilidad de cada párrafo y su min-height
  const [estilos, setEstilos] = useState(servicios.map(() => ({ display: 'none', minHeight: '0px' })));

  // Función para cambiar el display y min-height
  const cambiarEstilo = (index) => {
    setEstilos((prevEstilos) => {
      const newEstilos = [...prevEstilos];
      newEstilos[index] = {
        display: newEstilos[index].display === 'none' ? 'flex' : 'none',
        minHeight: newEstilos[index].minHeight === '0px' ? '100px' : '0px'
      };
      return newEstilos;
    });
  }

  // Función para determinar el mensaje de onMouseEnter
  const handleMouseEnter = (index, titulo) => {
    const display = estilos[index].display;
    const mensaje = display === 'none' ? `Empujar ${titulo}` : `Tirar ${titulo}`;
    onMouseEnter(mensaje);
  }

  return (
    <>
      <div className="principal__servicios">
        <div className="servicios__apartado" >
          <p className="apartado__cabecera">Servicios</p>
          <p className="apartado__descripcion">
            Al dedicarme a la creación y desarrollo de sitios web para individuos,
            negocios u organizaciones, el objetivo principal es ofrecer diseños web que sean
            visualmente atractivos, funcionales y alineados con las necesidades y objetivos del cliente.
            Aquí hay algunas de las principales actividades:
          </p>
          <ul className="apartado__listadoCabecera">
            {servicios.length > 0 ? (
              servicios.map((servicio, index) => (
                <li key={index} className="listadoCabecera__itemCabecera" onMouseEnter={empujarBloque} onMouseLeave={onMouseEnPagina} style={{minHeight: estilos[index].minHeight}}>
                  <button 
                    className="itemCabecera__titulo" 
                    onMouseLeave={empujarBloque} 
                    onMouseEnter={() => handleMouseEnter(index, servicio.titulo)}
                    onClick={() => cambiarEstilo(index)}
                  >
                    {servicio.titulo}
                  </button>
                  <div className="itemCabecera__parrafo" onMouseEnter={() => onMouseEnter(`Tirar`)}
                    style={{ display: estilos[index].display }}>
                    {servicio.parrafo}
                  </div>
                </li>
              ))
            ) : (
              <p>Sin servicios que ofrecer</p>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
