import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const Menu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation(); // Hook para obtener la ubicación actual

    // Funciones para abrir y cerrar el nav
    const handleOpen = () => setIsVisible(true);
    const handleClose = () => setIsVisible(false);

    const { mensaje, onMouseEnter, onMouseLeave, onMouseEnterEncabezado } = useContext(CartContext);

    // Manejar clics fuera del menú para cerrarlo
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Verifica si el clic fue fuera del menú y su botón de cierre
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        // Añadir el listener para clics en el documento
        document.addEventListener('mousedown', handleClickOutside);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Manejar cambios en la ubicación para cerrar el menú
    useEffect(() => {
        setIsVisible(false);
    }, [location]);

    return (
        <>
            <button onClick={handleOpen} className="encabezado__abrir">
                <p className="abrir__imagen">
                    PRESS START
                </p>
            </button>
            <div
                id="nav"
                className={`encabezado__menu ${isVisible ? 'visible' : ''}`}
                ref={menuRef}
            >
                <ul className="menu__listado">
                    <button id="cerrar" className="listado__cerrar" onClick={handleClose}>
                        <p className="cerrar__imagen">
                            GAME OVER
                        </p>
                    </button>
                    <li className="listado__items" onMouseEnter={() => onMouseEnter('Ir a mi perfil')} onMouseLeave={onMouseEnterEncabezado}>
                        <a href="#perfil" className="items__enlace" to="/index">
                            PERFIL
                        </a>
                    </li>
                    <li className="listado__items">
                        <a href="#educacion" className="items__enlace" to="/educacion" title="educacion" onMouseEnter={() => onMouseEnter('Ir a mi educación')} onMouseLeave={onMouseEnterEncabezado}>
                            EDUCACIÓN
                        </a>
                    </li>
                    <li className="listado__items">
                        <a href="#servicios" className="items__enlace" to="/servicios" title="servicios" onMouseEnter={() => onMouseEnter('Ir a servicios ofrecidos')} onMouseLeave={onMouseEnterEncabezado}>
                            SERVICIOS
                        </a>
                    </li>
                    <li className="listado__items">
                        <a href="#proyectos" className="items__enlace" to="/proyectos" title="proyectos" onMouseEnter={() => onMouseEnter('Ir a mis proyectos')} onMouseLeave={onMouseEnterEncabezado}>
                            PROYECTOS
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};
