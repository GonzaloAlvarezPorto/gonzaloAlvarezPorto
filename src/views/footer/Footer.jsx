import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import data from '../../data/redes.json'

export const Footer = () => {

    const { onMouseEnter, onMouseLeave, onMouseEnFooter, onMouseEnPagina } = useContext(CartContext);

    const redes = data;

    return (
        <footer>
            <div className="pieDePagina">
                <div className="pieDePagina__redes" onMouseEnter={onMouseEnFooter} onMouseLeave={onMouseEnPagina}>
                    <div className="redes__contenedores">
                        {redes.length > 0 ? (
                            redes.map((red, index) => (
                                <a key={index} className="contenedores__enlace" href={red.enlaceRed} target="_blank" title={red.nombreRed}>
                                    <img className={`enlace__imagen ${red.nombreRed.toLocaleLowerCase()}`} onMouseEnter={() => onMouseEnter('Hablar con Gonzalo por ' + red.nombreRed)} onMouseLeave={onMouseEnFooter} src={red.imagenRed} alt={red.nombreRed} title={red.nombreRed} />
                                </a>
                            ))) : (
                            <p>No tengo redes</p>
                            )}
                    </div>
                </div>
                <p className="pieDePagina__derechos">
                    Copyright © 2024. Todos los derechos reservados
                </p>
            </div>
        </footer>
    )
}
