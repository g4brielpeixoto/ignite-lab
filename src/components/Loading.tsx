import { CircleNotch } from 'phosphor-react'

interface LoadingProps {
  size: number
}

export function Loading({size}: LoadingProps) {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <CircleNotch size={size} weight="bold" className="animate-spin" />
    </div>
  )
}
