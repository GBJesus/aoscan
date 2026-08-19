import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqItems = [
    {
      question: "O AO Scan é científico mesmo?",
      answer: "O AO Scan baseia-se nos princípios da física quântica e biorressonância, campos reconhecidos pela comunidade científica. A tecnologia utiliza frequências específicas para análise e harmonização energética, similar a outras tecnologias médicas que trabalham com ondas e frequências. Embora seja uma abordagem integrativa, muitos profissionais de saúde ao redor do mundo já incorporaram essa tecnologia em suas práticas."
    },
    {
      question: "O AO Scan substitui exames tradicionais?",
      answer: "Não, o AO Scan não substitui exames médicos tradicionais nem diagnósticos médicos. É uma ferramenta complementar que oferece informações sobre o estado energético do corpo. Sempre recomendamos que consulte seu médico para questões de saúde e use o AO Scan como uma ferramenta adicional de bem-estar e prevenção."
    },
    {
      question: "É muito caro para investir agora?",
      answer: "O AO Scan oferece excelente custo-benefício quando comparado a outras tecnologias de biorressonância. Com uma assinatura mensal acessível, você tem acesso a uma tecnologia completa, suporte em português e materiais exclusivos. Além disso, oferecemos teste de 6 dias para que você possa experimentar antes de se comprometer."
    },
    {
      question: "Meus clientes vão entender e aceitar?",
      answer: "A tecnologia AO Scan é apresentada de forma clara e educativa. Fornecemos materiais explicativos, relatórios visuais e treinamento completo para que você possa explicar os benefícios aos seus clientes. Muitos profissionais relatam que os clientes ficam fascinados com a tecnologia e os resultados obtidos."
    },
    {
      question: "Preciso estudar muito para usar?",
      answer: "Não! O AO Scan foi projetado para ser intuitivo e acessível. Oferecemos protocolos pré-programados que podem ser usados imediatamente, mesmo sem formação prévia em naturopatia ou terapias energéticas. Nosso treinamento em português e suporte contínuo garantem que você se sinta confiante desde o primeiro dia."
    },
    {
      question: "Funciona mesmo à distância?",
      answer: "Sim! O AO Scan trabalha com informações quânticas e frequenciais, que não são limitadas pela distância física. Muitos profissionais atendem clientes remotamente com excelentes resultados. A tecnologia permite análises e envio de frequências de harmonização independentemente da localização geográfica."
    },
    {
      question: "Vou ficar dependente de tecnologia?",
      answer: "O AO Scan é uma ferramenta que complementa e potencializa suas habilidades terapêuticas, não as substitui. Você mantém sua essência humana no atendimento, usando a tecnologia para obter informações mais precisas e oferecer recursos adicionais aos seus clientes. É como ter um assistente tecnológico que amplia suas possibilidades."
    },
    {
      question: "Que tipo de suporte está disponível?",
      answer: "Oferecemos suporte completo em português, incluindo treinamentos gravados, grupo exclusivo no Telegram, materiais traduzidos, e suporte técnico. Nossa comunidade brasileira está sempre disponível para tirar dúvidas e compartilhar experiências."
    },
    {
      question: "Posso usar o AO Scan em minha clínica?",
      answer: "Sim! O AO Scan é portátil e pode ser usado em qualquer ambiente - clínicas, consultórios, domicílio ou até mesmo remotamente. Muitos profissionais integram a tecnologia em suas práticas existentes, oferecendo um diferencial competitivo aos seus clientes."
    },
    {
      question: "Há garantia de resultados?",
      answer: "Embora não possamos garantir resultados específicos (pois cada pessoa é única), oferecemos teste de 6 dias para que você possa experimentar a tecnologia. Milhares de usuários ao redor do mundo relatam melhorias significativas em bem-estar, sono, energia e equilíbrio emocional."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre o AO Scan e como ele pode transformar sua prática
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 cursor-pointer">
                  {openItems[index] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>

              {openItems[index] && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer todas as suas questões sobre o AO Scan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/+5511971892558" target='blank'>
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
                  Falar no WhatsApp
                </button>
              </a>
              {/* <a href="/connect">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
                  Agendar Demonstração
                </button>
              </a> */}
              <div className="">
                <Button
                  size="lg"
                  onClick={() => navigate('/connect')}
                  className="border-2 border-blue-600 text-blue-600 bg-blue-50 px-6 py-5 rounded-lg font-lg cursor-pointer hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
                >
                  Agendar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
