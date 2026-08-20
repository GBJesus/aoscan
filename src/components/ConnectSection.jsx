import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { MessageSquareText, Target, Sparkles } from 'lucide-react'

const GETFORM_ENDPOINT = 'https://getform.io/f/bpjxpvpb' // <-- cole aqui

const ConnectSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [status, setStatus] = useState({ loading: false, ok: false, error: '' })

  const [formData, setFormData] = useState({
    primaryUse: '', // Pergunta 1
    context: '', // Pergunta 2
    phase: '', // Pergunta 3
    openToInvest: '' // Pergunta 4
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: false, error: '' })

    try {
      const fd = new FormData()

      fd.append('primaryUse', formData.primaryUse)
      fd.append('context', formData.context)
      fd.append('phase', formData.phase)
      fd.append('openToInvest', formData.openToInvest)

      // Metadados úteis
      fd.append('_subject', 'Solicitação de Conversa de Direcionamento')
      fd.append('_page', window.location.href)
      fd.append('_gotcha', '')

      const resp = await fetch(GETFORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd
      })

      if (!resp.ok) {
        const errJson = await resp.json().catch(() => null)
        const msg = errJson?.message || errJson?.error || 'Falha ao enviar. Tente novamente.'
        throw new Error(msg)
      }

      setStatus({ loading: false, ok: true, error: '' })

      // Limpar
      setFormData({
        primaryUse: '',
        context: '',
        phase: '',
        openToInvest: ''
      })

      alert('Recebido! Em breve entraremos em contato para sua conversa de direcionamento.')
    } catch (err) {
      console.error(err)
      setStatus({ loading: false, ok: false, error: err.message || 'Erro ao enviar' })
      alert(`Ops! ${err.message || 'Tente novamente em instantes.'}`)
    }
  }

  return (
    <section id="connect" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos nos{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Conectar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça sua Quantum Living Advocate e Agende sua Conversa de Direcionamento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Lilian (mantido igual ao seu) */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/lili.png" alt="AO Scan Brasil" className="h-64 w-64" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Lilian Machado de Souza</h3>
                <p className="text-blue-600 font-medium">Terapeuta Integrativa e Doutoranda em Naturopatia</p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Por mais de 20 anos, construí minha trajetória no mundo corporativo, atuando em grandes empresas
                  globais. Tenho dupla cidadania, brasileira e americana, mas sigo guiada por uma alma curiosa,
                  sensível e profundamente brasileira.
                </p>

                <p>
                  Em 2022, meu corpo me convidou a escutar. Sintomas insistentes me levaram a buscar algo além do que eu
                  já conhecia — e foi assim que a biorressonância e a terapia quântica entraram em cena. A transformação
                  foi real: mais energia, menos sintomas, mais consciência sobre o meu próprio corpo.
                </p>

                <p>
                  Hoje, atuo como terapeuta integrativa com foco em Biorressonância e sou Doutoranda em Naturopatia pela
                  Solex University School of Naturopathy (SUSN), unindo formação acadêmica, tecnologia e uma escuta
                  sensível. Caminho entre dois mundos — o racional e o sutil — para ajudar outras pessoas a fazerem esse
                  mesmo movimento de reconexão.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">
                    "Meu propósito é ser ponte entre ciência e intuição, tecnologia e natureza, informação e
                    transformação — conectando Brasil e Estados Unidos."
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Links (mantido igual ao seu) */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Vamos Manter Contato</h3>

              <div className="space-y-4">
                <a
                  href="https://instagram.com/aoscanbrazil"
                  target="blank"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-white shadow flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Instagram</div>
                    <div className="text-sm text-gray-600">@aoscanbrasil</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/5511971892558?text=Ol%C3%A1!%20Quero%20agendar%20minha%20Conversa%20de%20Direcionamento%20para%20avaliar%20o%20uso%20do%20AO%20Scan%20no%20meu%20caso."
                  target="blank"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:from-green-100 hover:to-blue-100 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-white shadow flex items-center justify-center">
                    <MessageSquareText className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp Business</div>
                    <div className="text-sm text-gray-600">Atendimento personalizado</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna direita: texto + botão + modal com formulário */}
          <div>
            <Dialog>
              {/* Card do texto (sem o formulário) */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Agende sua{' '}
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      Conversa de Direcionamento
                    </span>
                  </h3>

                  <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Uma conversa estratégica para compreender seu momento atual, seus objetivos e avaliar, com critério,
                    se o AO Scan — da forma certa — faz sentido para você ou para a sua clínica.
                  </p>
                </div>

                <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">
                      Esta não é uma demonstração gratuita nem uma apresentação genérica da tecnologia.
                    </strong>
                  </p>

                  <p>A Conversa de Direcionamento é um encontro individual e estratégico, criado para entender:</p>

                  <ul className="space-y-2 pl-5 list-disc text-gray-700">
                    <li>onde você está hoje,</li>
                    <li>o que você busca organizar, ou estruturar com o AO Scan</li>
                    <li>e se existe alinhamento real para avançarmos juntos.</li>
                  </ul>

                  <p>
                    Durante essa conversa, eu avalio se o AO Scan é adequado para o seu momento, qual abordagem faz mais
                    sentido e quais seriam os próximos passos possíveis — com clareza e responsabilidade.
                  </p>

                  <p>Caso exista alinhamento, você recebe um direcionamento objetivo.</p>

                  <p>Caso contrário, você sai com mais consciência e critério sobre o caminho a seguir.</p>

                  <div className="mt-6 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-green-50 p-4">
                    <p className="text-sm md:text-[15px] text-gray-700">
                      <span className="font-semibold text-gray-900">Essa conversa é indicada</span> para quem busca
                      profundidade, clareza e estrutura — não apenas curiosidade sobre a ferramenta.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-8 text-lg cursor-pointer">
                        Solicitar conversa de direcionamento
                      </Button>
                    </DialogTrigger>

                    <p className="mt-3 text-xs text-gray-500 text-center">
                      🔒 As conversas são limitadas e realizadas mediante solicitação e análise prévia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal */}
              <DialogContent className="w-[95vw] max-w-2xl p-0 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                      Solicitação de Conversa de Direcionamento
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                      As perguntas abaixo me ajudam a entender melhor seu contexto antes da nossa conversa.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6 max-h-[70vh] overflow-y-auto pr-1">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Pergunta 1 */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-3">
                          1) Você busca o AO Scan principalmente para: *
                        </label>

                        <div className="space-y-2">
                          {[
                            { value: 'Uso pessoal / autocuidado', label: 'Uso pessoal / autocuidado' },
                            {
                              value: 'Uso profissional / clínica / atendimentos',
                              label: 'Uso profissional / clínica / atendimentos'
                            },
                            { value: 'Ainda não sei, quero entender melhor', label: 'Ainda não sei, quero entender melhor' }
                          ].map((opt) => (
                            <label
                              key={opt.value}
                              className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/40 transition cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="primaryUse"
                                value={opt.value}
                                checked={formData.primaryUse === opt.value}
                                onChange={handleInputChange}
                                required
                                className="mt-1 h-4 w-4"
                              />
                              <span className="text-gray-700">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Pergunta 2 */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                          2) Em poucas palavras, o que você sente que precisa organizar, destravar ou estruturar neste
                          momento? *
                        </label>

                        <div className="relative">
                          <Target className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <textarea
                            name="context"
                            value={formData.context}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            placeholder="Ex: saúde, atendimentos, clareza profissional, estrutura de clínica, monetização…"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          />
                        </div>
                      </div>

                      {/* Pergunta 3 */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-3">
                          3) Em qual fase você se encontra hoje? *
                        </label>

                        <div className="space-y-2">
                          {[
                            { value: 'Exploração inicial', label: 'Exploração inicial' },
                            { value: 'Já conheço o AO Scan, mas preciso de direção', label: 'Já conheço o AO Scan, mas preciso de direção' },
                            { value: 'Estou pronto(a) para estruturar algo com mais seriedade', label: 'Estou pronto(a) para estruturar algo com mais seriedade' }
                          ].map((opt) => (
                            <label
                              key={opt.value}
                              className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/40 transition cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="phase"
                                value={opt.value}
                                checked={formData.phase === opt.value}
                                onChange={handleInputChange}
                                required
                                className="mt-1 h-4 w-4"
                              />
                              <span className="text-gray-700">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Pergunta 4 */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-3">
                          4) Se a conversa fizer sentido, você está aberto(a) a investir em acompanhamento especializado? *
                        </label>

                        <div className="space-y-2">
                          {[
                            { value: 'Sim', label: 'Sim' },
                            { value: 'Talvez', label: 'Talvez' },
                            { value: 'Não no momento', label: 'Não no momento' }
                          ].map((opt) => (
                            <label
                              key={opt.value}
                              className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/40 transition cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="openToInvest"
                                value={opt.value}
                                checked={formData.openToInvest === opt.value}
                                onChange={handleInputChange}
                                required
                                className="mt-1 h-4 w-4"
                              />
                              <span className="text-gray-700">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {status.error && <p className="text-sm text-red-600 text-center">{status.error}</p>}

                      <Button
                        type="submit"
                        disabled={status.loading}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-8 text-lg cursor-pointer disabled:opacity-60"
                      >
                        {status.loading ? 'Enviando…' : 'Enviar solicitação'}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        Ao enviar este formulário, você concorda em receber comunicações sobre o AO Scan.
                        Seus dados estão protegidos e não serão compartilhados com terceiros.
                      </p>
                    </form>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection