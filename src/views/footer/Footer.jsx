import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import data from '../../data/redes.json'

export const Footer = () => {

    const { onMouseEnter, onMouseLeave, onMouseEnFooter } = useContext(CartContext);

    const redes = data;

    return (
        <footer>
            <div className="pieDePagina" onMouseEnter={onMouseEnFooter}>
                <div className="pieDePagina__redes">
                    <div className="redes__contenedores">
                        {redes.length > 0 ? (
                            redes.map((red, index) => (
                                <a className="contenedores__enlace" href={red.enlaceRed} target="_blank" title={red.nombreRed}>
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
