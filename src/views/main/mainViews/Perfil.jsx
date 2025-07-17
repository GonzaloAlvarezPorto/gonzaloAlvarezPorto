import React from 'react'

export const Perfil = () => {
    return (
        <div className="cuerpo__texto">
            <p className="infoPersonal__sobreMi">
                Sobre mí:
            </p>
            <div className='texto__infoPersonal'>
                <div className='infoPersonal__nombre sinPaddingSuperior'>
                    <p className='nombre__pregunta'>Nombre:</p>
                    <p className='nombre__respuesta'>Gonzalo Alvarez Porto</p>
                </div>
                <div className='infoPersonal__titulo'>
                    <p className='nombre__pregunta'>Título:</p>
                    <p className='nombre__respuesta'>Técnico Superior en Desarrollo de Aplicaciones Web</p>
                </div>
                <div className='infoPersonal__origen sinPaddingInferior'>
                    <p className='nombre__pregunta'>Procedencia:</p>
                    <p className='nombre__respuesta'>Avellaneda, Buenos Aires, Argentina</p>
                </div>
            </div>
            <div className='texto__infoPersonal sinMarginInferior'>
                <p className="infoPersonal__parrafo sinPaddingSuperior">
                    Con más de 10 años de experiencia en administración, especialmente en ventas y logística,
                    me especialicé en diseñar soluciones que agilizan y ordenan procesos, facilitando la gestión
                    diaria sin depender de sistemas complejos. Mi enfoque siempre estuvo en hacer más con menos,
                    simplificando y mejorando la eficiencia.
                </p>
                <p className="  infoPersonal__parrafo">
                    Al mismo tiempo, amplié mi camino profesional hacia el desarrollo web,
                    aprendiendo tecnologías modernas como React, Next.js y Sass, y trabajando con herramientas como
                    Firebase y Google Sheets. Esta combinación me permite crear soluciones digitales prácticas y
                    adaptadas a las necesidades reales de las empresas y emprendedores.
                </p>
                <p className="infoPersonal__parrafo sinBordeInferior sinPaddingInferior">
                    Me apasiona construir herramientas que simplifiquen la gestión,
                    mejoren la comunicación y ayuden a los negocios a crecer de manera ágil y eficiente.
                    Creo que la tecnología debe ser una aliada accesible que potencie el trabajo de las personas,
                    y eso es lo que busco lograr con cada proyecto.
                </p>
            </div>
        </div>
    )
}
