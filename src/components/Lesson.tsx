import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom'
import { useSidebar } from '../hooks/useSidebar'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const { slug } = useParams<{ slug: string }>()
  const isActiveLesson = props.slug === slug
  const { closeSidebar } = useSidebar()

  let availableDateFormat = format(props.availableAt, "EE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })
  availableDateFormat =
    availableDateFormat[0].toLocaleUpperCase() + availableDateFormat.substring(1)

  return (
    <Link
      to={`/event/lesson/${props.slug}`}
      className={`${!isLessonAvailable ? 'pointer-events-none' : ''} group`}
      onClick={closeSidebar}
    >
      <span className="text-gray-300">{availableDateFormat}</span>

      <div
        className={`${
          !isLessonAvailable ? 'cursor-not-allowed group-hover:border-gray-500' : ''
        } ' rounded border border-gray-500 p-4 mt-2 transition-colors group-hover:border-green-500
        ${isActiveLesson ? 'bg-green-500 border-none' : ''}`}
      >
        <div
          className={`w-4 h-4 bg-green-500 -rotate-45 transform origin-top-right absolute left-2 opacity-0 transition-opacity ${
            isActiveLesson ? 'opacity-100 transition-opacity' : ''
          }`}
        />
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${
                isActiveLesson ? 'text-gray-50' : ''
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 ${
              isActiveLesson ? 'border-gray-50' : ''
            }`}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={`text-gray-200 mt-5 block ${isActiveLesson ? 'text-gray-50' : ''}`}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
