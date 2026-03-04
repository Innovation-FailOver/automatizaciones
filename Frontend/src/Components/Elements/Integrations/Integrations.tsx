import { useInView } from "../../../Hook/useInView";
import List from "../../UI/List/List";

export default function Integrations() {
    const { ref, inView } = useInView();

    return (
        <section className="py-20 bg-gray-50" id="integraciones" ref={ref}>
            <div className="container mx-auto px-4 grid gap-12 items-center">
                <div className={`transition-all duration-700 ${inView ? "animate-slide-left" : "will-animate"}`}>
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
    );
}