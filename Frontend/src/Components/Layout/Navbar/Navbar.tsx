import Button from "../../UI/Button/Button";
import { Options } from "./Options/Options";
import { useScroll } from "../../../Hook/useScroll";

export default function Navbar() {
    const options = Options;
    const { isOpen, setIsOpen, handleScroll } = useScroll();

    return (
        <>
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <h1 className="text-gray-900 text-3xl font-bold">BAIR<span className="font-light">Tech</span></h1>

                    {/* Desktop links */}
                    <div className="hidden md:flex space-x-6">
                        {options.map((option, index) => (
                            <a
                                key={index}
                                // href={option.link}
                                onClick={() => handleScroll(option.link)}
                                className="text-gray-600 hover:scale-110 transition duration-250 cursor-pointer"
                            >
                                {option.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop buttons */}
                    <div className="hidden md:flex space-x-4">
                        <Button style={true} onClick={() => handleScroll("#planes")}>Ver Planes</Button>
                        <Button onClick={() => handleScroll("#contacto")}>Contactar</Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-900 focus:outline-none cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-8 h-8 hover:scale-105 transition duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-2 bg-white/70 backdrop-blur-md">
                        {options.map((option, index) => (
                            <a
                                key={index}
                                // href={option.link}
                                onClick={() => handleScroll(option.link)}
                                className="block text-gray-600"
                            >
                                {option.label}
                            </a>
                        ))}
                        <div className="flex space-x-2 pt-2">
                            <Button style={true} onClick={() => handleScroll("#planes")}>Ver Planes</Button>
                            <Button onClick={() => handleScroll("#contacto")}>Contactar</Button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
