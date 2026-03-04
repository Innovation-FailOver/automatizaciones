export default function Impact() {
    const data = [
        {
            head: "90%",
            body: "Reducción de tiempo"
            /*
            Hay estudios que indican que en promedio se trabaja 3 horas al día en un trabajo promedio,
            siendo semanalmente 15 horas productivas, y la automatización trabaja 168 horas productivas a la 
            semana 
            */
        },
        {
            head: "75%",
            body: "Ahorro salarial"
            /*
            Tomando en cuenta que el salario mínimo es de 3973, y solo en el primer mes estarías
            ahorrando 75% porque la automatización mas barata cuesta hasta 1000 la primera automatización
            y 100 mensualemente sería hasta incluso un 97.5% de ahorro
             */
        },
        {
            head: "4x",
            body: "Productividad"
            /*
            Este aumento se justifica porque en promedio un trabajador trabaja 40 horas a
            la semana, y una automatización trabaja 168 horas a la semana entonces 168/40 = 4.2 , redondeado a 4
            */
        },
        {
            head: "100%",
            body: "Enfoque total"
        }
    ]

    return (
        <section className=" bg-gray-900 py-10 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((option, index) => (
                        <div key={index} className="bg-gray-900 p-8 rounded-xl flex flex-col items-center justify-center">
                            <span className="text-5xl font-bold mb-4 text-white">{option.head}</span>
                            <p className="text-gray-500 text-center text-lg">
                                {option.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
