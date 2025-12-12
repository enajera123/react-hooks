"use client"

import { HookBuilder } from '@/components/examples/HookBuilder'
import { useCommonStore } from '@/store/useCommonStore'

function DocsPage() {
    const { hookSelected } = useCommonStore()
    return (
        <HookBuilder hookType={hookSelected} />
    )
}

export default DocsPage