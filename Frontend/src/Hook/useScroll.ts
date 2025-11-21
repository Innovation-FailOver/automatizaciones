import { useState } from "react";

export const useScroll = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleScroll = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        // Cerrar menú móvil si está abierto
        setIsOpen(false);
    };

    return { isOpen, setIsOpen, handleScroll };
}