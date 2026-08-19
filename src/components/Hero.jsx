import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Play, ArrowRight } from 'lucide-react'

// 1. Importe o seu arquivo de vídeo
import seuVideo from '/src/assets/video-home.mp4' // <-- Atualize com o caminho correto para o seu vídeo

const Hero = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <section id="home" >
      <div className="w-full relative p-4 pb-0">
        <video
          src="/src/assets/video-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
        />
        {/* (Opcional) Overlay escuro para melhorar contraste do texto */}
      </div>

      <div className="relative min-h-screen flex justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transforme Seus Atendimentos com a{' '}
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Precisão
                  </span>{' '}
                  da Biorressonância
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Obtenha um check-up energético completo em minutos, permitindo intervenções mais rápidas, personalizadas e com resultados comprovados para seus clientes.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  O <strong>AO Scan</strong> é a tecnologia de ponta que integra a ciência da frequência com a prática holística. Identifique as raízes dos desequilíbrios de seus clientes com clareza inédita e ofereça harmonização energética imediata, consolidando sua autoridade e fidelizando sua clientela.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/connect')}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 text-lg cursor-pointer"
                >
                  Solicite Sua Demonstração Exclusiva
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">+1000</div>
                  <div className="text-sm text-gray-600">Profissionais Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">24h</div>
                  <div className="text-sm text-gray-600">Resultados Visíveis</div>
                </div>
              </div> */}
            </div>

            {/* Video/Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-green-100 p-8">

                {/* 2. Substitua o div do placeholder pela tag <video> */}
                <video
                  src={seuVideo} // Use a variável importada aqui
                  controls // Adiciona controles de play, pause, volume, etc.
                  playsInline // Essencial para autoplay em alguns navegadores mobile
                  className="aspect-video w-full rounded-xl cursor-pointer"
                >
                  Seu navegador não suporta a tag de vídeo.
                </video>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero