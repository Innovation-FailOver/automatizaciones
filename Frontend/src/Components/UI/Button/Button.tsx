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
            className={`border-2 ${
                style
                    ? 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700'
            } w-32 h-12.5 px-4 py-2 rounded-lg hover:scale-105 transition duration-200 cursor-pointer ${form ? 'w-fit' : ''}`}
        >
            {children}
        </button>
    )
}