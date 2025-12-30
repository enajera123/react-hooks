import { useEffect, useState, useRef, type ComponentType } from "react"

interface WithRenderDetectionOptions {
    animationType?: "flash" | "pulse" | "shake" | "glow" | "border"
    duration?: number
    showCounter?: boolean
    skipFirstRender?: boolean
}

export function withRenderDetection<T extends object>(
    Component: ComponentType<T>,
    options: WithRenderDetectionOptions = {}
) {
    const {
        animationType = "flash",
        duration = 400,
        showCounter = true,
    } = options

    return function WithRenderDetectionWrapper(props: T) {
        const [renderCount, setRenderCount] = useState(0)
        const [isAnimating, setIsAnimating] = useState(false)
        const prevPropsRef = useRef<T | null>(null)
        const isFirstRenderRef = useRef(true)

        useEffect(() => {
            const prev = prevPropsRef.current

            if (isFirstRenderRef.current) {
                isFirstRenderRef.current = false
                prevPropsRef.current = props
                return
            }
            const propsChanged =
                !prev ||
                Object.keys(props).some(
                    (key) => (props as any)[key] !== (prev as any)[key]
                )

            if (propsChanged) {
                setRenderCount((prev) => prev + 1)
                setIsAnimating(true)

                const timer = setTimeout(() => setIsAnimating(false), duration)
                prevPropsRef.current = props
                return () => clearTimeout(timer)
            }
            prevPropsRef.current = props
        }, [props])


        const animationStyles = {
            flash: {
                container: "relative",
                overlay: isAnimating
                    ? "absolute inset-0 bg-green-400/50 pointer-events-none z-10"
                    : "",
                component: ""
            },
            pulse: {
                container: "relative",
                overlay: isAnimating
                    ? "absolute inset-0 bg-blue-400/20 pointer-events-none z-10 animate-pulse"
                    : "",
                component: ""
            },
            shake: {
                container: "relative",
                overlay: isAnimating
                    ? "absolute inset-0 bg-yellow-400/25 pointer-events-none z-10"
                    : "",
                component: isAnimating ? "animate-shake" : ""
            },
            glow: {
                container: "relative",
                overlay: isAnimating
                    ? "absolute inset-0 bg-gradient-to-r from-transparent via-green-400/40 to-transparent pointer-events-none z-10 animate-glow-sweep"
                    : "",
                component: ""
            },
            border: {
                container: "relative",
                overlay: isAnimating
                    ? "absolute inset-0 border-4 border-green-400 pointer-events-none z-10 animate-border-pulse"
                    : "absolute inset-0 border-4 border-transparent pointer-events-none z-10",
                component: ""
            },
        }

        const currentAnimation = animationStyles[animationType]

        return (
            <div className="relative inline-block">
                <div className={`${currentAnimation.container} transition-all duration-300`}>
                    {currentAnimation.overlay && (
                        <div className={currentAnimation.overlay} />
                    )}

                    <div className={`relative z-0 transition-transform duration-300 ${currentAnimation.component}`}>
                        <Component {...props} />
                    </div>
                </div>

                {showCounter && renderCount > 0 && (
                    <span
                        className={`
                            absolute -top-2 -right-2 
                            bg-red-500 text-white text-xs 
                            px-2 py-1 rounded-full font-mono
                            transition-all duration-200 z-20
                            ${isAnimating ? "scale-125" : "scale-100"}
                        `}
                    >
                        {renderCount}
                    </span>
                )}
            </div>
        )
    }
}