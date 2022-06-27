import { List, X } from 'phosphor-react'
import { useSidebar } from '../hooks/useSidebar'
import { Logo } from './Logo'


export function Header(){
  const { sidebarIsOpened, openSidebar, closeSidebar } = useSidebar()

  function toggleSidebar() {
    if (sidebarIsOpened) {
      closeSidebar()
    } else {
      openSidebar()
    }
  }

  return (
    <header className="fixed z-50 w-full p-5 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600">
      <Logo width='150'/>
      <button className='visible lg:invisible' onClick={toggleSidebar}>
        {sidebarIsOpened ? <X  size={30} /> : <List size={30} />}
      </button>
    </header>
  )
}

