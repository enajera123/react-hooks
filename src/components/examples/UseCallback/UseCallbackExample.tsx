import { useCallback, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { Button } from "../../ui/button"
import code from "@/lib/data/examples/useCallBack.txt?raw"
import { CodeBlock } from "../../common/CodeBlock"
import ChildComponent from "./ChildComponent"
import { withRenderDetection } from "@/components/common/hoc/withRenderDetection"
const RenderDetectionChildComponent = withRenderDetection(ChildComponent, { animationType: "border", showCounter: false, skipFirstRender: true })
export function UseCallbackExample() {
    const [count, setCount] = useState(0)
    const [otherState, setOtherState] = useState(0)

    const increment = useCallback(() => {
        setCount((c) => c + 1)
    }, [])
    const handleClick = useCallback(() => {
        console.log("Botón del hijo clickeado", count)
    }, [])
    const handleClickWithoutUseCallback = () => {
        console.log("Botón del hijo clickeado", count)
    }
    console.log("Renderiza padre")
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold mb-2">useCallback</h1>
                <p className="text-muted-foreground text-lg">
                    El hook useCallback memoriza funciones para evitar que se recreen en cada render. Útil cuando pasas callbacks
                    a componentes hijos optimizados que dependen de igualdad referencial.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Ejemplo: Función Memorizada</CardTitle>
                    <CardDescription>La función increment mantiene su referencia entre renders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <RenderDetectionChildComponent onClick={handleClickWithoutUseCallback} />
                    <div className="text-center space-y-4">
                        <div className="text-5xl font-bold text-accent">{count}</div>
                        <div className="flex justify-start gap-3">
                            <Button onClick={increment}>
                                Incrementar
                            </Button>
                            <Button onClick={() => setCount(0)} variant="outline" size="lg">
                                Reset
                            </Button>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                        <p className="text-sm font-medium mb-2">Otro estado (para forzar re-render):</p>
                        <div className="flex items-center gap-4">
                            <Button onClick={() => setOtherState(otherState + 1)} variant="secondary">
                                Actualizar otro estado
                            </Button>
                            <span className="text-muted-foreground">Valor: {otherState}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Aunque este estado cambie, la función increment mantiene su referencia
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-muted/50">
                <CardHeader>
                    <CardTitle className="text-lg">Código del Ejemplo</CardTitle>
                </CardHeader>
                <CardContent>
                    <CodeBlock code={code} language="tsx" />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Cuándo usar useCallback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <p>
                        <strong>1. Componentes hijos optimizados:</strong> Cuando pasas callbacks a React.memo() components
                    </p>
                    <p>
                        <strong>2. Dependencias de useEffect:</strong> Cuando una función es dependencia de otro hook
                    </p>
                    <p>
                        <strong>3. Listas grandes:</strong> Callbacks en items de listas optimizadas
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
