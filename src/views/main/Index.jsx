import React, { useContext } from 'react'
import { Main } from './mainViews/Main'
import { Habilidades } from './mainViews/Habilidades'
import { Servicios } from './mainViews/Servicios'
import { Proyectos } from './mainViews/Proyectos'
import { Header } from '../header/Header'
import { TextoPerfil } from './mainViews/TextoPerfil'

export const Index = () => {


    return (
        <main>
            <section id="home">
                <Main />
            </section>
            <Header />
            <section id="perfil">
                <TextoPerfil />
            </section>
            <section id='educacion'>
                <Habilidades />
            </section>
            <section id='servicios'>
                <Servicios />
            </section>
            <section id='proyectos'>
                <Proyectos />
            </section>
        </main>
    )
}