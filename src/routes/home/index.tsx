"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code2, Zap, BookOpen, Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom"
export const path = "/"
export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-border/40 sticky top-0 bg-background/80 backdrop-blur-md z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="icon.png" alt="React Hooks Logo" height={30} width={30} />
                        <span className="font-bold text-xl">React Hooks</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#hooks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Hooks
                        </a>
                        <a href="#ejemplos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Ejemplos
                        </a>
                        <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Documentación
                        </a>
                        <Button size="sm">Comenzar</Button>
                    </nav>
                </div>
            </header>
            <section className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Guía completa de React Hooks</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                        Domina React Hooks con ejemplos prácticos
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                        Aprende a utilizar los hooks de React con ejemplos interactivos y explicaciones detalladas. Desde useState
                        hasta hooks personalizados.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button onClick={() => navigate("docs")} size="lg" className="gap-2 text-base">
                            Explorar Hooks
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        {/* <Button size="lg" variant="outline" className="text-base bg-transparent">
                            Ver Documentación
                        </Button> */}
                    </div>
                    <div className="pt-8">
                        <code className="text-sm text-muted-foreground font-mono bg-muted px-4 py-2 rounded-md inline-block">
                            npm install react@latest
                        </code>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-4 py-16" id="hooks">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">¿Qué aprenderás?</h2>
                        <p className="text-muted-foreground text-lg text-balance">
                            Todo lo que necesitas saber sobre React Hooks en un solo lugar
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="border-2 hover:border-accent transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-accent" />
                                </div>
                                <CardTitle>useState</CardTitle>
                                <CardDescription>Manejo de estado local en componentes funcionales</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <code className="text-xs bg-muted p-3 rounded block font-mono overflow-x-auto">
                                    {`const [state, setState] = useState(0)`}
                                </code>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:border-accent transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Code2 className="w-6 h-6 text-accent" />
                                </div>
                                <CardTitle>useEffect</CardTitle>
                                <CardDescription>Efectos secundarios y ciclo de vida del componente</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <code className="text-xs bg-muted p-3 rounded block font-mono overflow-x-auto">
                                    {`useEffect(() => {...}, [])`}
                                </code>
                            </CardContent>
                        </Card>

                        {/* Context Hook */}
                        <Card className="border-2 hover:border-accent transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <BookOpen className="w-6 h-6 text-accent" />
                                </div>
                                <CardTitle>useContext</CardTitle>
                                <CardDescription>Comparte datos sin prop drilling</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <code className="text-xs bg-muted p-3 rounded block font-mono overflow-x-auto">
                                    {`const value = useContext(Context)`}
                                </code>
                            </CardContent>
                        </Card>

                        {/* Ref Hook */}
                        <Card className="border-2 hover:border-accent transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-accent" />
                                </div>
                                <CardTitle>useRef</CardTitle>
                                <CardDescription>Referencias mutables que persisten entre renders</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <code className="text-xs bg-muted p-3 rounded block font-mono overflow-x-auto">
                                    {`const ref = useRef(null)`}
                                </code>
                            </CardContent>
                        </Card>

                        {/* Memo Hook */}
                        <Card className="border-2 hover:border-accent transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Code2 className="w-6 h-6 text-accent" />
                                </div>
                                <CardTitle>useMemo</CardTitle>
                                <CardDescription>Optimiza cálculos costosos memorizando resultados</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <code className="text-xs bg-muted p-3 rounded block font-mono overflow-x-auto">
                                    {`const value = useMemo(() => {...}, [])`}
                                </code>
                            </CardContent>
                        </Card>

                        {/* Callback Hook */}
                        <Card className="border-2 hover:border-accent transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <BookOpen className="w-6 h-6 text-accent" />
                                </div>
                                <CardTitle>useCallback</CardTitle>
                                <CardDescription>Memoriza funciones para evitar re-renders innecesarios</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <code className="text-xs bg-muted p-3 rounded block font-mono overflow-x-auto">
                                    {`const fn = useCallback(() => {...}, [])`}
                                </code>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-16" id="ejemplos">
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-accent text-accent-foreground border-0">
                        <CardHeader className="text-center pb-8">
                            <CardTitle className="text-3xl md:text-4xl mb-4">Comienza a aprender hoy</CardTitle>
                            <CardDescription className="text-accent-foreground/80 text-lg">
                                Explora ejemplos interactivos y aprende haciendo. Cada hook incluye demos en vivo que puedes modificar y
                                probar.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="gap-2">
                                <BookOpen className="w-4 h-4" />
                                Ver Ejemplos
                            </Button>
                            <Button
                                size="lg"
                            >
                                <Code2 className="w-4 h-4" />
                                Explorar Código
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/40 mt-20">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-accent" />
                            <span className="font-semibold">React Hooks</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Creado con ❤️ para la comunidad de desarrolladores</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
