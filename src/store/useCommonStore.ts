import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { HookType } from "@/lib/data/hooks"


interface CommonState {
    hookSelected: HookType
    setHookSelected: (hook: HookType) => void
}

export const useCommonStore = create<CommonState>()(
    persist(
        (set, _get) => ({
            hookSelected: "useState",
            setHookSelected: (hook: HookType) => set({ hookSelected: hook }),
        }),
        {
            name: "common-store",
        }
    )
)