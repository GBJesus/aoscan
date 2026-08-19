import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Zap, Clock, Shield, Target, ArrowRight } from 'lucide-react'

const AOScanSection = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Rápido",
      description: "Check-up energético completo em poucos minutos, algo que outras técnicas levam semanas ou meses para mapear."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Completo",
      description: "Identifica desequilíbrios e emite frequências de equilíbrio para apoiar o corpo a retornar ao seu estado natural."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Não Invasivo",
      description: "Atua apenas por meio de frequências, sem contato físico, agulhas ou coleta de sangue."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Acessível",
      description: "Portátil e com protocolos pré-programados, dando autonomia mesmo para quem nunca estudou terapias energéticas."
    }
  ]

  const benefits = [
    "Sono melhor e maior qualidade de descanso",
    "Foco, criatividade e concentração aprimorados",
    "Maior equilíbrio emocional e bem-estar",
    "Melhora na circulação e saúde cardiovascular",
    "Redução de sintomas como dor de cabeça e cólicas",
    "Alívio de sintomas de TPM"
  ]

  return (
    <section id="aoscan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" id="introducao"> {/* ID para a seção Introdução */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Introdução à Tecnologia{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              AO Scan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-8xl mx-auto leading-relaxed text-justify mb-20">
            A tecnologia AO Scan™ foi inspirada nas descobertas pioneiras de cientistas como Nikola Tesla, Albert Einstein, Marie Curie, Raymond Rife e muitos outros que acreditavam que, em seu nível mais fundamental, tudo é energia.
            Cada célula do corpo emite energia na forma de frequência, vibração e ressonância. Quando essas frequências estão em equilíbrio, elas ajudam a sustentar e otimizar o bem-estar geral.
            Essa tecnologia não invasiva faz parte de um campo em rápida evolução. Assim como a neurociência, ainda há muito a ser aprendido sobre a energia e seu impacto no corpo humano. Embora muito ainda seja desconhecido, estamos entusiasmados em continuar explorando as possibilidades inexploradas desse campo fascinante, com o objetivo de melhorar a vida das pessoas por meio de soluções baseadas em energia.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Features */}
          <div className="space-y-8" id="diferenciais"> {/* ID para a seção Diferenciais */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Diferenciais do AO Scan
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                O AO Scan se diferencia por ser uma ferramenta abrangente para medir e otimizar frequências,
                unindo análise profunda com frequências de suporte prontas para uso.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl" id="resultados"> {/* ID para a seção Resultados */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Resultados Comprovados
            </h3>
            <p className="text-gray-600 mb-6">
              Profissionais e clientes já experimentaram melhorias significativas:
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white cursor-pointer"
                onClick={() => navigate('/success-stories')}
              >
                Saiba Mais sobre os Benefícios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Hardware Requirements */}
        <div className="bg-gray-50 rounded-2xl p-8" id="requisitos"> {/* ID para a seção Requisitos */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Requisitos de Hardware
            </h3>
            <p className="text-gray-600">
              O AO Scan é projetado para ser acessível e fácil de usar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Computador ou Tablet</h4>
              <p className="text-sm text-gray-600">Windows, Mac ou dispositivo móvel com conexão à internet</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎧</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fones de Ouvido</h4>
              <p className="text-sm text-gray-600">Para transmissão precisa das frequências de harmonização</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Conexão Internet</h4>
              <p className="text-sm text-gray-600">Para acesso à plataforma e atualizações em tempo real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AOScanSection