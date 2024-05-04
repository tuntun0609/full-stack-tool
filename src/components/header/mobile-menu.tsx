'use client'

import { cn } from '@/lib/utils'
import { Menu as MenuIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import { Menu } from '../sidebar/menu'
import { fontLobster } from '@/lib/fonts'

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
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
        )}
        onClick={() => {
          if (menuOpen) {
            setMenuOpen(false)
          }
        }}></div>
      <div
        className={cn(
          'fixed inset-0 z-20 mx-0 h-screen w-60 -translate-x-60 bg-background transition-transform duration-300 ease-in-out',
          menuOpen && 'translate-x-0'
        )}>
        <div
          className={cn(
            'logo flex justify-center items-center h-16 text-2xl bg-gradient-to-r from-violet-500 to-blue-300 text-transparent bg-clip-text select-none',
            fontLobster.className
          )}>
          Full Stack Tool
        </div>
        <div className="p-4 pt-8">
          <Menu />
        </div>
      </div>
    </>
  )
}
