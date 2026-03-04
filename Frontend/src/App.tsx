import Button from "./Components/UI/Button/Button";
import Navbar from "./Components/Layout/Navbar/Navbar";
import List from "./Components/UI/List/List";
import { useScroll } from "./Hook/useScroll";
import { useContact } from "./Hook/useContact";
import { Eye, MousePointerClick } from "lucide-react";

function App() {
    const { handleScroll } = useScroll();
    const { sendMessage, loading, success, error, name, setName, email, setEmail, message, setMessage } = useContact();
    const plans = [
    {
        id: "A",
        name: "Impulsador",
        description: "Ideal para pequeños emprendedores con alta demanda y poco abastecimiento.",
        implementacion: "Q1000 - Q4000",
        mantenimiento: "Q100 - Q400",
        features: [
            "Análisis de procesos repetitivos",
            "Recomendaciones",
            "Código fuente abierto al cliente",
            "Optimización continua",
        ],
        popular: false,
        cta: "Elegir Plan",
    },
    {
        id: "B",
        name: "Startup",
        description: "Automatizaciones preconfiguradas para optimizar tus procesos desde el primer día.",
        implementacion: "Q1250 - Q5000",
        mantenimiento: "Q125 - Q500",
        features: [
            "Implementación más especializada",
            "Proyectos más complejos",
            "Configuración guiada",
            "Pequeñas Actualizaciones incluidas",
        ],
        popular: true,
        cta: "Empezar ahora",
    },
    {
        id: "C",
        name: "Patentados",
        description: "Soluciones personalizadas con despliegue de infraestructura propia.",
        implementacion: "Q1750 - Q7000",
        mantenimiento: "Q175 - Q700",
        features: [
            "Implementación a tus sistemas",
            "Sistema personalizado",
            "Soporte avanzado",
            "Ambientes productivos más avanzados",
        ],
        popular: false,
        cta: "Contactar Ventas",
    },
];

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* información general */}
                <section className="py-20" id="inicio">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        
                        <div>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                                Construye sistemas que escalan y ahorran tiempo
                            </h2>
                            <p className="text-gray-500 mb-6 max-w-2xl">
                                Impulsa la productividad de tu empresa mediante la automatización inteligente de procesos, optimizando recursos y liberando tiempo para la innovación.
                            </p>
                            <blockquote className="border-l-4 border-primary pl-6 italic text-gray-500 text-lg mb-8 max-w-xl">
                                "Intenta innovar, que ser el mejor en lo que se irá"
                            </blockquote>
                            <div className="space-x-4">
                                <Button onClick={() => handleScroll("#contacto")}>
                                    Contactar
                                </Button>
                                <Button style={true} onClick={() => handleScroll("#planes")}>
                                    Ver Planes
                                </Button>
                            </div>
                        </div>
                        <div>
                            {/* Mapa de puntos */}
                            <img src="https://i.pinimg.com/736x/00/62/5d/00625d9d6dd8b6f1f94f941ff7875840.jpg" alt="hand" />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50" id="integraciones">
                    <div className="container mx-auto px-4 grid gap-12 items-center">
                        <div className="order-1 md:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Integración perfecta con tus herramientas
                            </h2>
                            <p className="text-gray-500 mb-6 max-w-2xl">
                                Soluciones diseñadas para potenciar tu flujo de trabajo actual sin fricciones ni complicaciones técnicas.
                            </p>
                            <List />
                        </div>
                    </div>
                </section>

                {/* El impacto de la automatización */}
                <section className=" bg-gray-900 py-10 relative overflow-hidden">
                    <div className="container mx-auto px-4 text-center relative z-10">
                        {/* Hay estudios que indican que en promedio se trabaja 3 horas al día en un trabajo promedio,
                        siendo semanalmente 15 horas productivas, y la automatización trabaja 168 horas productivas a la 
                        semana*/}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center justify-center">
                                <span className="text-5xl font-bold mb-4 text-white">90%</span>
                                <p className="text-gray-500 text-center text-lg">
                                    Reducción de tiempo
                                </p>
                            </div>
                            {/* Tomando en cuenta que el salario mínimo es de 3973, y solo en el primer mes estarías
                            ahorrando 75% porque la automatización mas barata cuesta hasta 1000 la primera automatización
                            y 100 mensualemente sería hasta incluso un 97.5% de ahorro */}
                            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center justify-center">
                                <span className="text-5xl font-bold mb-4 text-white">75%</span>
                                <p className="text-gray-500 text-center text-lg">
                                    Ahorro salarial
                                </p>
                            </div>
                            {/* Este aumento se justifica porque en promedio un trabajador trabaja 40 horas a
                            la semana, y una automatización trabaja 168 horas a la semana entonces 168/40 = 4.2 , redondeado a 4 */}
                            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center justify-center">
                                <span className="text-5xl font-bold mb-4 text-white">4x</span> 
                                <p className="text-gray-500 text-center text-lg">
                                    Productividad
                                </p>
                            </div>
                            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center justify-center">
                                <span className="text-5xl font-bold mb-4 text-white">100%</span>
                                <p className="text-gray-500 text-center text-lg">
                                    Enfoque total
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Misión y Visión */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-20 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Nuestra esencia
                        </h2>
                        <p className="text-gray-600 mb-12">
                            Los valores que guían nuestro compromiso contigo
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Misión */}
                            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 hover:shadow-lg shadow-gray-300 transition duration-200 flex flex-col items-start">
                                <div className="flex items-center gap-3 mb-3">
                                    <MousePointerClick className="w-7 h-7 text-gray-800" />
                                    <h3 className="text-xl font-bold text-gray-900">Nuestra Misión</h3>
                                </div>
                                <p className="text-gray-500 text-left">
                                    Impulsar la productividad de las empresas mediante la automatización inteligente de procesos, optimizando recursos y liberando tiempo para la innovación.
                                </p>
                            </div>
                            {/* Visión */}
                            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 hover:shadow-lg shadow-gray-300 transition duration-200 flex flex-col items-start">
                                <div className="flex items-center gap-3 mb-3">
                                    <Eye className="w-7 h-7 text-gray-800" />
                                    <h3 className="text-xl font-bold text-gray-900">Nuestra Visión</h3>
                                </div>
                                <p className="text-gray-500 text-left">
                                    Convertirnos en referentes en la integración de herramientas innovadoras, transformando la manera en que las empresas trabajan y adoptan metodologías del futuro.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="planes" className="py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Título */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
                    Planes que se ajustan a tu negocio
                </h2>
                <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
                    Elige el plan que más se adapte a las necesidades de tu empresa o contáctanos para asesorarte.
                </p>

                {/* Grid de planes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative rounded-3xl p-10 flex flex-col transition-all duration-300 hover:-translate-y-1
                                ${plan.popular
                                    ? "bg-gray-900 text-white shadow-2xl scale-105"
                                    : "bg-white border border-gray-200 text-gray-900 hover:border-gray-900 hover:shadow-xl shadow-gray-300"
                                }`}
                        >
                            {/* Badge Más Popular */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-white text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-widest">
                                        Más Popular
                                    </span>
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-6">
                                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.popular ? "text-gray-400" : "text-gray-400"}`}>
                                    Plan {plan.id}
                                </p>
                                <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
                                <p className={`text-sm leading-relaxed ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="flex flex-col gap-3 mb-10 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center
                                            ${plan.popular ? "bg-white/10 text-white" : "bg-green-50 text-green-600"}`}>
                                            ✓
                                        </span>
                                        <span className={plan.popular ? "text-gray-300" : "text-gray-600"}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Precio */}
                            <div className="mb-6">
                                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${plan.popular ? "text-gray-400" : "text-gray-400"}`}>
                                    Implementación desde
                                </p>
                                <p className="text-3xl font-bold">{plan.implementacion}</p>
                                <p className={`text-xs mt-1 ${plan.popular ? "text-gray-400" : "text-gray-400"}`}>
                                    Mantenimiento: {plan.mantenimiento} / mes
                                </p>
                            </div>

                            {/* CTA */}
                            <button
                                className={`w-full py-3 rounded-2xl font-semibold text-sm transition-all duration-200
                                    ${plan.popular
                                        ? "bg-white text-gray-900 hover:bg-gray-100"
                                        : "border-2 border-gray-200 text-gray-800 hover:border-blue-500 hover:text-blue-600"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Support badge */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-300 rounded-2xl p-6 text-center mt-12">
                    <p className="text-green-800 font-semibold text-lg">
                        ✓ Todos los planes incluyen soporte técnico completo sin costo adicional
                    </p>
                    <p className="text-xs text-green-900 text-center max-w-xl mx-auto pt-3">
                        Estos precios pueden subir del máximo según la complejidad del proyecto, y se irán sumando los planes.
                    </p>
                </div>

            </div>
        </section>

                {/* CTA con formulario de contacto */}
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
                                className="p-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
                                className="p-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
                                className="p-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
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


            </main>
            <footer className=" text-gray-900 text-center p-4">
                &copy; 2026 BAIR Tech. Todos los derechos reservados.
            </footer>
        </>
    );
}

export default App;
