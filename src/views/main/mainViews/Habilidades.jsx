import React, { useContext, useState } from 'react';
import habilidades from '../../../data/habilidades.json';
import { CartContext } from '../../../context/CartContext';

export const Habilidades = () => {

    const formacion = habilidades.formacion || [];

    // Estado para almacenar el curso seleccionado
    const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

    const formacionOrdenada = formacion.sort((a, b) => {
        const fechaA = a.periodo.includes('Presente') ? new Date() : new Date(a.periodo.split('-')[1]);
        const fechaB = b.periodo.includes('Presente') ? new Date() : new Date(b.periodo.split('-')[1]);
        return fechaB - fechaA;
    });

    // Función para manejar la selección de curso
    const handleCursoClick = (curso) => {
        // Si se hace clic en el mismo curso, se deselecciona
        setCursoSeleccionado(curso === cursoSeleccionado ? null : curso);
    };

    const { mensaje, onMouseEnter, onMouseLeave, onMouseEnterCoderHouse } = useContext(CartContext);

    return (
        <main>
            <div className="principal__cuerpoHabilidades">
                <div className="cuerpoHabilidades__formacionProfesional">
                    <p className='formacionProfesional__encabezado'>
                        Formación Académica:
                    </p>
                    <div className='formacionProfesional__cursos'>
                        {formacionOrdenada.length > 0 ? (
                            formacionOrdenada.map((item, index) => (
                                <div key={index} className="formacionProfesional__item">
                                    <div className='formacionProfesional__institucionData'>
                                        <p className='institucion__nombre'>{item.institucion}<img className='institucion__nombreLogo' src={item.logo} alt={`${item.institucion} logo`} /></p>
                                        <p className='institucion__tipo'>{item.tipo}</p>
                                    </div>
                                    <div className='formacionProfesional__institucionPais'>
                                        <p className='institucion__ubicacion'>{item.ubicacion}<img className='institucion__ubicacionBandera' src={item.bandera} alt={`${item.ubicacion} bandera`} /></p>
                                        <p className='institucion__periodo'>{item.periodo}</p>
                                    </div>
                                    <div className='formacionProfesional__habilidades'>
                                        <div className='habilidades__temas'>
                                            {Array.isArray(item.temas) ? (
                                                <div className='temas__contenedor'>
                                                    <ul className='temas__titulos'>
                                                        {item.temas.map((tema, idx) => (
                                                            <li className='temas__titulo' key={idx}>
                                                                ➖ {tema}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                <div className='temas__contenedor' onMouseEnter={onMouseEnterCoderHouse} onMouseLeave={onMouseLeave}>
                                                    <div className='cursos__grupo'>
                                                        {cursoSeleccionado ? (
                                                            Object.entries(item.temas).map(([curso, temas], idx) => (
                                                                curso === cursoSeleccionado && (
                                                                    <div className='temas__grupo' key={idx}>
                                                                        <ul className='temas__herramientas'>
                                                                            {temas.map((tema, temaIdx) => (
                                                                                <li className='herramientas__nombre' key={temaIdx}>
                                                                                    <img className='herramientas__imagen' src={tema.imagen} alt={tema.nombre} />
                                                                                    {tema.nombre}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )
                                                            ))
                                                        ) : (
                                                            <p className='grupo__mensaje'>Elige una de las opciones</p>
                                                        )}
                                                    </div>
                                                    <div className='cursos__nombres'>
                                                        {Object.keys(item.temas).map((curso, idx) => (
                                                            <button
                                                                className={`curso__nombre ${cursoSeleccionado === curso ? 'active' : ''}`}
                                                                key={idx}
                                                                onClick={() => handleCursoClick(curso)}
                                                                onMouseEnter={() => onMouseEnter(`Abrir ${curso}`)}
                                                                onMouseLeave={onMouseEnterCoderHouse}
                                                            >
                                                                {curso}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hay datos disponibles.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Habilidades;