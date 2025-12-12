import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function UseStateExample() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold mb-2">useState</h1>
                <p className="text-muted-foreground text-lg">
                    El hook useState permite agregar estado a componentes funcionales. Retorna un par: el valor actual del estado
                    y una función para actualizarlo.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Ejemplo Práctico: Contador</CardTitle>
                    <CardDescription>Haz clic en los botones para incrementar o decrementar el contador</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-center gap-4">
                        <Button onClick={() => setCount(count - 1)} size="lg">
                            -
                        </Button>
                        <div className="text-6xl font-bold text-accent min-w-30 text-center">{count}</div>
                        <Button onClick={() => setCount(count + 1)} size="lg">
                            +
                        </Button>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={() => setCount(0)} variant="outline" className="flex-1">
                            Reiniciar
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Ejemplo: Input Controlado</CardTitle>
                    <CardDescription>Escribe algo y observa cómo el estado se actualiza</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        type="text"
                        placeholder="Escribe tu nombre..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">
                        Valor actual: <span className="text-foreground font-mono">{name || "(vacío)"}</span>
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-muted/50">
                <CardHeader>
                    <CardTitle className="text-lg">Código del Ejemplo</CardTitle>
                </CardHeader>
                <CardContent>
                    <pre className="text-sm overflow-x-auto">
                        <code>{`const [count, setCount] = useState(0)
const [name, setName] = useState("")

// Actualizar el estado
setCount(count + 1)
setName(e.target.value)`}</code>
                    </pre>
                </CardContent>
            </Card>
        </div>
    )
}
