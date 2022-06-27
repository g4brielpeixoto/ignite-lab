import { useGetLessonsQuery } from '../graphql/generated'
import { useSidebar } from '../hooks/useSidebar'
import { Lesson } from './Lesson'

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  const { sidebarIsOpened } = useSidebar()

  return (
    <aside className={`bg-gray-700 p-6 border-l border-gray-600 fixed top-45 lg:right-10 max-h-[calc(100vh-75px)] w-screen lg:w-[348px] overflow-auto transition-all ${ sidebarIsOpened ? 'visible lg:visible' : 'invisible lg:visible'}`}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
