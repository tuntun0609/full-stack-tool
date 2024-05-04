import siteMap, { IToolItem } from '@/config/sample'
import Image from 'next/image'
import Link from 'next/link'

const ToolItem = (data: IToolItem) => (
  <Link href={data.url} target="_blank">
    <div className="h-full p-4 border border-gray-100 rounded-lg shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:scale-105 hover:bg-border hover:shadow-lg xl:mb-0">
      <div className="flex items-center h-10 mb-2">
        <div className="w-10 h-10 flex rounded-full overflow-hidden mr-2 text-center">
          {data.icon ? (
            <Image
              className="dark:bg-white"
              src={data.icon}
              alt={data.title}
              width={40}
              height={40}
            />
          ) : (
            <span className="h-full w-full rounded-full bg-purple-500 text-center font-bold leading-10 text-white dark:text-gray-200">
              {data.title.slice(0, 1)}
            </span>
          )}
        </div>
        <div>{data.title}</div>
      </div>
      <div>{data.description}</div>
    </div>
  </Link>
)

export const ToolList = () => {
  return (
    <div className="w-full pt-8 px-4">
      {siteMap.map((item, index) => (
        <div key={index} id={`tool-list-${index + 1}`} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {item.links.map((child, childIndex) => (
              <ToolItem key={childIndex} {...child} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
