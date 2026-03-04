export default function Plans() {
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
    )
}
