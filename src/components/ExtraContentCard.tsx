import { CaretRight, FileArrowDown } from 'phosphor-react'

interface Props {
  title: string
  text: string
}

export function ExtraContentCard({ text, title }: Props) {
  return (
    <a
      href="#"
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        <FileArrowDown size={40} />
      </div>

      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm text-grau-200 mt-2">{text}</p>
      </div>

      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  )
}
