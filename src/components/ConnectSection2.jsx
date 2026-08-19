import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { User, Mail, Phone, MapPin, Weight, Calendar, Upload, Mic, Instagram, MessageCircle } from 'lucide-react'

const GETFORM_ENDPOINT = 'https://getform.io/f/bpjxpvpb' // <-- cole aqui

const MAX_IMAGE_SIZE = 20 * 1024 * 1024      // 5 MB
const MAX_AUDIO_SIZE = 20 * 1024 * 1024     // 10 MB

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/jpg']
const ALLOWED_AUDIO_TYPES = ['audio/mpeg', 'audio/mp3', 'audio/mp4', 'audio/wav', 'audio/x-m4a']

const ConnectSection = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [formKey, setFormKey] = useState(Date.now()) // para resetar file inputs
  const [status, setStatus] = useState({ loading: false, ok: false, error: '' })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cep: '',
    weight: '',
    height: '',
    dob: '',
    selfie: null,
    voiceMemo: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, [fieldName]: file }))
  }

  function abrirWhatsAppLead(dados) {
    // Use E.164 sem "+" no wa.me. Ex.: Brasil (11) 91234-5678 -> 5511912345678
    const numero = '11971892558' // coloque aqui o da Lili (com DDI/DDD)
    const texto = encodeURIComponent(
      `Oi, Lili! Acabei de enviar o formulário no site.\n` +
      `Nome: ${dados.firstName} ${dados.lastName}\n` +
      `Email: ${dados.email}\n` +
      `Telefone: ${dados.phone}\n` +
      `CEP: ${dados.cep}\n` +
      `Peso: ${dados.weight} kg | Altura: ${dados.height} cm\n` +
      `Nascimento: ${dados.dob}`
    )
    const url = `https://wa.me/${numero}?text=${texto}`
    window.open(url, '_blank')
  }

  const validateFiles = () => {
    const errors = []

    // Selfie
    if (!formData.selfie) {
      errors.push('Envie uma selfie com fundo neutro.')
    } else {
      const selfie = formData.selfie

      if (!ALLOWED_IMAGE_TYPES.includes(selfie.type)) {
        errors.push('A selfie precisa ser JPG ou PNG.')
      }

      if (selfie.size > MAX_IMAGE_SIZE) {
        errors.push('A selfie deve ter no máximo 5 MB.')
      }
    }

    // Áudio
    if (!formData.voiceMemo) {
      errors.push('Envie o áudio de apresentação.')
    } else {
      const audio = formData.voiceMemo

      if (!ALLOWED_AUDIO_TYPES.includes(audio.type)) {
        errors.push('O áudio precisa ser MP3, MP4, WAV ou M4A.')
      }

      if (audio.size > MAX_AUDIO_SIZE) {
        errors.push('O áudio deve ter no máximo 10 MB.')
      }
    }

    if (errors.length > 0) {
      // Você pode usar alert ou setar no state para mostrar no layout
      alert(errors.join('\n'))
      return false
    }

    return true
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    // 1) Validação de arquivos
    const isValid = validateFiles()
    if (!isValid) return

    setStatus({ loading: true, ok: false, error: '' })

    try {
      // 2) (Opcional) validar duração do áudio
      // await validateAudioDuration(formData.voiceMemo)

      const fd = new FormData()
      // Campos de texto
      fd.append('firstName', formData.firstName)
      fd.append('lastName', formData.lastName)
      fd.append('email', formData.email)
      fd.append('phone', formData.phone)
      fd.append('cep', formData.cep)
      fd.append('weight', formData.weight)
      fd.append('height', formData.height)
      fd.append('dob', formData.dob)

      // Arquivos
      if (formData.selfie) {
        fd.append('selfie', formData.selfie, formData.selfie.name || 'selfie.jpg')
      }
      if (formData.voiceMemo) {
        fd.append('voiceMemo', formData.voiceMemo, formData.voiceMemo.name || 'audio.mp3')
      }

      // Metadados úteis
      fd.append('_subject', 'Novo Lead: Demonstração AO Scan')
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
      // abrirWhatsAppLead(formData)

      // Limpar tudo
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cep: '',
        weight: '',
        height: '',
        dob: '',
        selfie: null,
        voiceMemo: null
      })
      setFormKey(Date.now())

      alert('Recebido! Em breve entraremos em contato pelo WhatsApp ou e-mail.')
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
            Conheça sua Quantum Living Advocate e solicite sua demonstração exclusiva da tecnologia AO Scan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Lilian */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/src/assets/lili.png"
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
                  Por mais de 20 anos, construí minha trajetória no mundo corporativo, atuando em grandes empresas globais. Tenho dupla cidadania, brasileira e americana, mas sigo guiada por uma alma curiosa, sensível e profundamente brasileira.
                </p>

                <p>
                  Em 2022, meu corpo me convidou a escutar. Sintomas insistentes me levaram a buscar algo além do que eu já conhecia — e foi assim que a biorressonância e a terapia quântica entraram em cena. A transformação foi real: mais energia, menos sintomas, mais consciência sobre o meu próprio corpo.
                </p>

                <p>
                  Hoje, atuo como terapeuta integrativa com foco em Biorressonância e sou Doutoranda em Naturopatia pela Solex University School of Naturopathy (SUSN), unindo formação acadêmica, tecnologia e uma escuta sensível. Caminho entre dois mundos — o racional e o sutil — para ajudar outras pessoas a fazerem esse mesmo movimento de reconexão.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">
                    "Meu propósito é ser ponte entre ciência e intuição, tecnologia e natureza, informação e transformação — conectando Brasil e Estados Unidos."
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Vamos Manter Contato
              </h3>

              <div className="space-y-4">
                <a
                  href="https://instagram.com/aoscanbrazil"
                  target='blank'
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-pink-600" />
                  <div>
                    <div className="font-medium text-gray-900">Instagram</div>
                    <div className="text-sm text-gray-600">@aoscanbrasil</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/+5511971892558"
                  target='blank'
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:from-green-100 hover:to-blue-100 transition-colors"
                >
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp Business</div>
                    <div className="text-sm text-gray-600">Atendimento personalizado</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Demo Request Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solicite sua Demonstração
              </h3>
              <p className="text-gray-600">
                Preencha o formulário abaixo para solicitar sua demonstração exclusiva da tecnologia AO Scan
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu sobrenome"
                    required
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Location and Physical Info */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CEP *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="cep"
                      value={formData.cep}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="00000-000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Peso (kg) *
                  </label>
                  <div className="relative">
                    <Weight className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="70"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Altura (cm) *
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="170"
                    required
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data de Nascimento *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* File Uploads */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Selfie com fundo neutro *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'selfie')}
                      className="hidden"
                      id="selfie-upload"
                      required
                    />
                    <label htmlFor="selfie-upload" className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-700">Clique para enviar</span>
                      <span className="text-gray-500"> ou arraste a imagem aqui</span>
                    </label>
                    {formData.selfie && (
                      <p className="text-xs text-gray-600 mt-2">Selecionado: {formData.selfie.name}</p>
                    )}
                  </div>
                </div>

                {/* Áudio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Áudio de 10 segundos se apresentando *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                    <Mic className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept="audio/*,.mp3,.mp4"
                      onChange={(e) => handleFileChange(e, 'voiceMemo')}
                      className="hidden"
                      id="voice-upload"
                      required
                    />
                    <label htmlFor="voice-upload" className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-700">Clique para enviar</span>
                      <span className="text-gray-500"> arquivo de áudio (MP3, MP4)</span>
                    </label>
                    {formData.voiceMemo && (
                      <p className="text-xs text-gray-600 mt-2">Selecionado: {formData.voiceMemo.name}</p>
                    )}
                  </div>
                </div>
              </div>

              {status.error && (
                <p className="text-sm text-red-600 text-center">
                  {status.error}
                </p>
              )}


              {/* Submit Button */}
              <Button
                type="submit"
                disabled={status.loading}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-8 text-lg cursor-pointer disabled:opacity-60"
              >
                {status.loading ? 'Enviando…' : 'Solicitar Demonstração'}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Ao enviar este formulário, você concorda em receber comunicações sobre o AO Scan.
                Seus dados estão protegidos e não serão compartilhados com terceiros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection

