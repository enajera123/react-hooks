import React from "react"

interface ChildComponentProps {
    onClick: () => void
}
function ChildComponent({ onClick }: ChildComponentProps) {
    console.log("Renderiza hijo")
    return (
        <button
            onClick={onClick}
            className={`
                px-4 py-2 rounded text-white 
                bg-blue-600 
                transition-all duration-300`}
        >
            Botón del Hijo
        </button>
    )
}

export default React.memo(ChildComponent)
