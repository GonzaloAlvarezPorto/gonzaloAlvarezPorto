import React, { useContext, useState } from 'react'
import { Menu } from './Menu'
import { CartContext } from '../../context/CartContext'

export const Header = () => {

    const {mensaje, onMouseEnter, onMouseLeave, onMouseEnterEncabezado } = useContext(CartContext)

    return (
        <header>
            <div className="encabezado" onMouseEnter={onMouseEnterEncabezado} onMouseLeave={onMouseLeave}>
                <a className='encabezado__logo' href="#home">
                    <img className='logo__imagen' src='/media/img/minimalista.png' onMouseEnter={() => onMouseEnter('Ir al inicio')}
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
