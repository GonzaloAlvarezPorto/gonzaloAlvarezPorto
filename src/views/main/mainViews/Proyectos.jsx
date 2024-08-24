import React from 'react'

export const Proyectos = () => {
  return (
    <main>
      <div className="principal">
        <div className="principal__proyectos">
          <div className="proyectos__general">
            <div className="proyectos__contenedor">
              <div className="contenedor__tituloProyecto">
                Página web estática de Vinoteca Roberto.
              </div>
              <div className="contenedor__descripcionProyecto">
                Página de prueba. Esta página fue desarrollada como proyecto final de carrera.
              </div>
              <div className="contenedor__imagenesProyecto">
                <div className="contenedor__logoDeCadaProyecto">
                  <a className="imagenesProyecto__logo" href="https://gonzaloalvarezporto.github.io/vr_vinos/"
                    target="_blank" title="vrvinos">
                    <img className="imagenesProyecto__logoImagen" src="/media/img/logo2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="proyectos__contenedor">
              <div className="contenedor__tituloProyecto">
                Página web estática de Pizzería Don Rémolo.
              </div>
              <div className="contenedor__descripcionProyecto">
                Página de prueba. Esta página fue desarrollada como parte de una práctica de ID for Ideas.
              </div>
              <div className="contenedor__imagenesProyecto">
                <div className="contenedor__logoDeCadaProyecto">
                  <a className="imagenesProyecto__logo"
                    href="https://gonzaloalvarezporto.github.io/pizzeriaDonRemolo/" target="_blank"
                    title="donremolo">
                    <img className="imagenesProyecto__logoImagen" src="/media/img/logo2donremolo.png"
                      alt="donremolo" title="donremolo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="proyectos__contenedor">
              <div className="contenedor__tituloProyecto">
                Proyecto de página web + eCommerce de Almacén Paykuna
              </div>
              <div className="contenedor__descripcionProyecto">
                Página en desarrollo. Esta página forma parte de un proyecto de fin de curso de JavaScript.
              </div>
              <div className="contenedor__imagenesProyecto">
                <div className="contenedor__logoDeCadaProyecto">
                  <a className="imagenesProyecto__logo"
                    href="https://gonzaloalvarezporto.github.io/paykunaTienda/" target="_blank"
                    title="paykuna">
                    <img className="imagenesProyecto__logoImagen" src="/media/img/paykuna.png"
                      alt="paykuna" title="paykuna" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
