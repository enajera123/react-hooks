import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { Input } from "../../ui/input"
import code from "@/lib/data/examples/useState.txt?raw"
import { CodeBlock } from "../../common/CodeBlock"
export function UseStateExample() {
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
                    <CodeBlock code={code} />
                </CardContent>
            </Card>
        </div>
    )
}
