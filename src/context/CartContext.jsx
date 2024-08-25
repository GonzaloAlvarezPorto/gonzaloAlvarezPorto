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
        setMensaje('Usar');
    }

    const onMouseEnterCoderHouse = () => {
        setMensaje('Abrir');
    }

    const onMouseEnPagina = () => {
        setMensaje('Ir a');
    }

    const onMouseEnFooter = () => {
        setMensaje('Hablar con')
    }

    return (
        <CartContext.Provider value={{ mensaje, onMouseEnFooter, onMouseEnter, onMouseLeave, onMouseEnterEncabezado, onMouseEnterCoderHouse, onMouseEnPagina}}>
            {children}
        </CartContext.Provider>
    )
}