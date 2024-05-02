'use client'

import { ArrowUpToLine } from 'lucide-react'

export const TopButton = () => {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      onClick={toTop}
      className="top-btn ease-in-out transition-all duration-200 w-16 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400 flex justify-center items-center gap-1 cursor-pointer hover:text-purple-500">
      <ArrowUpToLine size={14} />
      Top
    </div>
  )
}
