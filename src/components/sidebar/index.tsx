import { fontLobster } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Menu } from './menu'

export const Sidebar = () => {
  return (
    <div className="w-[16rem] hidden min-h-screen overflow-y-auto fixed z-10 sm:block">
      <nav className="flex flex-col sm:px-6 sm:pb-6">
        <div
          className={cn(
            'logo flex justify-center items-center h-16 text-2xl bg-gradient-to-r from-violet-500 to-blue-300 text-transparent bg-clip-text select-none',
            fontLobster.className
          )}>
          Full Stack Tools
        </div>
        <div className="pt-8">
          <Menu />
        </div>
      </nav>
    </div>
  )
}
