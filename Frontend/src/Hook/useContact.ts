import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useContact = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = async (name: string, email: string, message: string) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID as string,
                import.meta.env.VITE_TEMPLATE_ID as string,
                {
                    name,
                    email,
                    message
                },
                import.meta.env.VITE_PUBLIC_KEY as string
            );

            setSuccess(true);
            // Limpiar formulario
            setName("");
            setEmail("");
            setMessage("");
            // Recargar la página después de 5 segundos
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } catch (err: any) {
            setError(err.text || "Ocurrió un error al enviar el mensaje.");
        } finally {
            setLoading(false);
        }
    };

    return { 
        sendMessage, 
        loading, 
        success, 
        error,
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage
    };
};
