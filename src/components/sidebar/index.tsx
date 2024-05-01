import siteMap from '@/config/sample.json'
import { fontLobster } from '@/lib/fonts'

export const Sidebar = () => {
  return (
    <nav className="w-[16rem] hidden min-h-screen overflow-y-auto fixed z-10 sm:block">
      <div
        className={
          'logo flex justify-center items-center h-16 text-2xl ' +
          fontLobster.className +
          ' bg-gradient-to-r from-violet-500 to-blue-300 text-transparent bg-clip-text lobster-regular'
        }>
        Full Stack Tools
      </div>
    </nav>
  )
}
