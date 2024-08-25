import React, { useContext, useState } from 'react';
import educacion from '../../../data/educacion.json';
import { CartContext } from '../../../context/CartContext';

export const Educacion = () => {

    const formacion = educacion.formacion || [];

    const herramientas = educacion.herramientasDeMicrosoftOffice || [];

    const idiomas = educacion.idiomas || []

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

    const { mensaje, onMouseEnter, onMouseEnterCoderHouse, onMouseEnPagina } = useContext(CartContext);

    return (
        <>
            <div className="cuerpo__formacionProfesional">
                <div className='formacionProfesional__contenedor'>
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
                                    <div className='formacionProfesional__educacion'>
                                        <div className='educacion__temas'>
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
                                                <div className='temas__contenedor' onMouseEnter={onMouseEnterCoderHouse} onMouseLeave={onMouseEnPagina}>
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
                <div className="formacionProfesional__contenedor">
                    <p className='formacionProfesional__encabezado'>
                        Habilidades:
                    </p>
                    <div className='formacionProfesional__habilidades'>
                        {herramientas.map((herramienta, index) => (
                            <div className='habilidades__item' key={index}>
                                {herramienta.habilidades.map((habilidad, idx) => (
                                    <div key={idx} className="item__contenedor">
                                        <p className='item__titulo'>{habilidad.nombre}</p>
                                        <img className='item__logo' src={habilidad.logo} alt={habilidad.nombre} />
                                        <p className='item__descripcion'>{habilidad.descripcion}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="formacionProfesional__contenedor">
                    <p className='formacionProfesional__encabezado'>
                        Idiomas:
                    </p>
                    <div className='formacionProfesional__habilidades'>
                        {idiomas.map((idioma, index) => (
                            <div className='habilidades__item' key={index}>
                                {idiomas.map((idioma, idx) => (
                                    <div key={idx} className="item__contenedor">
                                        <p className='item__titulo'>{idioma.idioma}</p>
                                        <div className='contenedor__nivel'>
                                            <p className='item__nivel'>Nivel Oral: </p>
                                            <div className='contenedor__item__nivelAvanzado'>
                                                <div className='item__nivelAvanzado'></div>
                                            </div>
                                            <p>{idioma.nivelOral}</p>
                                        </div>
                                        <div className='contenedor__nivel '>
                                            <p className='item__nivel'>Nivel Oral:</p>
                                            <div className='contenedor__item__nivelAvanzado'>
                                                <div className='item__nivelAvanzado'></div>
                                            </div>
                                                <p>{idioma.nivelEscrito}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
};

export default Educacion;