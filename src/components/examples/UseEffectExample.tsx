import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import code from "@/lib/data/examples/useEffect.txt?raw"
import { CodeBlock } from "../common/CodeBlock"
export function UseEffectExample() {
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (!isRunning) return

        const interval = setInterval(() => {
            setSeconds((s) => s + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning])

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold mb-2">useEffect</h1>
                <p className="text-muted-foreground text-lg">
                    El hook useEffect permite realizar efectos secundarios en componentes funcionales. Se ejecuta después del
                    render y puede limpiar recursos cuando el componente se desmonta.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Ejemplo Práctico: Temporizador</CardTitle>
                    <CardDescription>Un temporizador que se ejecuta usando useEffect</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="text-center">
                        <div className="text-6xl font-bold text-accent mb-6">{seconds}s</div>
                        <div className="flex gap-3">
                            <Button onClick={() => setIsRunning(!isRunning)} size="lg" className="flex-1">
                                {isRunning ? "Pausar" : "Iniciar"}
                            </Button>
                            <Button
                                onClick={() => {
                                    setSeconds(0)
                                    setIsRunning(false)
                                }}
                                variant="outline"
                                size="lg"
                                className="flex-1"
                            >
                                Reiniciar
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-muted/50">
                <CardHeader>
                    <CardTitle className="text-lg">Código del Ejemplo</CardTitle>
                </CardHeader>
                <CardContent>
                    <CodeBlock code={code} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Puntos Clave</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <p>
                        <strong>1. Dependencies Array:</strong> El segundo argumento controla cuándo se ejecuta el efecto.
                    </p>
                    <p>
                        <strong>2. Cleanup Function:</strong> La función retornada se ejecuta antes de desmontar el componente.
                    </p>
                    <p>
                        <strong>3. Timing:</strong> Se ejecuta después del render, no bloqueando la UI.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}