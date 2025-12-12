import { createContext, useCallback, useContext, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
const ThemeContext = createContext({ theme: "dark", toggleTheme: () => { } })

export function UseContextExample() {
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === "dark" ? "light" : "dark"))
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">useContext</h1>
                    <p className="text-muted-foreground text-lg">
                        El hook useContext permite acceder a valores de contexto sin necesidad de prop drilling. Ideal para
                        compartir datos como temas, autenticación o configuración global.
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Ejemplo: Sistema de Temas</CardTitle>
                        <CardDescription>Componentes anidados acceden al tema sin pasar props</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ThemedComponent />
                        <NestedComponent />
                    </CardContent>
                </Card>

                <Card className="bg-muted/50">
                    <CardHeader>
                        <CardTitle className="text-lg">Código del Ejemplo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <pre className="text-sm overflow-x-auto">
                            <code>{`// 1. Crear el contexto
const ThemeContext = createContext({ 
  theme: "dark", 
  toggleTheme: () => {} 
})

// 2. Proveer el contexto
<ThemeContext.Provider value={{ theme, toggleTheme }}>
  <App />
</ThemeContext.Provider>

// 3. Consumir el contexto
function Component() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return <button onClick={toggleTheme}>{theme}</button>
}`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </div>
        </ThemeContext.Provider>
    )
}
function ThemedComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div
            className={cn("p-6 rounded-lg border-2", theme === "dark" ? "bg-card border-border" : "bg-white border-gray-300")}
        >
            <div className="flex items-center justify-between mb-4">
                <p className={theme === "dark" ? "text-foreground" : "text-gray-900"}>
                    Tema actual: <span className="font-bold">{theme}</span>
                </p>
                <Button onClick={toggleTheme} variant="outline">
                    Cambiar a {theme === "dark" ? "light" : "dark"}
                </Button>
            </div>
            <p className={cn("text-sm", theme === "dark" ? "text-muted-foreground" : "text-gray-600")}>
                Este componente accede al contexto directamente sin recibir props
            </p>
        </div>
    )
}

function NestedComponent() {
    return (
        <div className="pl-6 border-l-2 border-accent">
            <p className="text-sm text-muted-foreground mb-3">Componente anidado profundamente</p>
            <DeepNestedComponent />
        </div>
    )
}

function DeepNestedComponent() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={cn("p-4 rounded border", theme === "dark" ? "bg-muted" : "bg-gray-100 border-gray-300")}>
            <p className={cn("text-sm", theme === "dark" ? "text-foreground" : "text-gray-900")}>
                Componente anidado muy profundo también accede al tema: <span className="font-mono font-bold">{theme}</span>
            </p>
            <p className={cn("text-xs mt-2", theme === "dark" ? "text-muted-foreground" : "text-gray-600")}>
                Sin necesidad de pasar props por múltiples niveles
            </p>
        </div>
    )
}
