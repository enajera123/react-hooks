import type { HookType } from "@/lib/data/hooks"
import { UseStateExample } from "./UseStateExample"
import { UseEffectExample } from "./UseEffectExample"
import { UseRefExample } from "./UseRefExample"
import { UseMemoExample } from "./UseMemoExample"
import { UseCallbackExample } from "./UseCallbackExample"
import { UseContextExample } from "./UseContextExample"

export function HookBuilder({ hookType }: { hookType: HookType }) {
    switch (hookType) {
        case "useState":
            return <UseStateExample />
        case "useEffect":
            return <UseEffectExample />
        case "useRef":
            return <UseRefExample />
        case "useMemo":
            return <UseMemoExample />
        case "useCallback":
            return <UseCallbackExample />
        case "useContext":
            return <UseContextExample />
        default:
            return null
    }
}

