import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post9 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/blog"
        className="inline-flex items-center text-blue-600 hover:text-purple-800 mb-12 transition-colors font-medium"
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
          className="grid md:grid-cols-2 gap-12 items-top"
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Tudo Sobre o Módulo SEFI
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mt-10">
              O <strong>S.E.F.I.</strong> (Subtle Energy Frequency Imprinter — Impressor de Frequências Sutis) é um recurso de bem-estar que permite capturar e transmitir digitalmente <strong>frequências sutis de energia</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Essas frequências podem ser utilizadas para definir intenções, apoiar práticas de autorreflexão, fornecer suporte energético diário e até serem transmitidas para objetos como água, cristais ou itens pessoais.
            </p>
          </div>

          <img
            src="/src/assets/blog-post-9-1.webp"
            alt="SEFI AO Scan"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* PARA QUE SERVE */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <p className="text-gray-700 leading-relaxed">
            As frequências do SEFI podem ser utilizadas para:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✨ Definir intenções pessoais</li>
            <li>🧘 Apoiar práticas de autorreflexão</li>
            <li>⚡ Fornecer suporte energético diário</li>
            <li>💧 Transmitir frequências para água, cristais e itens pessoais</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Dessa forma, o SEFI se integra de maneira simples às rotinas de bem-estar, mindfulness e desenvolvimento pessoal.
          </p>
        </motion.section>

        {/* IMAGEM ENTRE SEÇÕES */}
        {/* <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/src/assets/blog-post-9-1.webp"
            alt="Frequências do SEFI"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div> */}

        {/* CATEGORIAS DO SEFI - GRID */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-8"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🎼 Categorias do SEFI
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Custom Playlist</strong><br />
              Biblioteca personalizável de frequências que podem ser combinadas ou tocadas individualmente.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Quantum Reach</strong><br />
              Frequências amplas para apoiar clareza emocional e atenção plena.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Quantum Frequency</strong><br />
              Conjuntos de frequências inspirados em temas vibracionais ligados ao bem-estar geral.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Quantum Affirmations</strong><br />
              Afirmações em áudio transmitidas por frequência, apoiando intenções e harmonia emocional.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Quantum Flowers</strong><br />
              Frequências inspiradas em essências florais, associadas ao equilíbrio emocional.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Quantum Chakras</strong><br />
              Frequências que representam os sete chakras, apoiando a consciência energética.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Quantum Homeopathics</strong><br />
              Padrões sutis inspirados na homeopatia (não substitui homeopatia médica).
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>INNERgy Homeo-Energetix</strong><br />
              Coleção de padrões energéticos inspirados em ressonâncias naturais e tradições holísticas.
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            ❓ Perguntas Frequentes (FAQs)
          </h2>

            <p className="font-semibold text-gray-800 mt-10">
              1. Com que frequência devo usar o SEFI?
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              O SEFI pode ser usado várias vezes ao dia, conforme a necessidade.
              Não existe regra fixa — cada usuário adapta o uso de acordo com suas intenções e bem-estar pessoal.
            </p>

            <p className="font-semibold text-gray-800 mt-6">
              2. Preciso usar headset durante o SEFI?
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Não. O SEFI não requer o uso de fones de ouvido ou do Headset de Condução Óssea.
            </p>
        </motion.section>

        {/* AVISO IMPORTANTE */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-100 border-l-4 border-yellow-500 p-8 rounded-2xl shadow-md"
          role="alert"
        >
          <p className="font-bold text-yellow-800 mb-2">
            📌 Aviso Importante
          </p>
          <p className="text-yellow-800 leading-relaxed">
            O SEFI é uma ferramenta de exploração pessoal e apoio energético.
            Não é um dispositivo médico e não diagnostica, trata, cura ou previne condições físicas ou mentais.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post9
