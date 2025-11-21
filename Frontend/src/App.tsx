import Button from "./Components/UI/Button/Button";
import Navbar from "./Components/Layout/Navbar/Navbar";
import List from "./Components/UI/List/List";
import OrbitAnimation from "./Components/Animations/Orbit";
import { useScroll } from "./Hook/useScroll";
import { useContact } from "./Hook/useContact";

function App() {
    const { handleScroll } = useScroll();
    const { sendMessage, loading, success, error, name, setName, email, setEmail, message, setMessage } = useContact();

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* información general */}
                <section className="py-20" id="inicio">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent tracking-tight">
                            Construye sistemas que escalan y ahorran tiempo
                        </h2>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Impulsa la productividad de tu empresa mediante la automatización inteligente de procesos, optimizando recursos y liberando tiempo para la innovación.
                        </p>
                        <p className="text-gray-900 font-semibold italic mb-8 max-w-xl mx-auto">
                            "Fallar en innovar, que ganar en lo obsoleto"
                        </p>
                        <div className="space-x-4">
                            <Button onClick={() => handleScroll("#contacto")}>Contactar</Button>
                            <Button style={true} onClick={() => handleScroll("#planes")}>Ver Planes</Button>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50" id="integraciones">
                    <div className="container mx-auto px-4 grid gap-12 items-center grid-cols-1 md:grid-cols-2">
                        {/* Lado izquierdo - Lista */}
                        <div className="order-1 md:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Integración perfecta con tus herramientas
                            </h2>
                            <List />
                        </div>

                        {/* Lado derecho - Imagen/Ilustración */}
                        <div className="hidden md:flex justify-center order-1 md:order-2">
                            <OrbitAnimation />
                        </div>
                    </div>
                </section>

                {/* El impacto de la automatización */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 relative overflow-hidden">
                    {/* Fondo sutil extra con blur */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#cce5ff,_transparent)] opacity-30 blur-3xl pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#d4f5e9,_transparent)] opacity-30 blur-3xl pointer-events-none"></div>

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-900">
                            El impacto de la automatización
                        </h2>
                        {/* Hay estudios que indican que en promedio se trabaja 3 horas al día en un trabajo promedio,
                        siendo semanalmente 15 horas productivas, y la automatización trabaja 168 horas productivas a la 
                        semana*/}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-8 rounded-xl hover:shadow-2xl transition flex flex-col items-center justify-center">
                                <span className="text-5xl font-bold mb-4">⏰ 90%</span>
                                <p className="text-gray-700 text-center text-lg">
                                    Reducción de tiempo en procesos
                                </p>
                            </div>
                            {/* Tomando en cuenta que el salario mínimo es de 3973, y solo en el primer mes estarías
                            ahorrando 75% porque la automatización mas barata cuesta hasta 1000 la primera automatización
                            y 100 mensualemente sería hasta incluso un 97.5% de ahorro */}
                            <div className="bg-white p-8 rounded-xl hover:shadow-2xl transition flex flex-col items-center justify-center">
                                <span className="text-5xl font-bold mb-4">💰 75%</span>
                                <p className="text-gray-700 text-center text-lg">
                                    Ahorro maximo en salarios de empleados
                                </p>
                            </div>
                            {/* Este aumento se justifica porque en promedio un trabajador trabaja 40 horas a
                            la semana, y una automatización trabaja 168 horas a la semana entonces 168/40 = 4.2 , redondeado a 4 */}
                            <div className="bg-white p-8 rounded-xl hover:shadow-2xl transition flex flex-col items-center justify-center">
                                <span className="text-5xl font-bold mb-4">📈 4x</span> 
                                <p className="text-gray-700 text-center text-lg">
                                    Aumento en productividad
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl hover:shadow-2xl transition flex flex-col items-center justify-center">
                                <span className="text-5xl font-bold mb-4">✨ 100%</span>
                                <p className="text-gray-700 text-center text-lg">
                                    Enfoque en tareas estratégicas
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Misión y Visión */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Nuestra esencia
                        </h2>
                        <p className="text-gray-600 mb-12">
                            Los valores que guían nuestro compromiso contigo
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Misión */}
                            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg shadow-blue-100 transition duration-200 flex flex-col items-start">
                                <h3 className="text-3xl font-bold mb-2">Misión</h3>
                                <p className="text-gray-700">
                                    Impulsar la productividad de las empresas mediante la automatización inteligente de procesos, optimizando recursos y liberando tiempo para la innovación.
                                </p>
                            </div>

                            {/* Visión */}
                            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg shadow-blue-100 transition duration-200 flex flex-col items-start">
                                <h3 className="text-3xl font-bold mb-2">Visión</h3>
                                <p className="text-gray-700">
                                    Convertirnos en referentes en la integración de herramientas innovadoras, transformando la manera en que las empresas trabajan y adoptan metodologías del futuro.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="planes" className="plans-section py-28 bg-gray-50">
    <div className="plans-container max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Planes que se ajustan a tu negocio
        </h2>
        <p className="section-subtitle text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Elige el plan que más se adapte a las necesidades de tu empresa ó contáctanos para asesorarte.
        </p>

        {/* Grid de planes */}
        <div className="plans-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-10">
            
            {/* Plan 1 */}
            <div className="plan-card relative bg-white border border-gray-200 rounded-3xl p-12 transition-all duration-400 overflow-hidden hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl shadow-blue-100">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 transition-transform duration-500 origin-left hover:scale-x-100"></div>
                
                <div className="plan-header flex items-center gap-4 mb-6">
                    <span className="plan-number px-5 py-1.5 bg-indigo-50 text-blue-600 text-sm font-bold rounded-xl">
                        Plan A
                    </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Impulsador
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    Ideal para pequeños emprendedores con alta demanda y poco abastecimiento
                </p>

                {/* Precios */}
                <div className="pricing mt-8 mb-6 text-center">
                    <p className="text-gray-900 font-bold text-4xl">$1000 - $4000</p>
                    <p className="text-gray-500 text-sm mt-1">Implementación</p>

                    <p className="text-gray-900 font-bold text-2xl mt-4">$100 - $400</p>
                    <p className="text-gray-500 text-sm mt-1">Despliegue y mantenimiento</p>
                </div>

                <div className="plan-features mt-8 flex flex-col gap-3">
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Análisis de procesos repetitivos
                    </div>
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Recomendaciones
                    </div>
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Código fuente abierto al cliente
                    </div>
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Optimización continua
                    </div>
                </div>
            </div>

            {/* Plan 2 */}
            <div className="plan-card relative bg-white border border-gray-200 rounded-3xl p-12 transition-all duration-400 overflow-hidden hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl shadow-blue-100">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 transition-transform duration-500 origin-left hover:scale-x-100"></div>

                <div className="plan-header flex items-center gap-4 mb-6">
                    <span className="plan-number px-5 py-1.5 bg-indigo-50 text-blue-600 text-sm font-bold rounded-xl">
                        Plan B
                    </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Startup
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    Automatizaciones preconfiguradas para optimizar tus procesos desde el primer día.
                </p>

                {/* Precios */}
                <div className="pricing mt-8 mb-6 text-center">
                    <p className="text-gray-900 font-bold text-4xl">$1250 - $5000</p>
                    <p className="text-gray-500 text-sm mt-1">Implementación</p>

                    <p className="text-gray-900 font-bold text-2xl mt-4">$125 - $500</p>
                    <p className="text-gray-500 text-sm mt-1">Despliegue y mantenimiento</p>
                </div>

                <div className="plan-features mt-8 flex flex-col gap-3">
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Implementación más especializada
                    </div>
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Proyectos más complejos
                    </div>
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Configuración guiada
                    </div>
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Pequeñas Actualizaciones incluidas
                    </div>
                </div>
            </div>

            {/* Plan 3 */}
            <div className="plan-card relative bg-white border border-gray-200 rounded-3xl p-12 transition-all duration-400 overflow-hidden hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl shadow-blue-100">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 transition-transform duration-500 origin-left hover:scale-x-100"></div>

                <div className="plan-header flex items-center gap-4 mb-6">
                    <span className="plan-number px-5 py-1.5 bg-indigo-50 text-blue-600 text-sm font-bold rounded-xl">
                        Plan C
                    </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Patentados
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    Automatizaciones preconfiguradas para optimizar tus procesos desde el primer día.
                </p>

                {/* Precios */}
                <div className="pricing mt-8 mb-6 text-center">
                    <p className="text-gray-900 font-bold text-4xl">$1750 - $7000</p>
                    <p className="text-gray-500 text-sm mt-1">Implementación</p>

                    <p className="text-gray-900 font-bold text-2xl mt-4">$175 - $700</p>
                    <p className="text-gray-500 text-sm mt-1">Despliegue y mantenimiento</p>
                </div>

                <div className="plan-features mt-8 flex flex-col gap-3">
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Implementación a tus sistemas (si lo requieres)
                    </div>
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Sistema personalizado
                    </div>
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Soporte avanzado
                    </div>
                    <div className="plan-feature-item flex items-center gap-3 text-gray-600 text-sm">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 font-bold">✓</span>
                        Ambientes productivos más avanzados
                    </div>
                </div>
            </div>

        </div>

        {/* Support badge */}
        <div className="support-badge bg-gradient-to-r from-green-50 to-green-100 border border-green-300 rounded-2xl p-6 text-center mt-12">
            <p className="text-green-800 font-semibold text-lg">
                ✓ Todos los planes incluyen soporte técnico completo sin costo adicional
            </p>
            <p className="section-subtitle text-xs text-green-900 text-center max-w-1xl mx-auto pt-5">
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
                &copy; 2025 BAIR Tech. Todos los derechos reservados.
            </footer>
        </>
    );
}

export default App;
