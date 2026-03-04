import Button from "../../UI/Button/Button";
import { Options } from "./Options/Options";
import { useScroll } from "../../../Hook/useScroll";

type Props = {
    scroll: ReturnType<typeof useScroll>;
}

export default function Navbar({ scroll } : Props) {
    const options = Options;
    const { isOpen, setIsOpen, handleScroll } = scroll;

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
                                className="text-gray-600 hover:text-indigo-600 hover:scale-110 transition duration-250 cursor-pointer"
                            >
                                {option.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Redes sociales */}
                        <div className="flex items-center gap-3 border-r border-gray-200 pr-4">
                            <a href="https://www.instagram.com/bair.tech/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                    <circle cx="12" cy="12" r="4"/>
                                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/bair-tech/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.07V24h-4v-8.6c0-2.05-.04-4.7-2.86-4.7-2.87 0-3.31 2.24-3.31 4.55V24h-4V8.5z"/>
                                </svg>
                            </a>
                        </div>
                        {/* Botones */}
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
