import { ThemeToggle } from '../theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { TopButton } from './top-button'
import { MobileMenu } from './mobile-menu'
import Link from 'next/link'
import { GithubIcon } from './github-icon'

export const Header = () => {
  return (
    <div className="sticky top-0 z-40 bg-background h-16 flex justify-between items-center px-6">
      <div className="header-left ">
        <div className="hidden sm:block">
          <TopButton />
        </div>
        <div className="block sm:hidden">
          <MobileMenu />
        </div>
      </div>
      <div className="header-right flex items-center gap-2">
        <Link
          href="https://github.com/tuntun0609/full-stack-tool"
          target="_blank"
          rel="noreferrer">
          <Button size="sm" variant="ghost">
            <GithubIcon className="w-5 h-5" />
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  )
}
