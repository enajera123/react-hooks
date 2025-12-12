import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import code from "@/lib/data/examples/useRef.txt?raw"
import { CodeBlock } from "../common/CodeBlock"

export function UseRefExample() {
    const inputRef = useRef<HTMLInputElement>(null)
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    const focusInput = () => {
        inputRef.current?.focus()
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold mb-2">useRef</h1>
                <p className="text-muted-foreground text-lg">
                    El hook useRef permite crear una referencia mutable que persiste entre renders sin causar re-renders. Útil
                    para acceder a elementos del DOM y almacenar valores que no necesitan re-render.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Ejemplo: Focus en Input</CardTitle>
                    <CardDescription>Usa la ref para enfocar el input programáticamente</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input ref={inputRef} placeholder="Haz clic en el botón para enfocar aquí" />
                    <Button onClick={focusInput}>Enfocar Input</Button>
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
