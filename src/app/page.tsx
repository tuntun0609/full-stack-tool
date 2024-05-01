import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="sm:pl-[16rem]">
        <Header />
      </div>
    </div>
  )
}
