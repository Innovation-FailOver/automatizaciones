import { Options } from "./Options/Options";

export default function List() {
    const options = Options;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {options.map((option, index) => (
                <div
                    key={index}
                    className="flex flex-col items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                    {/* Ícono */}
                    <div className="mb-4">
                        <option.icon className="w-8 h-8 text-indigo-600" />
                    </div>

                    {/* Contenido */}
                    <span className="text-lg font-bold text-gray-900 mb-2">
                        {option.label}
                    </span>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        {option.body}
                    </p>
                </div>
            ))}
        </div>
    );
}