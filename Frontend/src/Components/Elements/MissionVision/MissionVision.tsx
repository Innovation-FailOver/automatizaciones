import { Eye, MousePointerClick } from "lucide-react";
import { useInView } from "../../../Hook/useInView";

export default function MissionVision() {
    const { ref, inView } = useInView();

    return (
        <section className="py-20 bg-white" ref={ref}>
            <div className="container mx-auto px-20 text-center">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 ${inView ? "animate-fade-up" : "will-animate"}`}>
                    Nuestra esencia
                </h2>
                <p className={`text-gray-600 mb-12 ${inView ? "animate-fade-up delay-100" : "will-animate"}`}>
                    Los valores que guían nuestro compromiso contigo
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={`bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-100 transition duration-200 flex flex-col items-start
                        ${inView ? "animate-slide-left delay-200" : "will-animate"}`}>
                        <div className="flex items-center gap-3 mb-3">
                            <MousePointerClick className="w-7 h-7 text-indigo-600" />
                            <h3 className="text-xl font-bold text-gray-900">Nuestra Misión</h3>
                        </div>
                        <p className="text-gray-500 text-left">
                            Impulsar la productividad de las empresas mediante la automatización inteligente de procesos, optimizando recursos y liberando tiempo para la innovación.
                        </p>
                    </div>
                    <div className={`bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-100 transition duration-200 flex flex-col items-start
                        ${inView ? "animate-slide-right delay-200" : "will-animate"}`}>
                        <div className="flex items-center gap-3 mb-3">
                            <Eye className="w-7 h-7 text-indigo-600" />
                            <h3 className="text-xl font-bold text-gray-900">Nuestra Visión</h3>
                        </div>
                        <p className="text-gray-500 text-left">
                            Convertirnos en referentes en la integración de herramientas innovadoras, transformando la manera en que las empresas trabajan y adoptan metodologías del futuro.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
