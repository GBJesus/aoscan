import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post2 = () => {
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

      <article className="space-y-12">

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
              Tudo Sobre o Módulo Varredura Rápida
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              A Varredura Rápida foi criada para quem precisa de respostas rápidas e eficazes sobre seu estado físico e emocional, mesmo com a rotina corrida.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Esse recurso utiliza uma técnica de harmonização sonora que gera uma frequência de áudio personalizada para aquele momento específico.
            </p>
          </div>

          <img
            src="/assets/blog-post-2-1.jpeg"
            alt="Varredura Rápida"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* RESULTADOS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            O que você recebe com a Varredura Rápida
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Gravação de áudio que apoia o equilíbrio do estado emocional atual.</li>
            <li>✅ Sugestões de cores para uso nas lentes dos óculos LightWave.</li>
            <li>✅ Tons musicais que ajudam o corpo a retornar ao estado de homeostase.</li>
          </ul>
        </motion.section>

        {/* IMAGEM ENTRE SEÇÕES */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/blog-post-2-2.webp"
            alt="Frequências da Varredura"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div>

        {/* FREQUÊNCIAS ESPECÍFICAS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-top bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">
              Frequências Energéticas Específicas
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Além da leitura principal, a Varredura Rápida oferece frequências específicas para apoio energético direto no ambiente e no campo pessoal.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li><strong>1 - Clearing (Limpeza):</strong> elimina vibrações negativas do ambiente.</li>
              <li><strong>2 - Shielding (Proteção):</strong> cria uma barreira contra energias externas negativas.</li>
            </ul>
          </div>

          <img
            src="/assets/blog-post-2-3.webp"
            alt="Proteção energética"
            className="rounded-2xl shadow-lg"
          />
        </motion.section>

        {/* 3 MINUTE BOOST */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            3-Minute Boosts
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Sessões rápidas de 3 minutos para otimizar seu estado energético em diferentes categorias:
          </p>

          <ul className="grid sm:grid-cols-1 gap-3 text-gray-700">
            <li>⚡ Super Charger</li>
            <li>🎯 Focus</li>
            <li>😌 Relax</li>
            <li>🌍 Grounding</li>
            <li>🧠 Neuro Aerobics</li>
          </ul>
        </motion.section>

        {/* SUGESTÃO DE USO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-2xl shadow-md"
          role="alert"
        >
          <p className="font-bold text-blue-800 mb-2">
            💡 Sugestão de Uso
          </p>
          <p className="text-blue-700 leading-relaxed">
            As varreduras de manhã, tarde e noite são projetadas para uso diário, acompanhando sua rotina e promovendo equilíbrio contínuo.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post2
