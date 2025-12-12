"use client"

import { Button } from "@/components/ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
    code: string
    language?: string
    filename?: string
    showLineNumbers?: boolean
    className?: string
}

export function CodeBlock({ code, language = "tsx", filename, showLineNumbers = true, className }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const highlightCode = (code: string) => {
        let result = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')

        const keywords = /\b(const|let|var|function|return|if|else|for|while|import|export|from|default|class|interface|type|enum|async|await|try|catch|throw|new|this|super|extends|implements|public|private|protected|static|readonly|null|undefined|true|false|void|never|any|unknown)\b/g
        const strings = /(&quot;|&#039;)(?:(?!(\1)).)*?\1/g
        const comments = /\/\/.*$|\/\*[\s\S]*?\*\//gm
        const numbers = /(?<!-)\b\d+\b/g
        const functions = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g
        const jsxTags = /&lt;\/?([A-Za-z][a-zA-Z0-9-]*)/g
        const protectedStrings: string[] = []
        const protectedComments: string[] = []

        result = result.replace(comments, (match) => {
            const index = protectedComments.length
            protectedComments.push(match)
            return `__COMMENT_${index}__`
        })

        result = result.replace(strings, (match) => {
            const index = protectedStrings.length
            protectedStrings.push(match)
            return `__STRING_${index}__`
        })

        result = result.replace(keywords, '<span class="text-purple-400">$&</span>')
        result = result.replace(numbers, '<span class="text-pink-500">$&</span>')
        result = result.replace(functions, '<span class="text-orange-400">$1</span>')
        result = result.replace(jsxTags, '<span class="text-green-400">$&</span>')
        result = result.replace(/__STRING_(\d+)__/g, (_, index) => {
            return `<span class="text-emerald-300">${protectedStrings[Number.parseInt(index)]}</span>`
        })
        result = result.replace(/__COMMENT_(\d+)__/g, (_, index) => {
            return `<span class="text-gray-500 italic">${protectedComments[Number.parseInt(index)]}</span>`
        })
        return result
    }

    const lines = code.split("\n")
    const highlightedLines = lines.map((line) => highlightCode(line))

    return (
        <div className={cn("rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden", className)}>
            {filename && (
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-800/50">
                    <span className="text-sm text-zinc-400 font-mono">{filename}</span>
                    <span className="text-xs text-zinc-500 uppercase">{language}</span>
                </div>
            )}

            <div className="relative">
                <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-zinc-800"
                    onClick={handleCopy}
                    title="Copy code"
                >
                    {copied ? <CheckIcon className="h-4 w-4 text-green-400" /> : <CopyIcon className="h-4 w-4 text-zinc-400" />}
                </Button>

                <div className="overflow-x-auto">
                    <pre className="p-4 text-sm font-mono leading-relaxed">
                        <code className="block">
                            {highlightedLines.map((line, index) => (
                                <div key={index} className="table-row">
                                    {showLineNumbers && (
                                        <span className="table-cell pr-4 text-right text-zinc-600 select-none w-8">{index + 1}</span>
                                    )}
                                    <span className="table-cell text-zinc-100" dangerouslySetInnerHTML={{ __html: line || "&nbsp;" }} />
                                </div>
                            ))}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}
