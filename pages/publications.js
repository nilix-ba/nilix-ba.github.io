import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Publications() {
  const router = useRouter()

  useEffect(() => {
    // Redirect /publications to /research
    router.replace('/research')
  }, [router])

  return null
}
