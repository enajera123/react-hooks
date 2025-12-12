export type HookType = "useState" | "useEffect" | "useRef" | "useMemo" | "useCallback" | "useContext"

export const hooks: { id: HookType; title: string; description: string }[] = [
    {
        id: "useState",
        title: "useState",
        description: "Maneja estado local en componentes funcionales",
    },
    {
        id: "useEffect",
        title: "useEffect",
        description: "Ejecuta efectos secundarios y maneja el ciclo de vida",
    },
    {
        id: "useRef",
        title: "useRef",
        description: "Crea referencias mutables que persisten entre renders",
    },
    {
        id: "useMemo",
        title: "useMemo",
        description: "Memoriza valores calculados para optimizar rendimiento",
    },
    {
        id: "useCallback",
        title: "useCallback",
        description: "Memoriza funciones para evitar re-renders innecesarios",
    },
    {
        id: "useContext",
        title: "useContext",
        description: "Accede a valores del contexto sin prop drilling",
    },
]