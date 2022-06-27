import { useContext } from 'react'
import { SidebarContext } from '../contexts/sideBar'

export function useSidebar() {
  const context = useContext(SidebarContext)
  return context
}