import { RocketseatLogo } from './RocketseatLogo'

export function Footer() {
  return (
    <div className="flex justify-center items-center h-40 lg:h-20 w-full bg-gray-900 lg:px-6">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center border-t p-4 border-gray-500">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-6">
          <RocketseatLogo />
          <p className="text-gray-400">Rocketseat - Todos os direitos reservados</p>
        </div>
        <p className="text-gray-400">Políticas de privacidade</p>
      </div>
    </div>
  )
}
