'use client'

import { cn } from '@/lib/utils'
import { Menu as MenuIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import { Menu } from '../sidebar/menu'
import { useClickAway } from 'react-use'

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  useClickAway(sidebarRef, () => {
    setMenuOpen(false)
  })
  return (
    <>
      <div
        className="top-btn ease-in-out transition-all duration-200 w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400 flex justify-center items-center gap-1 cursor-pointer hover:text-purple-500"
        onClick={() => {
          setMenuOpen(true)
        }}>
        <MenuIcon />
      </div>
      <div
        className={cn(
          'fixed z-100 w-screen h-screen bg-gray-600 opacity-20 top-0 left-0 transition-all duration-300 ease-in-out',
          !menuOpen && 'opacity-0 pointer-events-none'
        )}></div>
      <div
        ref={sidebarRef}
        className={cn(
          'fixed inset-0 z-20 mx-0 h-screen w-60 -translate-x-60 bg-background transition-transform duration-300 ease-in-out',
          menuOpen && 'translate-x-0'
        )}>
        <div className="p-4 pt-16">
          <Menu />
        </div>
      </div>
    </>
  )
}
