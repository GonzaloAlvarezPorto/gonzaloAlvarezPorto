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
                    Con más de 10 años de experiencia en el área administrativa, he trabajado intensamente en ventas y logística, desarrollando soluciones efectivas para agilizar y optimizar procesos. En mi rol más reciente, diseñé una solución personalizada que mejoró significativamente la gestión administrativa, acelerando procesos y organizando la información de manera eficiente, sin necesidad de un sistema de gestión especializado.
                </p>
                <p className="sinBordeInferior sinPaddingInferior infoPersonal__parrafo">
                    Paralelamente, he ampliado mis conocimientos en desarrollo web, lo que me ha permitido combinar mi experiencia en administración con habilidades técnicas avanzadas. Esta formación me ha dotado de una visión integral sobre cómo la tecnología puede transformar y enriquecer los procesos administrativos, ofreciendo soluciones digitales innovadoras que mejoran la eficiencia y adaptabilidad de las operaciones.
                </p>
            </div>
        </div>
    )
}
