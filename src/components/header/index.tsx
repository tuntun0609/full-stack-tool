import { ArrowUpToLine } from 'lucide-react'
import { ThemeToggle } from '../theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { TopButton } from './top-button'

export const Header = () => {
  return (
    <div className="sticky top-0 z-40 bg-background h-16 flex justify-between items-center px-6">
      <div className="header-left ">
        <TopButton />
      </div>
      <div className="header-right">
        <ThemeToggle />
      </div>
    </div>
  )
}
