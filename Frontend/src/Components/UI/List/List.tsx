import { CheckCircle } from "lucide-react";
import { Options } from "./Options/Options";

export default function List() {
    const options = Options;

    return (
        <>
        <ul className="space-y-4">
            {options.map((option, index) => (
                <li 
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 
                            bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                    {/* Ícono */}
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                            <CheckCircle className="text-green-600 w-6 h-6" />
                        </div>
                    </div>

                    {/* Contenido */}
                    <div>
                        <span className="block text-lg font-semibold text-gray-800">
                            {option.label}
                        </span>
                        <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                            {option.body}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
        </>
    )
}
