import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import code from "@/lib/data/examples/useMemo.txt?raw"
import { CodeBlock } from "../common/CodeBlock"
export function UseMemoExample() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const expensiveCalculation = useMemo(() => {
        console.log("[v0] Calculando...")
        let result = 0
        for (let i = 0; i < 100000000; i++) {
            result += count
        }
        return result
    }, [count])

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold mb-2">useMemo</h1>
                <p className="text-muted-foreground text-lg">
                    El hook useMemo memoriza el resultado de un cálculo costoso. Solo recalcula cuando sus dependencias cambian,
                    optimizando el rendimiento de tu aplicación.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Ejemplo: Cálculo Optimizado</CardTitle>
                    <CardDescription>
                        El cálculo costoso solo se ejecuta cuando el contador cambia, no cuando escribes
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium mb-2 block">Contador (causa recálculo):</label>
                            <div className="flex items-center gap-4">
                                <Button onClick={() => setCount(count - 1)}>-</Button>
                                <span className="text-2xl font-bold min-w-15 text-center">{count}</span>
                                <Button onClick={() => setCount(count + 1)}>+</Button>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-2 block">Texto (NO causa recálculo):</label>
                            <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe algo..." />
                        </div>

                        <div className="p-4 bg-muted rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Resultado del cálculo memorizado:</p>
                            <p className="text-3xl font-bold text-accent">{expensiveCalculation.toLocaleString()}</p>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            Abre la consola del navegador para ver cuándo se ejecuta el cálculo
                        </p>
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
        </div>
    )
}
