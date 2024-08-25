import React, { useContext } from 'react'
import { Main } from './mainViews/Main'
import { Educacion } from './mainViews/Educacion'
import { Servicios } from './mainViews/Servicios'
import { Proyectos } from './mainViews/Proyectos'
import { Header } from '../header/Header'
import { Perfil } from './mainViews/Perfil'
import { CartContext } from '../../context/CartContext'

export const Index = () => {

    const { onMouseEnPagina } = useContext(CartContext);

    return (
        <main className='principal' onMouseEnter={onMouseEnPagina}>
                <div className='principal__cuerpo'>
                    <section id="main">
                        <Main />
                    </section>
                    <Header />
                    <section id="perfil">
                        <Perfil />
                    </section>
                    <section id='educacion'>
                        <Educacion />
                    </section>
                    <section id='servicios'>
                        <Servicios />
                    </section>
                    <section id='proyectos'>
                        <Proyectos />
                    </section>
                </div>
        </main>
    )
}