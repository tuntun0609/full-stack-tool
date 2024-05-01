'use client'

import Image from 'next/image'

import siteMap from '@/config/sample.json'

import { ActiveButton } from './active-button'
import { useState } from 'react'

export const Menu = () => {
  const menuItems = siteMap.map((item, index) => ({
    icon: item.icon,
    title: item.title,
    id: index,
  }))
  const [activeId, setActiveId] = useState(1)

  return (
    <div className="nav flex flex-col gap-2">
      {menuItems.map((item, index) => (
        <ActiveButton
          active={activeId === item.id}
          key={index}
          onClick={() => {
            setActiveId(item.id)
          }}>
          <Image src={item.icon} alt={item.title} width={20} height={20} />
          <span>{item.title}</span>
        </ActiveButton>
      ))}
    </div>
  )
}
