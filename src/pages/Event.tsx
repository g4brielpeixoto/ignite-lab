import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Vídeo'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex w-full mt-[75px] ">
        <div className="w-[calc(100vw-475px)] ml-10">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        </div>
        <Sidebar />
      </main>
    </div>
  )
}
