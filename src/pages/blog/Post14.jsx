import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post14 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/blog"
        className="inline-flex items-center text-blue-600 hover:text-purple-800 mb-12 transition-colors font-medium cursor-pointer"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para o Blog
      </Link>

      <article className="space-y-16">

        {/* HERO */}
        <motion.header
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Tudo Sobre o Módulo MindSync
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Você se lembra da última vez em que disse algo positivo sobre si mesmo?
              Muitas vezes, nossas palavras internas são mais duras do que imaginamos.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Segundo a National Science Foundation, uma pessoa tem em média de <strong>12.000 a 60.000 pensamentos por dia</strong> — sendo que:
              <br />• 80% são negativos
              <br />• 95% são repetitivos
            </p>
          </div>

          <img
            src="/assets/blog-post-14-1.webp"
            alt="MindSync AO Scan"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* INTRODUÇÃO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <p className="text-gray-700 leading-relaxed">
            Esse padrão limita o potencial humano, pois os pensamentos moldam palavras e, por fim,
            criam a realidade que vivemos.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Uma forma comprovada de transformar essa narrativa é por meio das <strong>afirmações positivas</strong> —
            frases que reprogramam a mente subconsciente, fortalecem a autoconfiança e criam novas conexões neurais
            (neuroplasticidade).
          </p>
        </motion.section>

        {/* O QUE É */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-indigo-700">
            O Que é o MindSync?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O <strong>MindSync</strong> é um módulo do AO Scan projetado para programar afirmações positivas usando a sua própria voz.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>🎧 Processo binaural (diferença auditiva de 8 Hz em cada ouvido)</li>
            <li>🧠 Reprogramação subconsciente (superando barreiras mentais)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Esse processo cria uma terceira frequência no cérebro, capaz de ultrapassar bloqueios subconscientes
            e permitir que a mente absorva mensagens positivas com mais eficácia.
          </p>
        </motion.section>

        {/* COMO USAR */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Como Usar o MindSync
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Acesse o módulo: faça login no AO Scan e selecione AO MindSync.</li>
            <li>
              Escolha um script: use os disponíveis ou grave um personalizado.
              <p className="ml-5 text-sm text-gray-600">
                Exemplos: I AM, Prosperidade, Confiança, Memória, Manhã, Noite.
              </p>
            </li>
            <li>Grave sua voz: fale apenas as afirmações que ressoarem com você.</li>
            <li>
              Ajuste as configurações:
              <p className="ml-5 text-sm text-gray-600">• Offset Hz – separação binaural (baixo, médio, alto)</p>
              <p className="ml-5 text-sm text-gray-600">• Trilha musical – escolha a música de fundo</p>
              <p className="ml-5 text-sm text-gray-600">• Volumes – ajuste da música e da voz</p>
            </li>
            <li>
              Ouça sua gravação: pressione Play.
              <p className="ml-5 text-sm text-gray-600">
                O áudio toca continuamente até sair do módulo. As gravações não ficam salvas automaticamente.
              </p>
            </li>
          </ol>
        </motion.section>

        {/* APLICAÇÕES */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Aplicações Práticas
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Pratique diariamente, mesmo sem vontade</li>
            <li>• Hidrate a voz e relaxe antes de gravar</li>
            <li>• Use pausas de 1–2 segundos entre frases</li>
            <li>• Seja específico, positivo e no tempo presente</li>
            <li>• Use fones de ouvido ao ativar o Offset Hz</li>
            <li>• Afirmações funcionam apenas para transformação pessoal</li>
          </ul>
        </motion.section>

        {/* EXEMPLOS DE AFIRMAÇÕES */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Exemplos de Afirmações
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>🌟 Autoestima</strong>
              <p className="mt-2">Eu sou digno.</p>
              <p>Eu confio em mim.</p>
              <p>Eu aceito e celebro meu corpo.</p>
              <p>Minha saúde é prioridade.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>🌟 Saúde</strong>
              <p className="mt-2">Meu corpo é saudável.</p>
              <p>Meus pensamentos renovam minha energia.</p>
              <p>Eu durmo profundamente.</p>
              <p>Trato meu corpo com bondade.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>🌟 Abundância</strong>
              <p className="mt-2">Sou um ímã para prosperidade.</p>
              <p>Minha renda cresce constantemente.</p>
              <p>Minha vida é plena.</p>
              <p>Sou grato pela abundância.</p>
            </div>
          </div>
        </motion.section>

        {/* AVISO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-100 border-l-4 border-yellow-500 p-8 rounded-2xl shadow-md"
        >
          <p className="font-bold text-yellow-800 mb-2">
            📌 Aviso Importante
          </p>
          <p className="text-yellow-800">
            O MindSync é uma ferramenta de educação e autoconhecimento.
            Não é um dispositivo médico e não diagnostica, trata, cura nem previne doenças.
            Essas declarações não foram avaliadas pela FDA.
          </p>
        </motion.div>

        {/* FECHAMENTO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 border border-blue-200 rounded-3xl p-10 shadow-xl"
        >
          <p className="text-blue-700 text-xl leading-relaxed">
            O MindSync é muito mais do que um simples exercício de afirmações:
            ele combina voz, música e frequência para ajudar você a reprogramar sua mente
            e criar uma realidade mais positiva.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post14
