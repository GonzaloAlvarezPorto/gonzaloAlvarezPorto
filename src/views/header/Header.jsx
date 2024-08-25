import React, { useContext, useState } from 'react'
import { Menu } from './Menu'
import { CartContext } from '../../context/CartContext'

export const Header = () => {

    const {mensaje, onMouseEnter, onMouseLeave, onMouseEnterEncabezado, onMouseEnPagina } = useContext(CartContext)

    return (
        <header>
            <div className="encabezado" onMouseEnter={onMouseEnterEncabezado} onMouseLeave={onMouseEnPagina}>
                <a className='encabezado__logo' href="#main">
                    <img className='logo__imagen' src='/media/img/minimalista.png' onMouseEnter={() => onMouseEnter('Usar inicio')}
                        onMouseLeave={onMouseEnterEncabezado}/>
                </a>
                <div className='encabezado__mensaje'>
                    {mensaje}
                </div>
                <Menu/>
            </div>
        </header>
    )
}
