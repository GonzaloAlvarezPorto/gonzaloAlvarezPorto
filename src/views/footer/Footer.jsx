import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

export const Footer = () => {

    const { mensaje, onMouseEnter, onMouseLeave } = useContext(CartContext);


    return (
        <footer>
            <div className="pieDePagina">
                <div className="pieDePagina__redes">
                    <div className="redes__contenedores">
                        <a className="contenedores__enlace" href="https://www.facebook.com/gonzalop.jung" target="_blank" title="fb">
                            <img className="enlace__imagen facebook" onMouseEnter={() => onMouseEnter('Hablar con Gonzalo por')} onMouseLeave={onMouseLeave} src="./media/img/facebook.png" alt="fb" title="Facebook" />
                        </a>
                    </div>
                    <div className="redes__contenedores">
                        <a className="contenedores__enlace" href="https://www.instagram.com/alvarezportogonzalo/" target="_blank" title="ig">
                            <img className="enlace__imagen instagram" src="./media/img/instagram.png" alt="ig" title="Instagram" />
                        </a>
                    </div>
                    <div className="redes__contenedores">
                        <a className="contenedores__enlace" href="https://www.linkedin.com/in/gonzalo-alvarez-porto-680611b3/"
                            target="_blank" title="lnk">
                            <img className="enlace__imagen linkedin" src="./media/img/linkedin.png" alt="lnk" title="Linkedin" />
                        </a>
                    </div>
                    <div className="redes__contenedores">
                        <a className="contenedores__enlace" href="https://wa.me/5491135880974" target="_blank" title="wp">
                            <img className="enlace__imagen whatsapp" src="./media/img/whatsapp.png" alt="wp" title="Whatsapp" />
                        </a>
                    </div>
                    <div className="redes__contenedores">
                        <a className="contenedores__enlace" href="mailto:gonzaalvarezporto@gmail.com" target="_blank"
                            title="gmail">
                            <img className="enlace__imagen gmail" src="./media/img/gmail.png" alt="gmail" title="G-Mail" />
                        </a>
                    </div>
                </div>
                <p className="pieDePagina__derechos">
                    Copyright © 2024. Todos los derechos reservados
                </p>
            </div>
        </footer>
    )
}
