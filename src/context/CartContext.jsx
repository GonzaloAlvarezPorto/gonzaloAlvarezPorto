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
        setMensaje('Ir a');
    }

    const onMouseEnterCoderHouse = () => {
        setMensaje('Abrir');
    }

    return (
        <CartContext.Provider value={{ mensaje, onMouseEnter, onMouseLeave, onMouseEnterEncabezado, onMouseEnterCoderHouse}}>
            {children}
        </CartContext.Provider>
    )
}