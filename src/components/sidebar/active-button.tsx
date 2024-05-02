'use client'

import { fontContrailOne } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export const ActiveButton = ({
  active = false,
  children,
  onClick,
}: {
  active?: boolean
  children?: ReactNode
  onClick?: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'block cursor-pointer rounded-lg hover:bg-gray-100 hover:text-purple-500 dark:hover:bg-gray-300 h-auto p-2 ease-in-out transition-all duration-200 pl-6',
        active && 'bg-gray-100 text-purple-500 dark:bg-gray-300'
      )}>
      <div className={cn('flex items-center gap-2', fontContrailOne.className)}>
        {children}
      </div>
    </div>
  )
}
