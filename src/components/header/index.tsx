import { ThemeToggle } from '../theme/theme-toggle'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <div className="h-16 flex justify-between items-center px-6">
      <div className="header-left ">
        <div className="top-btn ease-in-out transition-all duration-200 w-16 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400 flex justify-center items-center cursor-pointer hover:text-purple-500">
          Top
        </div>
      </div>
      <div className="header-right">
        <ThemeToggle />
      </div>
    </div>
  )
}
