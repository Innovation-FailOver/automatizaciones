import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    style?: boolean;
    form?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function Button({ children, style, form, onClick, type, disabled }: Props) {
    return (
        <button 
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`border-2 ${style ? 'border-gray-900 text-gray-600' : 'bg-gray-900 border-gray-900 text-white'} w-32 h-12.5 px-4 py-2 rounded-lg hover:scale-105 transition duration-200 cursor-pointer ${form ? 'w-fit' : ''}`}
        >
            {children}
        </button>
    )
}
