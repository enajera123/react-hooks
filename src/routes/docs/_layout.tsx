'use client'

import type React from "react"
import { useState } from "react"
import { Menu, Code2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { hooks } from "@/lib/data/hooks"
import { useCommonStore } from "@/store/useCommonStore"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const { hookSelected, setHookSelected } = useCommonStore()
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-border/40 sticky top-0 bg-background/80 backdrop-blur-md z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                        <a href="/" className="flex items-center gap-2">
                            <Code2 className="w-6 h-6 text-accent" />
                            <span className="font-bold text-xl">React Hooks</span>
                        </a>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                        <a href="/">Volver al Inicio</a>
                    </Button>
                </div>
            </header>

            <div className="flex">
                <aside
                    className={cn(
                        "fixed lg:sticky top-18.5 left-0 h-[calc(100vh-73px)] w-64 border-r border-border bg-card z-40 transition-transform duration-300",
                        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
                    )}
                >
                    <div className="p-6 space-y-1">
                        <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">React Hooks</h2>
                        <nav className="space-y-1">
                            {hooks.map((hook) => (
                                <button
                                    key={hook.id}
                                    onClick={() => {
                                        setHookSelected(hook.id)
                                        setSidebarOpen(false)
                                    }}
                                    className={cn(
                                        "w-full text-left px-3 py-2 rounded-lg transition-colors",
                                        hookSelected === hook.id
                                            ? "bg-accent text-accent-foreground font-medium"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                    )}
                                >
                                    {hook.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="p-6 lg:p-8 sm:w-[80%] sm:mx-auto ">
                    {children}
                </main>
            </div>
        </div>
    )
}
