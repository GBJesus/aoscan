import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Star, Quote, ArrowRight } from 'lucide-react'

const SuccessStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const testimonials = [
    {
      name: "Bones Turner",
      role: "Terapeuta Integrativo",
      content: "Esta empresa sempre ajuda quando há dúvidas sobre os novos recursos. Amo a equipe que está lá para nos orientar através de nossas perguntas intermináveis. Obrigado, Solex, por estar sintonizado com a tecnologia de ponta que continua a nos ajudar a nos tornarmos uma nação de bem-estar e encorajadores.",
      rating: 5,
      image: "👨‍⚕️"
    },
    {
      name: "Tammy Ward",
      role: "Usuária AO Scan",
      content: "Quero que todos saibam sobre o AO SCANNER!! Eu amo vocês, Solex, e não posso agradecer o suficiente por trazer isso para todos nós!! Para sempre grata!!",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Jennifer Baird McCracken",
      role: "Profissional de Saúde",
      content: "Esta empresa tem uma visão de ajudar as pessoas a otimizar todos os aspectos de sua saúde, física, mental e emocionalmente. O novo AOScanner portátil é incrível e funciona! Nós o usamos todos os dias e sentimos que teve um efeito muito positivo em nós. Recomendamos altamente esta empresa!",
      rating: 5,
      image: "👩‍⚕️"
    }
  ]

  const results = [
    {
      title: "Melhora do Sono",
      description: "Clientes relatam qualidade de sono significativamente melhor após as primeiras sessões",
      percentage: "92%",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Redução do Estresse",
      description: "Diminuição notável dos níveis de estresse e ansiedade",
      percentage: "88%",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Mais Energia",
      description: "Aumento da energia e vitalidade no dia a dia",
      percentage: "85%",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Equilíbrio Emocional",
      description: "Maior estabilidade emocional e clareza mental",
      percentage: "90%",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Histórias de{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Sucesso
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como o AO Scan tem transformado a vida de profissionais e clientes ao redor do mundo
          </p>
        </div>

        {/* Results Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* <div className={`text-3xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-2`}>
                {result.percentage}
              </div> */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.title}</h3>
              <p className="text-sm text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                <p className="text-gray-700 italic pl-6">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Caso de Estudo: Recuperação em 24 Horas
              </h3>
              <p className="text-gray-600 mb-6">
                Uma cliente apresentou melhora significativa dos sintomas de broncopneumonia em menos de 24 horas 
                após a primeira sessão com AO Scan, demonstrando o potencial da tecnologia de biorressonância.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Redução da inflamação pulmonar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Melhora da respiração</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Aumento da energia e vitalidade</span>
                </div>
              </div>

              {/* <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white">
                Leia Mais Casos de Sucesso
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Resultados Mensuráveis</h4>
                <p className="text-gray-600 mb-4">
                  Acompanhamos o progresso de cada cliente através de relatórios detalhados e análises frequenciais.
                </p>
                {/* <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">98.5%</div>
                  <div className="text-sm text-gray-600">Taxa de Satisfação</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
