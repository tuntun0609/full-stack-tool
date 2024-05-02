import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { ToolList } from '@/components/tool-list'

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="sm:pl-[16rem]">
        <Header />
        <ToolList />
      </div>
    </div>
  )
}
