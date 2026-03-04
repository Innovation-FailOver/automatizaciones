import Button from "../../UI/Button/Button";

type Props = {
    handleScroll: (id: string) => void;
}

export default function Home({ handleScroll } : Props) {
    return (
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
    )
}
