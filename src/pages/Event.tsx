import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Vídeo'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex w-full mt-[70px] ">
        <div className="w-full lg:w-[calc(100vw-475px)] lg:first:ml-10">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        </div>
        <Sidebar />
      </main>
    </div>
  )
}
