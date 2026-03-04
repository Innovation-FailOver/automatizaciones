import { Globe } from "lucide-react";
import { Options } from "../../Layout/Navbar/Options/Options";

type Props = {
    handleScroll: (id: string) => void;
}

export default function Footer({ handleScroll } : Props) {
    const options = Options
    const year: number = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <span className="text-white font-bold text-lg tracking-wide">BAIRTECH</span>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Potenciando el futuro de la industria a través de la automatización inteligente y sistemas escalables.
                    </p>
                </div>
                {/* Navegación */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold mb-1">Navegación</h4>
                    {options.map((option, index) => (
                        <a key={index} onClick={() => handleScroll(option.link)} className=" text-sm hover:text-white transition-colors duration-200 w-fit cursor-pointer">{option.label}</a>
                    ))}
                </div>
                {/* Legal */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold mb-1">Legal</h4>
                    <a href="#" className="text-sm hover:text-white transition-colors duration-200 w-fit">Privacidad</a>
                    <a href="#" className="text-sm hover:text-white transition-colors duration-200 w-fit">Términos</a>
                    <a href="#" className="text-sm hover:text-white transition-colors duration-200 w-fit">Seguridad</a>
                </div>
            </div>
            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {year} BAIR Tech · Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-white transition-colors duration-200">
                            <Globe className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/bair.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/bair-tech/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.07V24h-4v-8.6c0-2.05-.04-4.7-2.86-4.7-2.87 0-3.31 2.24-3.31 4.55V24h-4V8.5z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
