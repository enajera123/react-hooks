import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"

interface ChildComponentWithCallbackProps {
    onClick: () => void
}
function ChildComponentWithCallback({ onClick }: ChildComponentWithCallbackProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Componente Hijo con useCallback implementado</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Este componente recibe una función <span className="text-yellow-500 font-bold">onClick()</span> como prop.</p>
                <p>El componente se renderiza unicamente cuando la referencia de la función cambia.</p>
            </CardContent>
            <CardFooter>
                <Button onClick={onClick}>
                    On Click
                </Button>
            </CardFooter>
        </Card>
    )
}

export default React.memo(ChildComponentWithCallback)
