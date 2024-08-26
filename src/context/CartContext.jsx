import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [mensaje, setMensaje] = useState('');
    
    const onMouseEnter = (nuevoMensaje) => {
        setMensaje(nuevoMensaje);
    };

    const onMouseLeave = () => {
        setMensaje('');
    };

    const onMouseEnterEncabezado = () => {
        setMensaje('Mover');
    }

    const onMouseEnterCoderHouse = () => {
        setMensaje('Desplegar');
    }

    const onMouseEnPagina = () => {
        setMensaje('Ir');
    }

    const onMouseEnFooter = () => {
        setMensaje('Hablar')
    }

    const empujarBloque = () => {
        setMensaje('Empujar')
    }

    return (
        <CartContext.Provider value={{ mensaje, empujarBloque, onMouseEnFooter, onMouseEnter, onMouseLeave, onMouseEnterEncabezado, onMouseEnterCoderHouse, onMouseEnPagina}}>
            {children}
        </CartContext.Provider>
    )
}