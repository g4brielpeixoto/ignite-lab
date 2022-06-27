import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Loading } from '../components/Loading'
import { Logo } from '../components/Logo'
import { ReactIcon } from '../components/ReactLogo'
import { useCreateSubscriberMutation } from '../graphql/generated'
import codeMockupImage from '../assets/code-mockup.png'

export function Subscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [createSubscriber, { loading }] = useCreateSubscriberMutation()
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event/lesson/abertura')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center overflow-x-hidden">
      <div className="absolute top-[10px] z-0">
        <ReactIcon />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:px-8 items-center justify-between mt-20 z-10">
        <div className="flex flex-col px-2 items-center max-w-[26rem] lg:items-start lg:max-w-[640px]">
          <Logo className='w-[237px] h-[34px]'/>

          <h1 className="mt-8 text-[2.5rem] leading-tight text-center lg:text-left">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero,{' '}
            <strong className="text-blue-500">com React</strong>
          </h1>

          <p className="mt-4 px-4 lg:px-0 text-gray-200 leading-relaxed text-center lg:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e
            com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 mx-2 bg-gray-700 border border-gray-500 rounded z-10">
          <strong className="text-2xl mb-6 text-center block ">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event) => setName(event.target.value)}
            />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading || !name || !email}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors flex items-center justify-center disabled:hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? <Loading size={27}/> : 'Garantir minha vaga'}
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockupImage} className="p-3 md:p-10" />
      <Footer />
    </div>
  )
}
