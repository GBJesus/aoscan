import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Check, Gift, Users, BookOpen, MessageCircle, Music, ArrowRight, Clock } from 'lucide-react'

const JoinSection = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Como usar a plataforma desde o primeiro dia",
      description: "Guia completo para começar a usar o AO Scan imediatamente"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Passo a passo da configuração",
      description: "Configuração detalhada para otimizar sua experiência"
    }
  ]

  const nichesBenefits = [
    {
      title: "Para Terapeutas",
      benefits: [
        "Relatórios detalhados e visuais para consultas",
        "Economia de tempo com check-ups em minutos",
        "Diferencial competitivo no mercado",
        "Aumento da fidelização de clientes"
      ],
      icon: "🩺"
    },
    {
      title: "Para Iniciantes",
      benefits: [
        "Interface intuitiva e fácil de usar",
        "Protocolos pré-programados prontos",
        "Não requer formação prévia em terapias",
        "Suporte completo em português"
      ],
      icon: "🌱"
    },
    {
      title: "Para Autocuidado",
      benefits: [
        "Monitoramento pessoal da saúde energética",
        "Frequências de harmonização personalizadas",
        "Uso domiciliar seguro e prático",
        "Melhoria contínua do bem-estar"
      ],
      icon: "💚"
    }
  ]

  const exclusiveBonuses = [
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Kit de Boas-vindas Digital",
      description: "Manual AO Scan em português e guia rápido de uso",
      value: "R$ 297"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Treinamento Básico Completo",
      description: "Acesso ao treinamento em português",
      value: "R$ 497"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Grupo Fechado no Telegram",
      description: "PDFs traduzidos, playlists e materiais exclusivos",
      value: "R$ 197"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Playlist Personalizada",
      description: "1 playlist de frequências criada especialmente para você",
      value: "R$ 147"
    }
  ]

  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Junte-se à{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Revolução
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Torne-se parte da comunidade AO Scan Brasil e transforme sua prática profissional ou jornada de autocuidado
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Acesse a Plataforma Oficial Solex
              </h3>
              <p className="text-gray-600 mb-6">
                Clique no botão abaixo para acessar diretamente a plataforma oficial da Solex e começar sua jornada com o AO Scan.
              </p>

              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fshop.solexnation.com%2Faoscanbrasil%2Fhome%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadymLSJi_Tafk6sOlLKDGuuSGXIkEZPNiJpwT4LlRbmz3MczVWiKXonKEGn4w_aem_8mAsWpq_C9KZEDiOJdlurQ&e=AT35EuYKS9Q7uYMkNEgrSAW3vv9S_G7MIsaLkIwKFgT4RhBl-Kobi9bOZ4cOCIBBhPc8aWFfOxZ5aRQbju24OMW8RyVlFdot9h1bzivzFfUAkItnExDHmK7cxQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 text-lg mb-4 cursor-pointer"
                >
                  Acessar Plataforma Solex
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Teste por 6 Dias</h4>
                <p className="text-gray-600 text-sm">
                  Não quer fechar a assinatura ainda? Experimente nossa versão de teste por 6 dias!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Ao se inscrever, você terá acesso a:
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg text-blue-600">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits by Niche */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Benefícios por Área de Atuação
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {nichesBenefits.map((niche, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 transition-colors">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{niche.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900">{niche.title}</h4>
                </div>
                <div className="space-y-3">
                  {niche.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusive Bonuses */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bônus Exclusivos
            </h3>
            <p className="text-gray-600">
              Materiais e recursos únicos disponíveis apenas para membros da comunidade AO Scan Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {exclusiveBonuses.map((bonus, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="flex justify-center mb-4 text-orange-500">
                  {bonus.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{bonus.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{bonus.description}</p>
                <div className="text-lg font-bold text-orange-600">{bonus.value}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-white rounded-lg p-4 shadow-lg mb-6">
              <div className="text-2xl font-bold text-green-600">Valor Total: R$ 1.138</div>
              <div className="text-lg text-gray-600">Seu investimento: Apenas a assinatura mensal</div>
            </div>

            <div>
              <Button
                size="lg"
                onClick={() => navigate('/connect')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg cursor-pointer"
              >
                Garantir Meus Bônus Agora
                <Gift className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinSection
