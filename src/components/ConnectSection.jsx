import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  MessageSquareText,
  Target,
  Sparkles,
  User,
  Mail,
  Phone,
  CheckCircle2
} from 'lucide-react'

// ======================================================
// COLE AQUI A URL DO WEB APP DO GOOGLE APPS SCRIPT
// Exemplo:
// https://script.google.com/macros/s/SEU_ID_AQUI/exec
// ======================================================
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwlzgAKFBdSuGt4Ipcea4ASz_seUYB4K1iZgRTOzbLfukR5TLUzNbXzqHuG9do6eUJd_A/exec'

const initialFormData = {
  name: '',
  whatsapp: '',
  email: '',
  primaryUse: '',
  context: '',
  phase: '',
  openToInvest: '',
  website: '' // honeypot anti-spam
}

const ConnectSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState(initialFormData)

  const [status, setStatus] = useState({
    loading: false,
    ok: false,
    error: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const formatWhatsapp = (value) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11)

    if (numbers.length <= 2) {
      return numbers
    }

    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    }

    if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    }

    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  }

  const handleWhatsappChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      whatsapp: formatWhatsapp(e.target.value)
    }))
  }

  const getUtmParams = () => {
    const params = new URLSearchParams(window.location.search)

    return {
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      utmContent: params.get('utm_content') || '',
      utmTerm: params.get('utm_term') || ''
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (status.loading) return

    setStatus({
      loading: true,
      ok: false,
      error: ''
    })

    try {
      // Honeypot preenchido = provável bot
      if (formData.website) {
        setStatus({
          loading: false,
          ok: true,
          error: ''
        })
        return
      }

      if (APPS_SCRIPT_URL === 'COLE_AQUI_A_URL_DO_APPS_SCRIPT') {
        throw new Error('A URL do Apps Script ainda não foi configurada.')
      }

      const utms = getUtmParams()

      const payload = {
        name: formData.name.trim(),
        whatsapp: formData.whatsapp.trim(),
        email: formData.email.trim(),

        primaryUse: formData.primaryUse,
        context: formData.context.trim(),
        phase: formData.phase,
        openToInvest: formData.openToInvest,

        page: window.location.href,
        referrer: document.referrer || '',

        ...utms
      }

      const body = new URLSearchParams()

      Object.entries(payload).forEach(([key, value]) => {
        body.append(key, value ?? '')
      })

      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body
      })

      if (!response.ok) {
        throw new Error('Não foi possível enviar sua solicitação.')
      }

      let result = null

      try {
        result = await response.json()
      } catch {
        // Caso o Apps Script não retorne JSON,
        // consideramos sucesso se o HTTP foi 2xx.
      }

      if (result && result.success === false) {
        throw new Error(
          result.message || 'Não foi possível enviar sua solicitação.'
        )
      }

      setFormData(initialFormData)

      setStatus({
        loading: false,
        ok: true,
        error: ''
      })
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)

      setStatus({
        loading: false,
        ok: false,
        error:
          error?.message ||
          'Não foi possível enviar. Tente novamente em instantes.'
      })
    }
  }

  const handleNewSubmission = () => {
    setFormData(initialFormData)

    setStatus({
      loading: false,
      ok: false,
      error: ''
    })
  }

  return (
    <section
      id="connect"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
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
            Conheça sua Quantum Living Advocate e Agende sua Conversa de
            Direcionamento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* COLUNA ESQUERDA */}
          <div className="space-y-8">

            {/* Sobre Lilian */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/assets/lili.png"
                    alt="AO Scan Brasil"
                    className="h-64 w-64"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Lilian Machado de Souza
                </h3>

                <p className="text-blue-600 font-medium">
                  Terapeuta Integrativa e Doutoranda em Naturopatia
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Por mais de 20 anos, construí minha trajetória no mundo
                  corporativo, atuando em grandes empresas globais. Tenho dupla
                  cidadania, brasileira e americana, mas sigo guiada por uma
                  alma curiosa, sensível e profundamente brasileira.
                </p>

                <p>
                  Em 2022, meu corpo me convidou a escutar. Sintomas insistentes
                  me levaram a buscar algo além do que eu já conhecia — e foi
                  assim que a biorressonância e a terapia quântica entraram em
                  cena. A transformação foi real: mais energia, menos sintomas,
                  mais consciência sobre o meu próprio corpo.
                </p>

                <p>
                  Hoje, atuo como terapeuta integrativa com foco em
                  Biorressonância e sou Doutoranda em Naturopatia pela Solex
                  University School of Naturopathy (SUSN), unindo formação
                  acadêmica, tecnologia e uma escuta sensível. Caminho entre
                  dois mundos — o racional e o sutil — para ajudar outras
                  pessoas a fazerem esse mesmo movimento de reconexão.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">
                    "Meu propósito é ser ponte entre ciência e intuição,
                    tecnologia e natureza, informação e transformação —
                    conectando Brasil e Estados Unidos."
                  </p>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Vamos Manter Contato
              </h3>

              <div className="space-y-4">
                <a
                  href="https://instagram.com/aoscanbrazil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-white shadow flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-pink-600" />
                  </div>

                  <div>
                    <div className="font-medium text-gray-900">
                      Instagram
                    </div>

                    <div className="text-sm text-gray-600">
                      @aoscanbrasil
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/5511971892558?text=Ol%C3%A1!%20Quero%20agendar%20minha%20Conversa%20de%20Direcionamento%20para%20avaliar%20o%20uso%20do%20AO%20Scan%20no%20meu%20caso."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:from-green-100 hover:to-blue-100 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-white shadow flex items-center justify-center">
                    <MessageSquareText className="h-5 w-5 text-green-600" />
                  </div>

                  <div>
                    <div className="font-medium text-gray-900">
                      WhatsApp Business
                    </div>

                    <div className="text-sm text-gray-600">
                      Atendimento personalizado
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div>
            <Dialog>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Agende sua{' '}
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      Conversa de Direcionamento
                    </span>
                  </h3>

                  <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Uma conversa estratégica para compreender seu momento
                    atual, seus objetivos e avaliar, com critério, se o AO Scan
                    — da forma certa — faz sentido para você ou para a sua
                    clínica.
                  </p>
                </div>

                <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">
                      Esta não é uma demonstração gratuita nem uma apresentação
                      genérica da tecnologia.
                    </strong>
                  </p>

                  <p>
                    A Conversa de Direcionamento é um encontro individual e
                    estratégico, criado para entender:
                  </p>

                  <ul className="space-y-2 pl-5 list-disc text-gray-700">
                    <li>onde você está hoje,</li>
                    <li>
                      o que você busca organizar ou estruturar com o AO Scan,
                    </li>
                    <li>
                      e se existe alinhamento real para avançarmos juntos.
                    </li>
                  </ul>

                  <p>
                    Durante essa conversa, eu avalio se o AO Scan é adequado
                    para o seu momento, qual abordagem faz mais sentido e quais
                    seriam os próximos passos possíveis — com clareza e
                    responsabilidade.
                  </p>

                  <p>
                    Caso exista alinhamento, você recebe um direcionamento
                    objetivo.
                  </p>

                  <p>
                    Caso contrário, você sai com mais consciência e critério
                    sobre o caminho a seguir.
                  </p>

                  <div className="mt-6 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-green-50 p-4">
                    <p className="text-sm md:text-[15px] text-gray-700">
                      <span className="font-semibold text-gray-900">
                        Essa conversa é indicada
                      </span>{' '}
                      para quem busca profundidade, clareza e estrutura — não
                      apenas curiosidade sobre a ferramenta.
                    </p>
                  </div>

                  <div className="pt-6">
                    <DialogTrigger asChild>
                      <Button
                        onClick={handleNewSubmission}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-8 text-lg cursor-pointer"
                      >
                        Solicitar conversa de direcionamento
                      </Button>
                    </DialogTrigger>

                    <p className="mt-3 text-xs text-gray-500 text-center">
                      🔒 As conversas são limitadas e realizadas mediante
                      solicitação e análise prévia.
                    </p>
                  </div>
                </div>
              </div>

              {/* MODAL */}
              <DialogContent className="w-[95vw] max-w-2xl p-0 overflow-hidden">
                <div className="p-6 sm:p-8">

                  {status.ok ? (

                    /* ==========================================
                       TELA DE SUCESSO
                    ========================================== */
                    <div className="py-10 text-center">
                      <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="h-9 w-9 text-green-600" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Solicitação recebida!
                      </h3>

                      <p className="mt-4 text-gray-600 max-w-md mx-auto leading-relaxed">
                        Recebemos suas informações. Nossa equipe analisará seu
                        momento e, havendo alinhamento, entraremos em contato
                        pelo WhatsApp informado.
                      </p>

                      <div className="mt-6 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-green-50 p-4 max-w-md mx-auto">
                        <p className="text-sm text-gray-700">
                          Fique atento ao seu WhatsApp para não perder nosso
                          contato.
                        </p>
                      </div>
                    </div>

                  ) : (

                    /* ==========================================
                       FORMULÁRIO
                    ========================================== */
                    <>
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-gray-900">
                          Solicitação de Conversa de Direcionamento
                        </DialogTitle>

                        <DialogDescription className="text-gray-600">
                          As perguntas abaixo me ajudam a entender melhor seu
                          contexto antes da nossa conversa.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="mt-6 max-h-[70vh] overflow-y-auto pr-1">

                        <form
                          onSubmit={handleSubmit}
                          className="space-y-8"
                        >

                          {/* ======================================
                              DADOS DE CONTATO
                          ====================================== */}

                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                              Primeiro, como podemos falar com você?
                            </h4>

                            <div className="space-y-4">

                              {/* Nome */}
                              <div>
                                <label
                                  htmlFor="name"
                                  className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                  Nome completo *
                                </label>

                                <div className="relative">
                                  <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                  <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="name"
                                    placeholder="Seu nome completo"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                  />
                                </div>
                              </div>

                              {/* WhatsApp */}
                              <div>
                                <label
                                  htmlFor="whatsapp"
                                  className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                  WhatsApp *
                                </label>

                                <div className="relative">
                                  <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                  <input
                                    id="whatsapp"
                                    type="tel"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleWhatsappChange}
                                    required
                                    autoComplete="tel"
                                    inputMode="tel"
                                    placeholder="(11) 99999-9999"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                  />
                                </div>
                              </div>

                              {/* E-mail */}
                              <div>
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                  E-mail *
                                </label>

                                <div className="relative">
                                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                  <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="email"
                                    placeholder="seuemail@exemplo.com"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                  />
                                </div>
                              </div>

                            </div>
                          </div>

                          <hr className="border-gray-200" />

                          {/* ======================================
                              PERGUNTA 1
                          ====================================== */}

                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-3">
                              1) Você busca o AO Scan principalmente para: *
                            </label>

                            <div className="space-y-2">
                              {[
                                {
                                  value: 'Uso pessoal / autocuidado',
                                  label: 'Uso pessoal / autocuidado'
                                },
                                {
                                  value:
                                    'Uso profissional / clínica / atendimentos',
                                  label:
                                    'Uso profissional / clínica / atendimentos'
                                },
                                {
                                  value:
                                    'Ainda não sei, quero entender melhor',
                                  label:
                                    'Ainda não sei, quero entender melhor'
                                }
                              ].map((opt) => (
                                <label
                                  key={opt.value}
                                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/40 transition cursor-pointer"
                                >
                                  <input
                                    type="radio"
                                    name="primaryUse"
                                    value={opt.value}
                                    checked={
                                      formData.primaryUse === opt.value
                                    }
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 h-4 w-4"
                                  />

                                  <span className="text-gray-700">
                                    {opt.label}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* ======================================
                              PERGUNTA 2
                          ====================================== */}

                          <div>
                            <label
                              htmlFor="context"
                              className="block text-sm font-semibold text-gray-800 mb-2"
                            >
                              2) Em poucas palavras, o que você sente que
                              precisa organizar, destravar ou estruturar neste
                              momento? *
                            </label>

                            <div className="relative">
                              <Target className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

                              <textarea
                                id="context"
                                name="context"
                                value={formData.context}
                                onChange={handleInputChange}
                                required
                                rows={4}
                                placeholder="Ex: saúde, atendimentos, clareza profissional, estrutura de clínica, monetização…"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none outline-none"
                              />
                            </div>
                          </div>

                          {/* ======================================
                              PERGUNTA 3
                          ====================================== */}

                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-3">
                              3) Em qual fase você se encontra hoje? *
                            </label>

                            <div className="space-y-2">
                              {[
                                {
                                  value: 'Exploração inicial',
                                  label: 'Exploração inicial'
                                },
                                {
                                  value:
                                    'Já conheço o AO Scan, mas preciso de direção',
                                  label:
                                    'Já conheço o AO Scan, mas preciso de direção'
                                },
                                {
                                  value:
                                    'Estou pronto(a) para estruturar algo com mais seriedade',
                                  label:
                                    'Estou pronto(a) para estruturar algo com mais seriedade'
                                }
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

                                  <span className="text-gray-700">
                                    {opt.label}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* ======================================
                              PERGUNTA 4
                          ====================================== */}

                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-3">
                              4) Se a conversa fizer sentido, você está aberto(a)
                              a investir em acompanhamento especializado? *
                            </label>

                            <div className="space-y-2">
                              {[
                                {
                                  value: 'Sim',
                                  label: 'Sim'
                                },
                                {
                                  value: 'Talvez',
                                  label: 'Talvez'
                                },
                                {
                                  value: 'Não no momento',
                                  label: 'Não no momento'
                                }
                              ].map((opt) => (
                                <label
                                  key={opt.value}
                                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/40 transition cursor-pointer"
                                >
                                  <input
                                    type="radio"
                                    name="openToInvest"
                                    value={opt.value}
                                    checked={
                                      formData.openToInvest === opt.value
                                    }
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 h-4 w-4"
                                  />

                                  <span className="text-gray-700">
                                    {opt.label}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* ======================================
                              HONEYPOT ANTISPAM
                          ====================================== */}

                          <div
                            aria-hidden="true"
                            className="absolute -left-[9999px] w-px h-px overflow-hidden"
                          >
                            <label htmlFor="website">
                              Não preencha este campo
                            </label>

                            <input
                              id="website"
                              type="text"
                              name="website"
                              value={formData.website}
                              onChange={handleInputChange}
                              tabIndex={-1}
                              autoComplete="off"
                            />
                          </div>

                          {/* ======================================
                              ERRO
                          ====================================== */}

                          {status.error && (
                            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                              <p className="text-sm text-red-700 text-center">
                                {status.error}
                              </p>
                            </div>
                          )}

                          {/* ======================================
                              BOTÃO
                          ====================================== */}

                          <Button
                            type="submit"
                            disabled={status.loading}
                            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-8 text-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {status.loading
                              ? 'Enviando…'
                              : 'Enviar solicitação'}
                          </Button>

                          <p className="text-xs text-gray-500 text-center leading-relaxed">
                            Ao enviar este formulário, você concorda em receber
                            comunicações sobre o AO Scan. Seus dados estão
                            protegidos e não serão compartilhados com terceiros.
                          </p>

                        </form>
                      </div>
                    </>
                  )}

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