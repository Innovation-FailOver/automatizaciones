import { useContact } from "../../../Hook/useContact";
import Button from "../../UI/Button/Button";

export default function ContactUs() {
    const { sendMessage, loading, success, error, name, setName, email, setEmail, message, setMessage } = useContact();

    return (
        <section id="contacto" className="py-20">
            <div className="relative rounded-3xl p-12 text-center overflow-hidden">
                <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    ¿Listo para transformar tu empresa?
                </h2>
                <p className="mb-8 text-lg sm:text-xl opacity-90">
                    ¡¡Contactanos!!, con mucho gusto te atenderemos y ayudaremos a encontrar la mejor solución para ti.
                </p>
                {/* Formulario */}
                <form
                    onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(name, email, message);
                    }}
                    className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
                >
                    {/* Nombre */}
                    <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">Nombre</label>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        required
                    />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">Correo electrónico</label>
                    <input
                        type="email"
                        placeholder="tucorreo@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        required
                    />
                    </div>
                    {/* Mensaje */}
                    <div className="flex flex-col md:col-span-2">
                    <label className="text-sm font-semibold mb-1">Mensaje</label>
                    <textarea
                        rows={5}
                        placeholder="Cuéntanos qué necesitas..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        required
                    ></textarea>
                    </div>
                    {/* Botón */}
                    <div className="flex flex-col md:col-span-2 md:flex-row justify-center gap-4 mt-4">
                    <Button form={true} type="submit" disabled={loading}>
                        {loading ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                    </div>
                    {/* Mensajes de estado */}
                    {success && (
                    <p className="text-green-600 md:col-span-2 text-center">
                        ¡Mensaje enviado con éxito!
                    </p>
                    )}
                    {error && (
                    <p className="text-red-600 md:col-span-2 text-center">
                        ❌ {error}
                    </p>
                    )}
                </form>
                </div>
            </div>
        </section>
    )
}
