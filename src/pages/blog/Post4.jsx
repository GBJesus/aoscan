import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post4 = () => {
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Tudo Sobre o Voz Interior
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              A sua voz revela muito mais do que você imagina. Pense que pode enganar um detector de mentiras? Pense novamente.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Seus pensamentos e emoções ficam registrados nas cordas vocais, e nenhuma tentativa de mascarar a voz pode esconder isso.
            </p>
          </div>

          <img
            src="/assets/blog-post-4.png"
            alt="Voz Interior"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* BENEFÍCIOS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <p className="text-gray-700 leading-relaxed">
            O Inner Voice Scan foi desenvolvido a partir da mesma tecnologia usada em testes poligráficos (detector de mentiras).
          </p>

          <p className="font-medium text-blue-700">
            Ele ajuda a harmonizar o estado emocional, apoiando:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✅ Concentração 🧠</li>
            <li>✅ Criatividade 🎨</li>
            <li>✅ Inteligência emocional 💜</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Com apenas 10 segundos de gravação da sua voz, o sistema identifica desequilíbrios emocionais expressos no seu padrão vocal.
          </p>
        </motion.section>

        {/* RELATÓRIOS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-top bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border"
        >

          <img
            src="/assets/blog-post-4-3.jpeg"
            alt="Áudios do Voz Interior"
            className="rounded-2xl shadow-lg"
          />

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">
              Relatórios Inner Voice
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Cada vez que você realiza um Inner Voice Scan, recebe um relatório que mostra:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>🎵 Três notas ou oitavas fora de equilíbrio</li>
              <li>🎼 Uma oitava principal suprimida</li>
              <li>🎧 Quatro arquivos MP3 personalizados (balancing harmonics)</li>
            </ul>
          </div>
        </motion.section>

        {/* TECNOLOGIAS DOS ÁUDIOS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <p className="text-gray-700 leading-relaxed">
            Esses áudios são exclusivos para você, incorporando:
          </p>

          <ul className="grid sm:grid-cols-1 gap-2 text-gray-700">
            <li>- Radionics</li>
            <li>- Batidas binaurais</li>
            <li>- Frequências específicas</li>
          </ul>

          <i className="text-gray-600 leading-relaxed">
            Tudo isso para apoiar seu equilíbrio emocional e mental.
          </i>
        </motion.section>

        {/* COMO FAZER */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-10 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Como Fazer um Inner Voice Scan
          </h2>

          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>Grave 10 segundos da sua voz.</li>
            <li>O sistema gera o relatório e os tons de apoio.</li>
            <li>
              Escute os áudios durante o dia (pela manhã, antes de dormir ou quando precisar de um estímulo extra).
            </li>
            <li className="italic">
              Para resultados ainda melhores, use os óculos LightWave na cor indicada pelo relatório.
            </li>
          </ol>
        </motion.section>

        {/* PRODUTO DE APOIO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-top bg-gradient-to-br from-indigo-50 to-white-100 rounded-3xl p-10 border"
          role="alert"
        >
          <div>
            <p className="font-bold text-gray-800 mb-6">
              🕶️ Produto de Apoio – LightWave Glasses
            </p>
            <p className="text-gray-700 leading-relaxed">
              Os óculos LightWave foram desenvolvidos para potencializar os resultados dos scans (Quick Scan, EZ Scan e Inner Voice).
              Cada cor de lente possui um benefício específico. O relatório indica qual usar, e a recomendação é de 20 minutos por dia
              após o scan. Disponíveis para uso indoor e outdoor, são uma ferramenta simples e eficaz para complementar o trabalho com frequências.
            </p>
          </div>

          <img
            src="/assets/blog-post-4-4.webp"
            alt="Áudios do Voz Interior"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

      </article>
    </div>
  )
}

export default Post4
