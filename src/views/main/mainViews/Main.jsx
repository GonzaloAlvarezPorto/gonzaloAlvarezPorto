import React, { useEffect, useState } from 'react'

const frasesBienvenida = [
    "¡Bienvenido a bordo!",
    "¡Hola y bienvenido!",
    "¡Te doy la bienvenida!",
    "¡Qué bueno verte aquí!",
    "¡Hola! Encantado de tenerte aquí.",
    "¡Bienvenido! Estoy feliz de verte.",
    "¡Saludos y bienvenido!"
];

const obtenerFraseAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * frasesBienvenida.length);
    return frasesBienvenida[indiceAleatorio];
};

export const Main = () => {
    const [mensaje, setMensaje] = useState(obtenerFraseAleatoria());

    useEffect(() => {
        const mensajeTimer = setTimeout(() => {
            setMensaje("Seguí bajando para conocerme.");
        }, 1500);

        const preparados = setTimeout(() => {
            setMensaje("Preparados...");
        }, 3000);

        const listos = setTimeout(() => {
            setMensaje("..listos...");
        }, 3700);

        const ya = setTimeout(() => {
            setMensaje("¡YA!");
        }, 4400);

        const perfilTimer = setTimeout(() => {
            // Verifica si el usuario no ha hecho scroll hacia abajo
            if (window.scrollY === 0) {
                window.location.href = "#perfil"; // Desplazarse a la sección "Perfil"
            }
            setMensaje('');
        }, 5000);

        return () => {
            clearTimeout(preparados);
            clearTimeout(listos);
            clearTimeout(ya);
            clearTimeout(mensajeTimer);
            clearTimeout(perfilTimer);
        };
    }, []);


    return (
        <main>
            <div className="principal">
                <div className="principal__cuerpo">
                    <div className="cuerpo__logo">
                        <img className="logo__imagen" src="./media/img/gonzaloAlvarezPorto.png" alt="gonzaloAlvarezPorto" title="gonzaloAlvarezPorto" />
                        <p className="logo__texto">
                            {mensaje}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
